"use client";

import { useState } from "react";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { useAuth } from "@/contexts/AuthContext";
import { formatMoney } from "@/utils/format";

const QUICK_AMOUNTS = [
  { label: "1만원", value: 10000 },
  { label: "3만원", value: 30000 },
  { label: "5만원", value: 50000 },
  { label: "10만", value: 100000 },
  { label: "50만", value: 500000 },
  { label: "100만", value: 1000000 },
  { label: "500만", value: 5000000 },
];

const WITHDRAWAL_MIN_AMOUNT = 10000;
const WITHDRAWAL_MAX_AMOUNT = 1000000000;

export default function WithdrawPage() {
  const { user } = useAuth();
  const [amount, setAmount] = useState("");
  const [withdrawPassword, setWithdrawPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const balanceMoney = user?.balanceMoney ?? 0;
  const bankName = user?.bank_name || "-";
  const bankHolder = user?.bank_holder || "-";

  const handleQuickAmount = (value: number) => {
    if (value === 0) {
      setAmount("");
    } else {
      const current = parseInt(amount.replace(/,/g, "")) || 0;
      const maxAllowed = Math.min(balanceMoney, WITHDRAWAL_MAX_AMOUNT);
      const newVal = Math.min(current + value, maxAllowed);
      setAmount(newVal.toLocaleString());
    }
  };

  const handleAllBalance = () => {
    const maxAllowed = Math.min(balanceMoney, WITHDRAWAL_MAX_AMOUNT);
    setAmount(formatMoney(maxAllowed));
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^\d]/g, "");
    if (raw) {
      const numVal = parseInt(raw);
      const maxAllowed = Math.min(balanceMoney, WITHDRAWAL_MAX_AMOUNT);
      const cappedVal = Math.min(numVal, maxAllowed);
      setAmount(cappedVal.toLocaleString());
    } else {
      setAmount("");
    }
  };

  const handleSubmit = async () => {
    if (!user) return;
    const numAmount = parseInt(amount.replace(/,/g, "")) || 0;
    if (numAmount < WITHDRAWAL_MIN_AMOUNT) {
      alert(`최소 환전금액은 ${formatMoney(WITHDRAWAL_MIN_AMOUNT)}원입니다.`);
      return;
    }
    if (numAmount > WITHDRAWAL_MAX_AMOUNT) {
      alert(`최대 환전금액은 ${formatMoney(WITHDRAWAL_MAX_AMOUNT)}원입니다.`);
      return;
    }
    if (numAmount > balanceMoney) {
      alert("보유머니를 초과할 수 없습니다.");
      return;
    }
    if (!withdrawPassword) {
      alert("환전 비밀번호를 입력해주세요.");
      return;
    }

    setIsSubmitting(true);
    alert("환전 신청이 완료되었습니다.");
    setAmount("");
    setWithdrawPassword("");
    setIsSubmitting(false);
  };

  return (
    <PageLayout>
      <div className="bank-wrap withdraw">
        <div className="casino_notice">
          <span className="top_text_exchange logo_intro"></span>
        </div>

        <div id="tapmenu_wrap" className="tap-menu-wrap">
          <div id="nav2">
            <div className="buttonTit">
              <ul>
                <li className="tab4">
                  <Link href="/deposit"><span className="gfont_medium">머니충전</span></Link>
                </li>
                <li className="tab4 focus">
                  <Link href="/withdraw"><span className="gfont_medium">머니환전</span></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="money_Charge">
          <span className="goldline_top_1"></span>
          <ul>
            <li className="money_ChargeT">은행명</li>
            <li className="money_ChargeText">
              <span className="bank_button1 gfont_medium">{bankName}</span>
            </li>

            <li className="money_ChargeT holdmoney">보유머니</li>
            <li className="money_ChargeText holdmoney">
              <span>{formatMoney(balanceMoney)}<small>&nbsp;원</small></span>
            </li>

            <li className="money_ChargeT">환전금액</li>
            <li className="money_ChargeText">
              <input
                type="text"
                className="Money"
                maxLength={15}
                placeholder="환전금액 입력"
                value={amount}
                onChange={handleAmountChange}
                autoFocus
                required
              />
            </li>
            <li className="money_ChargeT money"></li>
            <li className="money_ChargeText money">
              <div className="moneybuts">
                {QUICK_AMOUNTS.map((q) => (
                  <a key={q.value} href="#" className="money" onClick={(e) => { e.preventDefault(); handleQuickAmount(q.value); }}>
                    {q.label}
                  </a>
                ))}
                <a href="#" className="money" onClick={(e) => { e.preventDefault(); handleAllBalance(); }}>전액</a>
                <a href="#" className="money clear" onClick={(e) => { e.preventDefault(); handleQuickAmount(0); }}>정정</a>
              </div>
            </li>

            <li className="money_ChargeT">환전비번</li>
            <li className="money_ChargeText">
              <input
                type="password"
                className="Money"
                placeholder="※ 가입 시 기재한 환전 비번 입력"
                value={withdrawPassword}
                onChange={(e) => setWithdrawPassword(e.target.value)}
                required
              />
            </li>

            <li className="money_ChargeT">예금주명</li>
            <li className="money_ChargeText">
              <span>{bankHolder}</span>
            </li>
          </ul>
          <span className="goldline_bottom_1"></span>
        </div>

        <div className="money_ChargeBut">
          <a
            href="#"
            className="excharge"
            onClick={(e) => { e.preventDefault(); handleSubmit(); }}
            style={{ opacity: isSubmitting ? 0.6 : 1, pointerEvents: isSubmitting ? "none" : "auto" }}
          >
            <span className="gfont_medium">{isSubmitting ? "처리 중..." : "환전신청"}</span>
          </a>
        </div>

        <span className="goldline_top_1"></span>
        <div className="charge_title2">
          <div className="charge_notice">
            <center><h4>환전 주의사항</h4></center>
            <ul>
              <li><span className="text"><span>1.</span>&nbsp;출금 전 등록된 계좌, 예금주, 은행명을 꼭 확인하시길 바랍니다.</span></li>
              <li><span className="text"><span>2.</span>&nbsp;각 은행 점검 시간으로 인해 출금이 제한될 수가 있습니다.</span></li>
              <li><span className="text"><span>3.</span>&nbsp;출금 최소 금액은 10,000원이며, 만 원단위로 환전 가능합니다.</span></li>
            </ul>
          </div>
        </div>
        <span className="goldline_bottom_1"></span>

        <div className="MoneyCharge_Listtitle">
          <h4>환전내역 (0건)</h4>
          <span className="small_text">※&nbsp;보안을 위해 7일이 지난 환전 내역은 삭제 처리됩니다.</span>
        </div>
        <div className="gamecate_text notosanskr">[&nbsp;좌우로 스크롤 하면 전체 내용을 확인하실 수 있습니다.&nbsp;]</div>
        <div id="moneyList">
          <div className="MoneyCharge_List">
            <span className="goldline_top_1"></span>
            <ul>
              <li className="No">번호</li>
              <li className="Money">신청금액</li>
              <li className="State">상태</li>
              <li className="Date">신청일</li>
              <li className="Datea">승인일</li>
              <li className="Del">비고</li>
            </ul>
            <p className="empty">환전 내역이 없습니다.</p>
            <span className="goldline_bottom_1"></span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
