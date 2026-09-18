"use client";

import PageLayout from "@/components/PageLayout";

export default function StorePage() {
  return (
    <PageLayout>
      <div id="casino_wrap">
        <div className="casino_notice">
          <span className="top_text logo_intro"></span>
        </div>
        <div style={{ padding: "40px 20px", textAlign: "center", color: "#999" }}>
          준비 중입니다.
        </div>
      </div>
    </PageLayout>
  );
}
