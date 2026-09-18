"use client";

import PageLayout from "@/components/PageLayout";

export default function NotePage() {
  return (
    <PageLayout>
      <div id="casino_wrap" className="note-wrap">
        <div className="casino_notice">
          <span className="top_text_memo logo_intro"></span>
        </div>

        <div id="event_list">
          <span className="goldline_top_1"></span>

          <div className="border_event_title">
            <ul>
              <li className="status ongothic_r">상태</li>
              <li className="eventname ongothic_r">제목</li>
              <li className="date ongothic_r">시간</li>
            </ul>
          </div>

          <div className="border_event_contents">
            <div style={{ padding: "20px", textAlign: "center", color: "#999" }}>
              표시할 쪽지가 없습니다.
            </div>
          </div>

          <span className="goldline_bottom_1"></span>
        </div>
      </div>
    </PageLayout>
  );
}
