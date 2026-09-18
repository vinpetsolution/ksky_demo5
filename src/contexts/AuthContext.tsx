"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  AUTH_TOKEN_KEY,
  AUTH_USER_KEY,
  AUTH_SCHEMA_VERSION_KEY,
  AUTH_SCHEMA_VERSION,
  SESSION_MARKER_KEY,
} from "@/constants/general";
import { clearAuthStorage, isDemoSessionValid } from "@/utils/auth";
import { demoSignIn, type DemoUser } from "@/app/actions/demo-auth";
import type { RegisterRequest } from "@/models/credential";

const PUBLIC_PATHS = new Set(["/login"]);

interface AuthContextType {
  user: DemoUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (userName: string, password: string) => Promise<{ success: boolean; message: string }>;
  register: (data: RegisterRequest) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  refreshUserProfile: (userName?: string) => Promise<void>;
  qnaUnreadCount: number;
  refreshQnaUnreadCount: () => Promise<void>;
  qnaAnsweredAt: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function parseStoredUser(raw: string): DemoUser | null {
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    if (!parsed.id || !parsed.userName || !parsed.role) return null;
    return {
      ...parsed,
      balanceMoney: 0,
      balancePoint: 0,
      balancePot: 0,
    } as DemoUser;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    try {
      const savedToken = localStorage.getItem(AUTH_TOKEN_KEY);
      const savedUser = localStorage.getItem(AUTH_USER_KEY);
      const sessionMarker = sessionStorage.getItem(SESSION_MARKER_KEY);
      const schemaVersion = localStorage.getItem(AUTH_SCHEMA_VERSION_KEY);

      if (savedToken || savedUser) {
        const parsedUser = savedUser ? parseStoredUser(savedUser) : null;
        const canRestore =
          !!savedToken &&
          !!sessionMarker &&
          schemaVersion === AUTH_SCHEMA_VERSION &&
          isDemoSessionValid(savedToken) &&
          parsedUser !== null;

        if (canRestore) {
          setToken(savedToken);
          setUser(parsedUser);
          sessionStorage.setItem(SESSION_MARKER_KEY, "true");
        } else {
          clearAuthStorage();
        }
      }
    } catch {
      clearAuthStorage();
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isLoading) return;

    if (token && pathname === "/login") {
      router.replace("/");
      return;
    }

    if (!token && !PUBLIC_PATHS.has(pathname)) {
      router.replace("/login");
    }
  }, [isLoading, token, pathname, router]);

  const refreshUserProfile = useCallback(async () => {
    // Demo: balance always stays 0
  }, []);

  const refreshQnaUnreadCount = useCallback(async () => {
    // Demo: no unread QnA
  }, []);

  const login = useCallback(
    async (userName: string, password: string): Promise<{ success: boolean; message: string }> => {
      try {
        const res = await demoSignIn(userName, password);

        if (res.success && res.user && res.token) {
          setUser(res.user);
          setToken(res.token);
          localStorage.setItem(AUTH_TOKEN_KEY, res.token);
          localStorage.setItem(AUTH_USER_KEY, JSON.stringify(res.user));
          localStorage.setItem(AUTH_SCHEMA_VERSION_KEY, AUTH_SCHEMA_VERSION);
          sessionStorage.setItem(SESSION_MARKER_KEY, "true");
          router.replace("/");
          return { success: true, message: "로그인 성공" };
        }

        return { success: false, message: res.message || "로그인 실패" };
      } catch {
        return { success: false, message: "로그인에 실패했습니다." };
      }
    },
    [router],
  );

  const register = useCallback(
    async (_data: RegisterRequest): Promise<{ success: boolean; message: string }> => {
      void _data;
      return { success: false, message: "데모 페이지에서는 회원가입이 불가합니다." };
    },
    [],
  );

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    clearAuthStorage();
    router.replace("/login");
  }, [router]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token,
        isLoading,
        login,
        register,
        logout,
        refreshUserProfile,
        qnaUnreadCount: 0,
        refreshQnaUnreadCount,
        qnaAnsweredAt: 0,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
