"use client";

import { useState, useRef, useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";

interface LoginFormProps {
  onSwitchToJoin: () => void;
}

export default function LoginForm({ onSwitchToJoin }: LoginFormProps) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [alertInfo, setAlertInfo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const userIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login } = useAuth();

  const handleLogin = useCallback(async () => {
    setAlertInfo("");

    if (userId.trim() === "") {
      setAlertInfo("아이디 입력을 해주세요.");
      userIdRef.current?.focus();
      return;
    }

    if (password === "") {
      setAlertInfo("비밀번호 입력을 해주세요.");
      passwordRef.current?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await login(userId.trim().toLowerCase(), password);
      if (!result.success) {
        setAlertInfo(result.message);
      }
    } catch {
      setAlertInfo("로그인에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  }, [userId, password, login]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div id="loginContent" className="login-pop-contents">
      <div className="login_frm">
        <span className="goldline_top_1"></span>
        <form id="frmLogin" method="post" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <div className="loginform">
            <ul>
              <li>아이디</li>
              <li>
                <input
                  className="userid"
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value.toLowerCase())}
                  onKeyDown={handleKeyPress}
                  ref={userIdRef}
                  maxLength={20}
                  tabIndex={1}
                  placeholder="아이디"
                  autoComplete="username"
                />
              </li>
              <li>비밀번호</li>
              <li>
                <input
                  className="passwd"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyPress}
                  ref={passwordRef}
                  maxLength={20}
                  tabIndex={2}
                  placeholder="비밀번호"
                  autoComplete="current-password"
                />
              </li>
            </ul>
          </div>
        </form>
        <span className="hint" id="alertInfo">{alertInfo}</span>
        <span className="goldline_bottom_1"></span>
      </div>

      <div className="login_frmbottom">
        <ul>
          <li>
            <span
              className="login_button"
              onClick={handleLogin}
              tabIndex={5}
              style={{ opacity: isSubmitting ? 0.6 : 1, pointerEvents: isSubmitting ? "none" : "auto" }}
            >
              <span className="gfont_medium">{isSubmitting ? "로그인 중..." : "로그인"}</span>
            </span>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); onSwitchToJoin(); }}>
              <span className="login_button1"><span className="gfont_medium">회원가입</span></span>
            </a>
          </li>
          {/* Telegram inquiry button - commented out
          <li>
            <span className="login_button2">
              <a href="https://t.me/agt119" target="TELEGRAM_agt119">
                <span className="gfont_medium">텔레그램 문의</span>
              </a>
            </span>
          </li>
          */}
        </ul>
      </div>
    </div>
  );
}
