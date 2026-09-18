"use client";

import { footerIcons } from "@/data/games";

export default function Footer() {
  return (
    <div id="footer">
      <div className="banners">
        <ul>
          <li className="blogo"></li>
        </ul>
      </div>

      <div className="f_btm">
        <address>
          Copyright&nbsp;&copy;&nbsp;&nbsp;-&nbsp;&nbsp;<strong>KSKY SOLUTION</strong>.
          <span>All&nbsp;Rights&nbsp;Reserved.</span>
        </address>
      </div>

      <div className="footer_area">
        <div id="footer_slider">
          <div className="image-box">
            {footerIcons.map((icon) => (
              <div key={icon}>
                <img src={`/img/icons/${icon}.png`} alt={icon} />
              </div>
            ))}
            {/* Clone set for infinite scroll effect */}
            {footerIcons.map((icon) => (
              <div key={`clone-${icon}`} className="clone">
                <img src={`/img/icons/${icon}.png`} alt={icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
