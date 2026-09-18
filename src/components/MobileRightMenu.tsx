"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function MobileRightMenu() {
  const { logout } = useAuth();

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className="menuwrap1">
      <nav id="menu">
        <div className="logo1">
          <div className="member_infom">
            <ul>
              <li><span className="level_iconm lv-1"></span></li>
              <li>
                <span className="level_textm">
                  <Link href="/user-info">
                    <span className="nicknamem1 gfont_medium">Lv.1.</span>
                    <span className="nicknamem gfont_bold">모리슨</span>
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="right_menutopinfo">
          <ul>
            <li>&nbsp;</li>
            <li>
              <span className="icons">
                <a href="#" onClick={handleLogout}>
                  <span className="coupon_text">로그아웃</span>
                  <span className="icon_right"></span>
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div className="menutopbuttons">
          <ul>
            <li>
              <Link href="/deposit">
                <div className="button-87"><span>입금신청</span></div>
              </Link>
            </li>
            <li>
              <Link href="/withdraw">
                <div className="button-87"><span>출금신청</span></div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mobile_rightmenu">
          <ul>
            <li>
              <Link href="/deposit">
                <span className="icon_momenu excharge"></span>
                <span className="icon_text ongothic_r">입금신청</span>
              </Link>
            </li>
            <li>
              <Link href="/withdraw">
                <span className="icon_momenu exchange"></span>
                <span className="icon_text ongothic_r">출금신청</span>
              </Link>
            </li>
            <li>
              <Link href="/inquiry-detail">
                <span className="icon_momenu question"></span>
                <span className="icon_text ongothic_r">빠른계좌문의</span>
              </Link>
            </li>
            {/* 고객센터 - hidden by request, uncomment to re-enable
            <li>
              <Link href="/inquiry" style={{ position: "relative" }}>
                <span className="icon_momenu cscenter"></span>
                <span className="icon_text ongothic_r">고객센터</span>
                {typeof qnaUnreadCount === "number" && qnaUnreadCount > 0 && (
                  <span
                    className="badge-blink"
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      minWidth: "16px",
                      height: "16px",
                      padding: "0 4px",
                      fontSize: "10px",
                      fontWeight: 700,
                      lineHeight: "16px",
                      textAlign: "center",
                      color: "#fff",
                      background: "linear-gradient(to right, #fac721, #f93e00)",
                      borderRadius: "8px",
                    }}
                  >
                    {qnaUnreadCount}
                  </span>
                )}
              </Link>
            </li>
            */}
            {/* <li>
              <Link href="/store">
                <span className="icon_momenu choochun"></span>
                <span className="icon_text ongothic_r">지인현황</span>
              </Link>
            </li> */}
            <li>
              <Link href="/attend">
                <span className="icon_momenu attend"></span>
                <span className="icon_text ongothic_r">출석부</span>
              </Link>
            </li>
            <li>
              <Link href="/event">
                <span className="icon_momenu event"></span>
                <span className="icon_text ongothic_r">이벤트</span>
              </Link>
            </li>
            <li>
              <Link href="/event-ask">
                <span className="icon_momenu event_apply"></span>
                <span className="icon_text ongothic_r">이벤트신청</span>
              </Link>
            </li>
            <li>
              <Link href="/messages?tab=notice">
                <span className="icon_momenu guide"></span>
                <span className="icon_text ongothic_r">공지사항</span>
              </Link>
            </li>
            <li>
              <Link href="/bet-history">
                <span className="icon_momenu betting"></span>
                <span className="icon_text ongothic_r">베팅내역</span>
              </Link>
            </li>
            <li>
              <Link href="/agent-ranking">
                <span className="icon_momenu event"></span>
                <span className="icon_text ongothic_r">에이전트 랭킹</span>
              </Link>
            </li>
            <li>
              <Link href="/user-ranking">
                <span className="icon_momenu event"></span>
                <span className="icon_text ongothic_r">유저 랭킹</span>
              </Link>
            </li>
          </ul>
        </div>

{/* Domain & Telegram banners hidden */}
      </nav>
    </div>
  );
}
