import {
  AUTH_TOKEN_KEY,
  AUTH_USER_KEY,
  AUTH_SCHEMA_VERSION_KEY,
  SESSION_MARKER_KEY,
} from "@/constants/general";

const DEMO_SESSION_TOKEN = "demo-session";

export function isDemoSessionValid(token: string | null): boolean {
  return token === DEMO_SESSION_TOKEN;
}

/** Remove every piece of persisted auth state (localStorage + sessionStorage). */
export function clearAuthStorage(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    localStorage.removeItem(AUTH_SCHEMA_VERSION_KEY);
    sessionStorage.removeItem(SESSION_MARKER_KEY);
  } catch {
    // Storage may be unavailable (private mode quirks) — nothing else to do.
  }
}
