"use client";

import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export default function InquiryDetailPage() {
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
              <span className="tit" style={{ padding: "10px 0", display: "block", color: "#eec231", fontWeight: "bold" }}>
                계좌문의
              </span>
            </li>
            <li className="button">
              <input
                type="button"
                className="btn_Apply gfont_medium"
                value="계좌문의"
                onClick={handleAccountInquiry}
              />
              <Link href="/inquiry">
                <input type="button" className="btn_Apply gfont_medium" value="목록보기" readOnly />
              </Link>
            </li>
          </ul>
          <span className="goldline_bottom_1"></span>
        </div>
      </div>
    </PageLayout>
  );
}
