"use client";

import { useState } from "react";
import Link from "next/link";
import MobileLeftMenu from "./MobileLeftMenu";
import MobileRightMenu from "./MobileRightMenu";
import { useAuth } from "@/contexts/AuthContext";
import { formatMoney } from "@/utils/format";

export default function Header() {
  const { user, logout } = useAuth();
  const [showPointPopup, setShowPointPopup] = useState(false);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    logout();
  };

  const userName = user?.userName || "";
  const balanceMoney = user?.balanceMoney ?? 0;
  const balancePoint = user?.balancePoint ?? 0;

  return (
    <header className="cd-morph-dropdown">
      <div className="header_wrap" id="header">
        <div id="nav">
          <div className="nav_wrap">
            <div className="top_info">
              <div className="logo animated fadeIn">
                <Link href="/">
                  <span className="logo_intro top"></span>
                </Link>
              </div>

              <div className="member_info">
                <ul>
                  <li>
                    <span className="level_icon lv-1"></span>
                    <span className="level_text">
                      <Link href="/user-info">
                        <span className="nickname gfont_bold">{userName}</span>
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="login_textbefore">
                      <a className="nickname gfont_bold" href="#" onClick={handleLogout}>로그아웃</a>
                    </span>
                  </li>
                  <li>
                    <span className="memoham_text">
                      <span className="icon_memo"></span>
                      <Link href="/messages">
                        <span className="memo_text gfont_bold">쪽지함&nbsp;:</span>
                        <span className="memo_text gfont_bold">0</span>
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="money_text">
                      <span className="circle1"></span>
                      <a href="#"><span className="num gfont_bold">{formatMoney(balanceMoney)}</span></a>
                    </span>
                  </li>
                  <li>
                    <span className="money_text has-btn">
                      <span className="circle2"></span>
                      <span
                        className="change_but ongothic_eb"
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowPointPopup(true)}
                      >
                        전환
                      </span>
                      <a href="#"><span className="num gfont_bold">{formatMoney(balancePoint)}</span></a>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="menu_top">
                <div className="mnu">
                  <ul id="main-menu">
                    <li className="big_menu"><Link href="/casino" className="gfont_medium">카지노</Link></li>
                    <li className="big_menu"><Link href="/slots" className="gfont_medium">슬롯</Link></li>
                    <li className="big_menu"><Link href="/deposit" className="gfont_medium">입금</Link></li>
                    <li className="big_menu"><Link href="/withdraw" className="gfont_medium">출금</Link></li>
                    <li className="big_menu">
                      <a href="#" className="gfont_medium">더보기 +</a>
                      <ul id="sub-menu">
                        <li><Link href="/bet-history" aria-label="subemnu">베팅내역</Link></li>
                        <li><Link href="/agent-ranking" aria-label="subemnu">에이전트 배팅 랭킹</Link></li>
                        <li><Link href="/user-ranking" aria-label="subemnu">유저 배팅 랭킹</Link></li>
                        <li><Link href="/messages?tab=notice" aria-label="subemnu">공지사항</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <input type="checkbox" id="mobileLeftMenuToggleBtn" style={{ display: "none" }} />
              <label htmlFor="mobileLeftMenuToggleBtn" className="mobile-menu menu-icon-box">
                <span className="fa user"></span>
              </label>

              <MobileLeftMenu />

              <input type="checkbox" id="mobileRightMenuToggleBtn" style={{ display: "none" }} />
              <label htmlFor="mobileRightMenuToggleBtn" className="mobile-modify menu-icon-box">
                <span className="fa modify"></span>
              </label>

              <MobileRightMenu />
            </div>
          </div>
        </div>

        <div className="maintopinfo">
          <ul>
            <li>
              <span className="level_text">
                <span className="level_icon lv-1"></span>
                <Link href="/user-info">
                  <span className="nickname gfont_bold">{userName}</span>
                </Link>
              </span>
            </li>
            <li>
              <span className="money_text">
                <span className="circle1"></span> <span className="num gfont_bold">{formatMoney(balanceMoney)}</span>
              </span>
            </li>
            <li>
              <span className="money_text">
                <span className="circle2"></span>
                <span
                  className="change_but ongothic_eb"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPointPopup(true)}
                >
                  전환
                </span>
                <span className="num gfont_bold">{formatMoney(balancePoint)}</span>
              </span>
            </li>
            <li>
              <span className="memoham_text">
                <span className="icon_memo"></span>
                <Link href="/messages">
                  <span className="memo_text gfont_bold">쪽지함&nbsp;:</span>
                  <span className="memo_text gfont_bold">0</span>
                </Link>
              </span>
            </li>
            <li>
              <span className="level_text">
                <Link href="/deposit"><span className="nickname1 gfont_bold">입금신청</span></Link>
              </span>
            </li>
            <li>
              <span className="level_text">
                <Link href="/withdraw"><span className="nickname1 gfont_bold">출금신청</span></Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {showPointPopup && (
        <div
          className="point-popup-overlay"
          onClick={() => setShowPointPopup(false)}
        >
          <div className="point-popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="goldline_top_1"></span>
            <div className="money_Charge">
              <ul>
                <li className="money_ChargeT" style={{ width: "100%", textAlign: "center", fontSize: "1.2em", padding: "15px 0 10px" }}>
                  포인트 전환
                </li>

                <li className="money_ChargeT">현재 포인트</li>
                <li className="money_ChargeText">
                  <span className="num gfont_bold">{formatMoney(balancePoint)}<small>&nbsp;P</small></span>
                </li>

                <li className="money_ChargeT">전환될 금액</li>
                <li className="money_ChargeText">
                  <span className="num gfont_bold" style={{ color: "#e6ce6f" }}>{formatMoney(balancePoint)}<small>&nbsp;원</small></span>
                </li>

                <li className="money_ChargeT">전환 후 잔액</li>
                <li className="money_ChargeText">
                  <span className="num gfont_bold" style={{ color: "#00ff09" }}>{formatMoney(balanceMoney + balancePoint)}<small>&nbsp;원</small></span>
                </li>
              </ul>
            </div>

            <div className="center_applyform" style={{ margin: 0, border: "none", background: "none" }}>
              <ul>
                <li className="button">
                  <input
                    type="button"
                    className="btn_Apply gfont_medium"
                    value="취소"
                    onClick={() => setShowPointPopup(false)}
                    readOnly
                  />
                  <input
                    type="button"
                    className="btn_Apply gfont_medium"
                    value="전환하기"
                    onClick={() => setShowPointPopup(false)}
                    disabled={!balancePoint}
                    style={{ opacity: !balancePoint ? 0.5 : 1 }}
                    readOnly
                  />
                </li>
              </ul>
            </div>
            <span className="goldline_bottom_1"></span>
          </div>
        </div>
      )}
    </header>
  );
}
