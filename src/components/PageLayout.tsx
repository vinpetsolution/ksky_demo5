"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ScrollToTop from "@/components/ScrollToTop";
import { useAuth } from "@/contexts/AuthContext";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const { isAuthenticated, isLoading } = useAuth();

  // Show loading while checking auth
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

  // AuthContext will redirect to /login if not authenticated
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
              {children}
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
