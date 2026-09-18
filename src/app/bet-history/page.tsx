"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";

type BetTab = "casino" | "slot";

function isoDate(d: Date) {
  return d.toISOString().split("T")[0];
}

const thStyle: React.CSSProperties = {
  padding: "10px 6px", color: "#ffc000", fontSize: 12,
  fontWeight: "bold", textAlign: "center", whiteSpace: "nowrap",
  borderBottom: "1px solid #444",
};
const tdStyle: React.CSSProperties = {
  padding: "10px 6px", color: "#ddd", fontSize: 12,
  textAlign: "center", borderBottom: "1px solid #333",
};

export default function BetHistoryPage() {
  const [activeTab, setActiveTab] = useState<BetTab>("casino");
  const [filterResult, setFilterResult] = useState("");

  const now = new Date();
  const week = new Date();
  week.setDate(now.getDate() - 7);
  const [startDate, setStartDate] = useState(isoDate(week));
  const [endDate, setEndDate] = useState(isoDate(now));

  const handleTabChange = (tab: BetTab) => {
    setActiveTab(tab);
    setFilterResult("");
  };

  return (
    <PageLayout>
      <div id="casino_wrap" className="betview-wrap" style={{ background: "rgba(0,0,0,0.65)", borderRadius: 4 }}>
        <div className="casino_notice">
          <span className="top_text_betting logo_intro"></span>
        </div>

        <div id="tapmenu_wrap" className="tap-menu-wrap">
          <div id="nav2">
            <div className="buttonTit">
              <ul>
                {([
                  { key: "casino" as BetTab, label: "카지노 베팅내역" },
                  { key: "slot" as BetTab, label: "슬롯 베팅내역" },
                ] as const).map((t) => (
                  <li
                    key={t.key}
                    className={`tab4${activeTab === t.key ? " focus" : ""}`}
                    onClick={() => handleTabChange(t.key)}
                  >
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <span className="gfont_medium">{t.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="betting_title">
          <span className="goldline_top_1"></span>
          <span className="text">
            ※&nbsp;사이트 및 회원님의 보안을 위해 7일이 지난 베팅 내역은 자동
            삭제 처리됩니다.
          </span>
          <span className="goldline_bottom_1"></span>
        </div>

        <div className="sort-box flex-space-between wd-ful" style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", padding: "10px 15px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <input
              type="date" value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              style={{ padding: "6px 8px", background: "#333", border: "1px solid #555", color: "#fff", fontSize: 12 }}
            />
            <span style={{ color: "#888" }}>~</span>
            <input
              type="date" value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              style={{ padding: "6px 8px", background: "#333", border: "1px solid #555", color: "#fff", fontSize: 12 }}
            />
          </div>
          <select
            className="select-data-cody select"
            value={filterResult}
            onChange={(e) => setFilterResult(e.target.value)}
            style={{ padding: "6px 8px", background: "#333", border: "1px solid #555", color: "#fff", fontSize: 12 }}
          >
            <option value="">:: 당첨구분 ::</option>
            <option value="Win">당첨</option>
            <option value="Lose">미당첨</option>
            <option value="Bet">진행중</option>
          </select>
          <span style={{ color: "#aaa", fontSize: 12 }}>총 0건</span>
        </div>

        <div className="gamecate_text notosanskr">[&nbsp;좌우로 스크롤 하면 전체 내용을 확인하실 수 있습니다.&nbsp;]</div>

        <div style={{ overflowX: "auto" }}>
          <span className="goldline_top_1"></span>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "rgba(255,255,255,0.05)" }}>
                <th style={thStyle}>게임</th>
                <th style={thStyle}>카테고리</th>
                <th style={thStyle}>베팅금</th>
                <th style={thStyle}>당첨금</th>
                <th style={thStyle}>결과</th>
                <th style={thStyle}>일시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} style={{ ...tdStyle, padding: 30 }}>표시할 내용이 없습니다.</td>
              </tr>
            </tbody>
          </table>
          <span className="goldline_bottom_1"></span>
        </div>
      </div>
    </PageLayout>
  );
}
