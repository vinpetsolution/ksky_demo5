"use client";

import PageLayout from "@/components/PageLayout";

export default function UserRankingPage() {
  return (
    <PageLayout>
      <div id="casino_wrap" className="ranking-wrap">
        <div className="casino_notice">
          <span className="top_text_ranking logo_intro"></span>
        </div>

        <div style={{ textAlign: "center", padding: "20px 0 10px" }}>
          <h2 style={{
            color: "#ffd700",
            fontSize: "24px",
            fontWeight: 700,
            fontFamily: "'Gmarket Sans Bold', sans-serif",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}>
            <span style={{ fontSize: "28px" }}>🏆</span>
            유저 배팅 랭킹
          </h2>
        </div>

        <div style={{ padding: "40px", textAlign: "center", color: "#999" }}>
          현재 진행 중인 이벤트가 없습니다.
        </div>
      </div>
    </PageLayout>
  );
}
