"use client";

import { useState } from "react";
import LoginHeader from "@/components/LoginHeader";
import BannerSlider from "@/components/BannerSlider";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import JoinForm from "@/components/JoinForm";
import "@/styles/login.css";

type PopupView = "login" | "join" | null;

export default function LoginPage() {
  const [activePopup, setActivePopup] = useState<PopupView>(null);
  const [loginPopupVisible, setLoginPopupVisible] = useState(false);

  const openLogin = () => {
    setActivePopup("login");
    setLoginPopupVisible(true);
  };

  const openJoin = () => {
    setActivePopup("join");
    setLoginPopupVisible(true);
  };

  const closePopup = () => {
    setLoginPopupVisible(false);
    setActivePopup(null);
  };

  // Clicking any game box or protected area should open login popup
  const handleRequireLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    openLogin();
  };

  return (
    <>
      <div id="body_wrap" className="login-wrapper join">
        {/* Background */}
        <div id="bg_light">
          <span className="rotating_logo rotatingA"></span>
          <span className="rotating_logo1 rotatingA"></span>
          <span className="rotating_logo2 rotatingA"></span>
        </div>

        {/* Header */}
        <LoginHeader onOpenLogin={openLogin} onOpenJoin={openJoin} />

        {/* Main Content */}
        <div className="sub_Main login" id="container">
          <div id="cont_container" className="login">
            <div className="login" id="cont_center">
              {/* Banner Slider */}
              <BannerSlider />

              {/* Main Game Boxes - all require login */}
              <div className="main-box-wrap">
                <div className="main_box">
                  <a href="#" onClick={handleRequireLogin}><span className="main_bigcasino"></span></a>
                </div>
                <div className="main_box">
                  <a href="#" onClick={handleRequireLogin}><span className="main_bigslot"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />

        {/* Login/Join Popup Layer */}
        {loginPopupVisible && activePopup && (
          <div className="popup-layer popup-layer-login popup-layer-single" data-popups="1" style={{ display: "block" }}>
            <div className="popup-container">
              <div className="popup-box popup-box-single">
                <div className="popup-header">
                  <h2></h2>
                  <button type="button" className="popclose" id="popClose" onClick={closePopup}>
                    &#10006;
                  </button>
                </div>
                <div className="popup-contents">
                  <div className="popcontent">
                    <div className="login_form">
                      {activePopup === "join" && (
                        <JoinForm onCancel={closePopup} onSwitchToLogin={openLogin} />
                      )}
                      {activePopup === "login" && (
                        <LoginForm onSwitchToJoin={openJoin} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
