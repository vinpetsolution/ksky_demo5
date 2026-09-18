"use client";

import Link from "next/link";

export default function MobileLeftMenu() {

  return (
    <div className="menuwrap">
      <nav id="menu">
        <div className="logo1">
          <div className="logo animated fadeIn">
            <Link href="/"><span className="logo_intro top"></span></Link>
          </div>
        </div>

        <ul className="mobile_menu tabs">
          {/* 1. 카지노 게임 */}
          <li className="list">
            <span className="icon casino"></span>
            <Link href="/casino" className="gfont_medium">카지노</Link>
          </li>

          {/* 2. 슬롯 게임 */}
          <li className="list">
            <span className="icon casino"></span>
            <Link href="/slots" className="gfont_medium">슬롯</Link>
          </li>

          {/* 3. 미니게임 (보드게임 / 준비중) - disabled */}
          <li className="list disabled-menu">
            <span className="icon live1"></span>
            <span className="gfont_medium" style={{ color: "#666", cursor: "not-allowed" }}>
              미니게임 <span style={{ fontSize: "11px", color: "#888" }}>(준비중)</span>
            </span>
          </li>

          {/* 4. 레볼루션 (홀덤게임 / 준비중) - disabled */}
          <li className="list disabled-menu">
            <span className="icon revol"></span>
            <span className="gfont_medium" style={{ color: "#666", cursor: "not-allowed" }}>
              레볼루션 <span style={{ fontSize: "11px", color: "#888" }}>(준비중)</span>
            </span>
          </li>

          {/* 5. 배팅내역 */}
          <li className="list">
            <span className="icon betting"></span>
            <Link href="/bet-history" className="gfont_medium">베팅내역</Link>
          </li>

          {/* 6. 이벤트 (준비중) - disabled */}
          <li className="list disabled-menu">
            <span className="icon event"></span>
            <span className="gfont_medium" style={{ color: "#666", cursor: "not-allowed" }}>
              이벤트 <span style={{ fontSize: "11px", color: "#888" }}>(준비중)</span>
            </span>
          </li>

          {/* 7. 공지사항 */}
          <li className="list">
            <span className="icon result"></span>
            <Link href="/messages?tab=notice" className="gfont_medium">공지사항</Link>
          </li>

          {/* 고객센터 - hidden by request, uncomment to re-enable
          <li className="list">
            <span className="icon cscenter"></span>
            <Link href="/inquiry" className="gfont_medium" style={{ position: "relative", display: "inline-block" }}>
              고객센터
              {typeof qnaUnreadCount === "number" && qnaUnreadCount > 0 && (
                <span
                  className="badge-blink"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "-22px",
                    transform: "translateY(-50%)",
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
        </ul>
      </nav>
    </div>
  );
}
