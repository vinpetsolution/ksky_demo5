"use client";

import { useState, useCallback } from "react";

const slides = [
  {
    className: "slide1",
    spans: ["main_banner_img1", "main_banner_img11", "main_banner_img111"],
  },
  {
    className: "slide2",
    spans: ["main_banner_img1_2", "main_banner_img11_2", "main_banner_img112"],
  },
  {
    className: "slide3",
    spans: ["main_banner_img1_3", "main_banner_img11_3", "main_banner_img113"],
  },
];

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <div className="main_banner">
      <div className="wrap">
        <div id="arrow-left" className="arrow slide-prev" onClick={goToPrev}></div>
        <div id="slider">
          {slides.map((slide, index) => (
            <div
              key={slide.className}
              className={`slide ${slide.className}`}
              style={{ display: index === currentSlide ? "block" : "none" }}
            >
              <div className="slide-content">
                {slide.spans.map((spanClass) => (
                  <span key={spanClass} className={spanClass}></span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div id="arrow-right" className="arrow slide-next" onClick={goToNext}></div>
      </div>
    </div>
  );
}
