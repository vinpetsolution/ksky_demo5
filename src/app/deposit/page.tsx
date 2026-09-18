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

const DEPOSIT_MIN_AMOUNT = 10000;
const DEPOSIT_MAX_AMOUNT = 1000000000;

export default function DepositPage() {
  const { user } = useAuth();
  const [amount, setAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const balanceMoney = user?.balanceMoney ?? 0;
  const userBankName = user?.bank_name || "-";

  const handleQuickAmount = (value: number) => {
    if (value === 0) {
      setAmount("");
    } else {
      const current = parseInt(amount.replace(/,/g, "")) || 0;
      const newVal = Math.min(current + value, DEPOSIT_MAX_AMOUNT);
      setAmount(newVal.toLocaleString());
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^\d]/g, "");
    if (raw) {
      const numVal = parseInt(raw);
      const cappedVal = Math.min(numVal, DEPOSIT_MAX_AMOUNT);
      setAmount(cappedVal.toLocaleString());
    } else {
      setAmount("");
    }
  };

  const handleSubmit = async () => {
    if (!user) return;
    const numAmount = parseInt(amount.replace(/,/g, "")) || 0;
    if (numAmount < DEPOSIT_MIN_AMOUNT) {
      alert(`최소 충전금액은 ${formatMoney(DEPOSIT_MIN_AMOUNT)}원입니다.`);
      return;
    }
    if (numAmount > DEPOSIT_MAX_AMOUNT) {
      alert(`최대 충전금액은 ${formatMoney(DEPOSIT_MAX_AMOUNT)}원입니다.`);
      return;
    }
    setIsSubmitting(true);
    alert("충전 신청이 완료되었습니다.");
    setAmount("");
    setIsSubmitting(false);
  };

  return (
    <PageLayout>
      <div className="bank-wrap deposit">
        <div className="casino_notice">
          <span className="top_text_excharge logo_intro"></span>
        </div>

        <div id="tapmenu_wrap" className="tap-menu-wrap">
          <div id="nav2">
            <div className="buttonTit">
              <ul>
                <li className="tab4 focus">
                  <Link href="/deposit"><span className="gfont_medium">머니충전</span></Link>
                </li>
                <li className="tab4">
                  <Link href="/withdraw"><span className="gfont_medium">머니환전</span></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="money_Charge">
          <span className="goldline_top_1"></span>
          <ul>
            <li className="money_ChargeT holdmoney">보유머니</li>
            <li className="money_ChargeText holdmoney">
              <span>{formatMoney(balanceMoney)}<small>&nbsp;원</small></span>
            </li>

            <li className="money_ChargeT">충전금액</li>
            <li className="money_ChargeText">
              <input
                type="text"
                className="Money"
                maxLength={15}
                placeholder="충전금액 입력"
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
                <a href="#" className="money clear" onClick={(e) => { e.preventDefault(); handleQuickAmount(0); }}>정정</a>
              </div>
            </li>

            <li className="money_ChargeT">은행명</li>
            <li className="money_ChargeText two-lines">
              <b>{userBankName}</b>
              <span className="line2 Moneynametxt">※&nbsp;이체시 &apos;은행명&apos;과 동일해야 합니다.</span>
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
            <span className="gfont_medium">{isSubmitting ? "처리 중..." : "충전신청"}</span>
          </a>
        </div>

        <span className="goldline_top_1"></span>
        <div className="charge_title2">
          <div className="charge_notice">
            <center><h4>충전방법</h4></center>
            <ul>
              <li><span className="text">PC뱅킹&nbsp;/&nbsp;폰뱅킹&nbsp;방법으로 입금 가능</span></li>
              <li><span className="text">입금순서&nbsp;:&nbsp;입금계좌문의&nbsp;&gt;&nbsp;입금&nbsp;&gt;&nbsp;충전신청</span></li>
            </ul>
          </div>
          <div className="charge_notice">
            <center><h4>충전 주의사항</h4></center>
            <ul>
              <li><span className="text"><span>1.</span>&nbsp;실시간으로 계좌가 변경되고 있으니 입금 전 계좌 문의 필수입니다.</span></li>
              <li><span className="text"><span>2.</span>&nbsp;(구) 계좌로 잘못 입금에 대한 책임은 회원님 본인에게 있습니다.</span></li>
              <li><span className="text"><span>3.</span>&nbsp;충전 신청 후 입금 확인이 되지 않을 경우 취소 처리가 됩니다.</span></li>
              <li><span className="text"><span>4.</span>&nbsp;타 명의 입금 및 수표 입금 시 처리 불가능합니다.</span></li>
              <li><span className="text"><span>5.</span>&nbsp;간편이체(토스,카카오페이,핀크 등) 불가능합니다.</span></li>
              <li><span className="text"><span>6.</span>&nbsp;최소 입금 10,000원이며, 최대 충전금액은 1,000,000,000원입니다.</span></li>
            </ul>
          </div>
        </div>
        <span className="goldline_bottom_1"></span>

        <div className="MoneyCharge_Listtitle">
          <h4>충전내역 (0건)</h4>
          <span className="small_text">※&nbsp;보안을 위해 7일이 지난 충전 내역은 삭제 처리됩니다.</span>
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
            <p className="empty">충전 내역이 없습니다.</p>
            <span className="goldline_bottom_1"></span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
