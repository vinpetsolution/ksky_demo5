"use client";

import Link from "next/link";
import Header from "@/components/Header";
import BannerSlider from "@/components/BannerSlider";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ScrollToTop from "@/components/ScrollToTop";
import { useAuth } from "@/contexts/AuthContext";

export default function HomePage() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#000",
        color: "#fff",
      }}>
        <span>로딩 중...</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <div id="body_wrap">
        <div id="bg_light">
          <span className="rotating_logo rotatingA"></span>
          <span className="rotating_logo1 rotatingA"></span>
          <span className="rotating_logo2 rotatingA"></span>
        </div>

        <Header />

        <div className="sub_Main" id="container">
          <div id="cont_container" className="main">
            <div id="cont_center">
              <BannerSlider />

              <div className="main-box-wrap">
                <div className="main_box">
                  <Link href="/casino">
                    <span className="main_bigcasino"></span>
                  </Link>
                </div>
                <div className="main_box">
                  <Link href="/slots">
                    <span className="main_bigslot"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <BottomNav />
      </div>

      <ScrollToTop />
    </>
  );
}
