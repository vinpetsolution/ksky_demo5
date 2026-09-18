"use client";

import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { casinoProviders } from "@/data/casinoProviders";

export default function CasinoPage() {
  return (
    <PageLayout>
      <div id="casino_wrap" className="interlock-game kplay-wrap">
        <div className="casino_notice">
          <span className="top_text logo_intro"></span>
        </div>

        <div id="tapmenu_wrap" className="tap-menu-wrap">
          <div id="nav2">
            <div className="buttonTit">
              <ul>
                <li className="tab4 focus">
                  <Link href="/casino">
                    <span className="gfont_medium">카지노</span>
                  </Link>
                </li>
                <li className="tab4">
                  <Link href="/slots">
                    <span className="gfont_medium">슬롯</span>
                  </Link>
                </li>
                <li className="tab4">
                  <Link href="/bet-history">
                    <span className="gfont_medium">카지노내역</span>
                  </Link>
                </li>
                <li className="tab4">
                  <Link href="/deposit">
                    <span className="gfont_medium">카지노충전</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="casino_table xtreem-wrap">
          <ul>
            {casinoProviders.map((provider) => (
              <li key={provider.key}>
                <div
                  className={`nemo_bg external-play ${provider.cssId} ${provider.bgClass}`}
                  data-play="xtreem"
                  data-gkey={provider.key}
                  data-vendor={provider.vendor}
                  data-product={provider.product}
                  onClick={(e) => e.preventDefault()}
                  style={{ cursor: "pointer" }}
                >
                  <span className="goldline_top"></span>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <span className={`casino_logo ${provider.cssId} logo_intro`}></span>
                    <span className="casino_text gfont_medium logo_intro">
                      {provider.name}
                    </span>
                    <span className="play_button">
                      <span>PLAY NOW</span>
                    </span>
                  </a>
                  <span className="goldline_bottom"></span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
