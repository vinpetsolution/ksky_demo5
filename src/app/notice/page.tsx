"use client";

import PageLayout from "@/components/PageLayout";

export default function NoticePage() {
  return (
    <PageLayout>
      <div id="casino_wrap" className="note-wrap">
        <div className="casino_notice">
          <span className="top_text_notice logo_intro"></span>
        </div>

        <div id="Notice_list">
          <div className="border_cntL">
            <span className="goldline_top_1"></span>
            <div className="promemo-holder">
              <div className="promemo-row">
                <div className="pr-memo">
                  <div className="pr-memo-holder">
                    <ul>
                      <li className="notice_title">공지사항</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="promemo-row">
                <div className="pr-memo">
                  <div className="pr-memo-holder">
                    <ul>
                      <li className="notice_text" style={{ textAlign: "center", color: "#999" }}>
                        공지사항이 없습니다.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <span className="goldline_bottom_1"></span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
