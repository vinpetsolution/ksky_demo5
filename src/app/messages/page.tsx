"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PageLayout from "@/components/PageLayout";

type TabType = "note" | "notice";

function MessagesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialTab = (searchParams.get("tab") as TabType) || "note";
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    router.replace(`/messages?tab=${tab}`);
  };

  return (
    <PageLayout>
      <div id="casino_wrap" className="note-wrap">
        <div className="casino_notice">
          <span className="top_text_memo logo_intro"></span>
        </div>

        <div id="tapmenu_wrap" className="tap-menu-wrap">
          <div id="nav2">
            <div className="buttonTit">
              <ul>
                <li
                  className={`tab4${activeTab === "note" ? " focus" : ""}`}
                  onClick={() => handleTabChange("note")}
                >
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <span className="gfont_medium">쪽지함</span>
                  </a>
                </li>
                <li
                  className={`tab4${activeTab === "notice" ? " focus" : ""}`}
                  onClick={() => handleTabChange("notice")}
                >
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <span className="gfont_medium">공지사항</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {activeTab === "note" && (
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
        )}

        {activeTab === "notice" && (
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
        )}
      </div>
    </PageLayout>
  );
}

export default function MessagesPage() {
  return (
    <Suspense fallback={null}>
      <MessagesContent />
    </Suspense>
  );
}
