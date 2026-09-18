"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      className={`jcm-top hidden-xs hidden-sm`}
      style={{ display: visible ? "block" : "none" }}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <span>맨위로</span>
    </a>
  );
}
