"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";

export default function InquiryPage() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!contents.trim()) {
      alert("문의 내용을 입력해주세요.");
      return;
    }

    setIsSubmitting(true);
    alert("문의가 접수되었습니다.");
    setTitle("");
    setContents("");
    setIsSubmitting(false);
  };

  const handleAccountInquiry = () => {
    alert("계좌문의가 접수되었습니다.");
  };

  return (
    <PageLayout>
      <div id="casino_wrap" className="inquiry-wrap">
        <div className="casino_notice">
          <span className="top_text_cs logo_intro"></span>
        </div>

        <div className="center_applyform">
          <span className="goldline_top_1"></span>
          <ul>
            <li className="form">
              <input
                type="text"
                className="titleB"
                maxLength={200}
                placeholder="제목을 입력해주세요."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </li>
            <li className="title">
              <textarea
                className="noresize"
                maxLength={65536}
                placeholder="문의 내용을 입력해주세요."
                value={contents}
                onChange={(e) => setContents(e.target.value)}
                required
              />
            </li>
            <li className="button">
              <input
                type="button"
                className="btn_Apply gfont_medium"
                value="계좌문의"
                onClick={handleAccountInquiry}
              />
              <input
                type="button"
                className="btn_Apply gfont_medium"
                value={isSubmitting ? "처리 중..." : "문의하기"}
                onClick={handleSubmit}
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.6 : 1 }}
              />
            </li>
          </ul>
          <span className="goldline_bottom_1"></span>
        </div>

        <div id="Memo_list" className="inquiry">
          <div id="event_list">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h4>지난 문의내역</h4>
            </div>
            <div className="border_event_title">
              <ul>
                <li className="status">상태</li>
                <li className="eventname">문의내용</li>
                <li className="date">문의시간</li>
              </ul>
            </div>
            <div className="border_event_contents">
              <p className="empty">문의 내역이 없습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
