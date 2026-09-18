"use client";

import Link from "next/link";

interface LoginHeaderProps {
  onOpenLogin: () => void;
  onOpenJoin: () => void;
}

export default function LoginHeader({ onOpenLogin, onOpenJoin }: LoginHeaderProps) {
  // All menu clicks should open login popup since user is not authenticated
  const handleRequireLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenLogin();
  };

  return (
    <header className="cd-morph-dropdown">
      <div className="header_wrap" id="header">
        <div id="nav">
          <div className="nav_wrap">
            <div className="top_info">
              {/* Logo */}
              <div className="logo animated fadeIn">
                <Link href="/"><span className="logo_intro top"></span></Link>
              </div>

              {/* Login/Join buttons */}
              <div className="logint_infobefore">
                <ul>
                  <li>
                    <span className="login_textbefore">
                      <a href="#" onClick={(e) => { e.preventDefault(); onOpenLogin(); }} className="btn-example">
                        <span className="nickname gfont_bold">로그인</span>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="login_textbefore">
                      <a href="#" onClick={(e) => { e.preventDefault(); onOpenJoin(); }} className="btn-example">
                        <span className="nickname gfont_bold">회원가입</span>
                      </a>
                    </span>
                  </li>
                </ul>
              </div>

              {/* PC Menu - all items require login */}
              <div className="menu_top">
                <div className="mnu">
                  <ul id="main-menu">
                    <li className="big_menu"><a href="#" onClick={handleRequireLogin} className="gfont_medium">카지노</a></li>
                    <li className="big_menu"><a href="#" onClick={handleRequireLogin} className="gfont_medium">슬롯</a></li>
                    <li className="big_menu"><a href="#" onClick={handleRequireLogin} className="gfont_medium">입금</a></li>
                    <li className="big_menu"><a href="#" onClick={handleRequireLogin} className="gfont_medium">출금</a></li>
                    {/* 고객센터 - hidden by request, uncomment to re-enable
                    <li className="big_menu"><a href="#" onClick={handleRequireLogin} className="gfont_medium">고객센터</a></li>
                    */}
                    <li className="big_menu">
                      <a href="#" className="gfont_medium">더보기 +</a>
                      <ul id="sub-menu">
                        <li><a href="#" onClick={handleRequireLogin} aria-label="subemnu">베팅내역</a></li>
                        <li><Link href="/agent-ranking" onClick={handleRequireLogin} aria-label="subemnu">에이전트 배팅 랭킹</Link></li>
                        <li><Link href="/user-ranking" onClick={handleRequireLogin} aria-label="subemnu">유저 배팅 랭킹</Link></li>
                        {/* Hidden: 경기결과, 출석체크, 지인추천현황, 이벤트, 이벤트신청 */}
                        <li><a href="#" onClick={handleRequireLogin} aria-label="subemnu">공지사항</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mobile menu buttons - require login */}
              <div className="mobile-menu" onClick={handleRequireLogin}>
                <span className="fa user"></span>
              </div>
              <div className="mobile-modify" onClick={handleRequireLogin}>
                <span className="fa modify"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub Top Login Bar */}
        <div className="maintoplogin">
          <ul>
            <li>
              <span className="login_text">
                <a href="#" onClick={(e) => { e.preventDefault(); onOpenLogin(); }} className="btn-example">
                  <span className="nickname gfont_bold">로그인</span>
                </a>
              </span>
            </li>
            <li>
              <span className="login_text">
                <a href="#" onClick={(e) => { e.preventDefault(); onOpenJoin(); }} className="btn-example">
                  <b><span className="nickname gfont_medium">회원가입</span></b>
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
