"use client";

import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { useAuth } from "@/contexts/AuthContext";

function maskName(name: string): string {
  if (!name || name.length <= 1) return name;
  if (name.length === 2) return name[0] + "*";
  return name[0] + "*".repeat(name.length - 2) + name[name.length - 1];
}

function maskAccount(account: string): string {
  if (!account || account.length <= 6) return account;
  return account.slice(0, 3) + "****" + account.slice(-3);
}

export default function UserInfoPage() {
  const { user } = useAuth();

  const userName = user?.userName || "-";
  const bankHolder = user?.bank_holder || "-";
  const bankName = user?.bank_name || "-";
  const bankNo = user?.bank_no || "-";

  return (
    <PageLayout>
      <div id="casino_wrap" className="user-info-wrap">
        {/* Top Notice */}
        <div className="casino_notice">
          <span className="top_text_modify logo_intro"></span>
        </div>

        {/* User Info List */}
        <div className="mypage_List">
          <span className="goldline_top"></span>
          <ul>
            <li className="Kinds">아이디</li>
            <li className="Contents">{userName}</li>
            <li className="Kinds">비밀번호</li>
            <li className="Contents">(비밀번호 변경은 고객센터로 문의)</li>
            <li className="Kinds">예금주</li>
            <li className="Contents">{maskName(bankHolder)}</li>
            <li className="Kinds">출금은행</li>
            <li className="Contents">{bankName}</li>
            <li className="Kinds second">출금계좌정보</li>
            <li className="Contents second">{maskAccount(bankNo)}</li>
            <li className="Kinds">주의사항</li>
            <li className="Contents">개인정보 변경을 원하시면 고객센터로 문의해 주세요.</li>
          </ul>
          <span className="goldline_bottom"></span>
        </div>

        {/* Bottom Button */}
        <div className="mypageList_Bottom">
          <ul>
            <li>
              <Link href="/inquiry">
                <div className="btn_1on1"><span>고객센터 바로가기</span></div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
