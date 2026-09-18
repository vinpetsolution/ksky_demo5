"use client";

import { useState, useRef } from "react";
import { bankOptions, phoneCarriers } from "@/data/banks";
import { useAuth } from "@/contexts/AuthContext";
import type { RegisterRequest } from "@/models/credential";
import {
  notifyUsernameLowercaseOnly,
  sanitizeUsernameInput,
} from "@/utils/usernameInput";

interface JoinFormProps {
  onCancel: () => void;
  onSwitchToLogin?: () => void;
}

export default function JoinForm({ onCancel, onSwitchToLogin }: JoinFormProps) {
  const [warnInfo, setWarnInfo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
    phoneCom: "010",
    phoneCell1: "",
    phoneCell2: "",
    bank: "",
    accountName: "",
    accountNumber: "",
    withdrawPassword: "",
    agentCode: "",
    recommender: "",
  });

  const userIdRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const cell1Ref = useRef<HTMLInputElement>(null);
  const cell2Ref = useRef<HTMLInputElement>(null);
  const accountNameRef = useRef<HTMLInputElement>(null);
  const accountNumberRef = useRef<HTMLInputElement>(null);
  const withdrawPasswordRef = useRef<HTMLInputElement>(null);
  const agentCodeRef = useRef<HTMLInputElement>(null);

  const { register } = useAuth();

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const regexpExceptSPC = /[\s\[\]{}\(\)<>\?|`~!@#$%^&*\-_+=,.;:"'\\]/g;
    const regexpExceptPass = /[\s\[\]{}\(\)<>\?|`%&*\-+="'\\]/g;

    // Validate user ID
    const userId = formData.userId.toLowerCase();
    if (userId === "") {
      setWarnInfo("아이디 입력을 해주세요.");
      userIdRef.current?.focus();
      return;
    }
    if (!/^[a-z0-9]*$/.test(userId)) {
      setWarnInfo("아이디는 영문 소문자/숫자만 입력 가능합니다.");
      return;
    }
    if (userId.length < 3 || userId.length > 12) {
      setWarnInfo("아이디는 최소 3자 이상 12자 이하로 입력 가능합니다.");
      return;
    }

    // Validate nickname
    const nickname = formData.nickname.trim();
    if (nickname === "") {
      setWarnInfo("닉네임 입력을 해주세요.");
      nicknameRef.current?.focus();
      return;
    }
    if (nickname.length < 2 || nickname.length > 10 || regexpExceptSPC.test(nickname)) {
      setWarnInfo("닉네임은 특수문자 제외 2자 이상 10자 이하로 입력 가능합니다.");
      return;
    }

    // Validate password
    const password = formData.password.replace(regexpExceptPass, "");
    if (password.length < 4 || password.length > 20) {
      setWarnInfo("비밀번호 4자 이상 20자 이하로 입력 해주세요.");
      passwordRef.current?.focus();
      return;
    }

    // Validate password confirm
    if (password !== formData.passwordConfirm) {
      setWarnInfo("비밀번호가 일치하지 않습니다.");
      passwordConfirmRef.current?.focus();
      return;
    }

    // Validate phone
    const cell1 = formData.phoneCell1.trim();
    const cell2 = formData.phoneCell2.trim();
    if (/[^\d]/.test(cell1) || cell1.length < 3 || cell1.length > 4) {
      setWarnInfo("휴대폰 중간 번호를 올바르게 입력해주세요.");
      cell1Ref.current?.focus();
      return;
    }
    if (/[^\d]/.test(cell2) || cell2.length !== 4) {
      setWarnInfo("휴대폰 마지막 번호를 올바르게 입력해주세요.");
      cell2Ref.current?.focus();
      return;
    }

    // Validate bank
    if (formData.bank === "") {
      setWarnInfo("출금 은행 선택을 해주세요.");
      return;
    }

    // Validate account name
    const acName = formData.accountName.trim();
    if (acName === "" || acName.length > 10) {
      setWarnInfo("예금주를 올바르게 입력해주세요.");
      accountNameRef.current?.focus();
      return;
    }

    // Validate account number
    const acNum = formData.accountNumber.trim();
    if (acNum === "" || /[^\d]/.test(acNum) || acNum.length > 30) {
      setWarnInfo("출금 계좌번호를 올바르게 입력해주세요.");
      accountNumberRef.current?.focus();
      return;
    }

    // Validate withdraw password
    const wdPass = formData.withdrawPassword.trim();
    if (wdPass === "" || !/^[a-zA-Z0-9]*$/.test(wdPass) || wdPass.length < 3 || wdPass.length > 20) {
      setWarnInfo("출금 비번 3자 이상 20자 이하로 입력 해주세요. (숫자만 허용)");
      withdrawPasswordRef.current?.focus();
      return;
    }

    setWarnInfo("");
    setIsSubmitting(true);

    try {
      const selectedBank = bankOptions.find(b => b.value === formData.bank);
      const bankNameKorean = selectedBank?.label || formData.bank;

      const registerData: RegisterRequest = {
        userName: userId,
        nickName: nickname,
        password: password,
        phone: `${formData.phoneCom}${cell1}${cell2}`,
        agentId: formData.agentCode.trim(),
        role: "USER",
        bankHolder: acName,
        bankName: bankNameKorean,
        bankNo: acNum,
        transactionPassword: wdPass,
      };

      const result = await register(registerData);
      if (result.success) {
        alert("회원가입이 완료되었습니다. 로그인해주세요.");
        if (onSwitchToLogin) {
          onSwitchToLogin();
        }
      } else {
        setWarnInfo(result.message);
      }
    } catch {
      setWarnInfo("서버 연결 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="joinContent" className="login-pop-contents">
      <div className="join_form">
        <span className="goldline_top_1"></span>
        <div className="join_us">
          <form id="frmJoin" className="frm" method="post" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
            <input
              className="userid"
              type="text"
              value={formData.userId}
              onChange={(e) => {
                const { value, hadUppercase } = sanitizeUsernameInput(e.target.value);
                if (hadUppercase) notifyUsernameLowercaseOnly((msg) => setWarnInfo(msg));
                handleChange("userId", value);
              }}
              ref={userIdRef}
              minLength={3}
              maxLength={12}
              tabIndex={1}
              placeholder="아이디"
              autoFocus
            />
            <input
              className="userid"
              type="text"
              value={formData.nickname}
              onChange={(e) => handleChange("nickname", e.target.value)}
              ref={nicknameRef}
              minLength={2}
              maxLength={10}
              tabIndex={2}
              placeholder="닉네임"
            />
            <input
              className="userid"
              type="password"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              ref={passwordRef}
              minLength={4}
              maxLength={20}
              tabIndex={3}
              placeholder="비밀번호"
            />
            <input
              className="userid"
              type="password"
              value={formData.passwordConfirm}
              onChange={(e) => handleChange("passwordConfirm", e.target.value)}
              ref={passwordConfirmRef}
              minLength={4}
              maxLength={20}
              tabIndex={4}
              placeholder="비번확인"
            />

            <span className="phone">
              <span>휴대폰번호 입력</span>
              <select
                value={formData.phoneCom}
                onChange={(e) => handleChange("phoneCom", e.target.value)}
                tabIndex={5}
              >
                {phoneCarriers.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <input
                className="phoneNum"
                type="text"
                value={formData.phoneCell1}
                onChange={(e) => handleChange("phoneCell1", e.target.value)}
                ref={cell1Ref}
                maxLength={4}
                tabIndex={6}
                placeholder="중간번호"
              />
              <input
                className="phoneNum1"
                type="text"
                value={formData.phoneCell2}
                onChange={(e) => handleChange("phoneCell2", e.target.value)}
                ref={cell2Ref}
                maxLength={4}
                tabIndex={7}
                placeholder="마지막번호"
              />
            </span>

            <span className="bank">
              <span>출금계좌정보</span>
              <select
                className="select-bank"
                value={formData.bank}
                onChange={(e) => handleChange("bank", e.target.value)}
                tabIndex={8}
              >
                {bankOptions.map((b) => (
                  <option key={b.value} value={b.value}>{b.label}</option>
                ))}
              </select>
              <input
                className="bankName"
                type="text"
                value={formData.accountName}
                onChange={(e) => handleChange("accountName", e.target.value)}
                ref={accountNameRef}
                maxLength={10}
                tabIndex={9}
                placeholder="예금주 입력"
              />
              <input
                className="userid"
                type="text"
                value={formData.accountNumber}
                onChange={(e) => handleChange("accountNumber", e.target.value)}
                ref={accountNumberRef}
                maxLength={30}
                tabIndex={10}
                placeholder="출금계좌 -없이 입력"
              />
              <input
                className="userid"
                type="password"
                value={formData.withdrawPassword}
                onChange={(e) => handleChange("withdrawPassword", e.target.value)}
                ref={withdrawPasswordRef}
                maxLength={20}
                tabIndex={11}
                placeholder="출금비번입력"
              />
            </span>

            <span className="phone" style={{ marginTop: "5px" }}>
              <span>대리점 코드</span>
              <input
                type="text"
                className="userid"
                value={formData.agentCode}
                onChange={(e) => handleChange("agentCode", e.target.value)}
                ref={agentCodeRef}
                tabIndex={12}
                placeholder="대리점 코드"
              />
            </span>
            <span className="hint authInfo" id="warnInfo">{warnInfo}</span>

            <button
              className="login_button login-btn"
              type="button"
              onClick={handleSubmit}
              tabIndex={17}
              disabled={isSubmitting}
              style={{ opacity: isSubmitting ? 0.6 : 1 }}
            >
              <span className="gfont_medium">{isSubmitting ? "처리 중..." : "회원가입"}</span>
            </button>
            <a href="#" className="login_button" onClick={(e) => { e.preventDefault(); onCancel(); }} tabIndex={19}>
              회원가입취소
            </a>
          </form>
        </div>
        <span className="goldline_bottom_1"></span>
        <div className="margin10"></div>
        <span className="goldline_top_1"></span>
        <div className="join_us guide">
          <span className="notice">※&nbsp;출금 비밀번호는 가입 후 <span className="bolder">수정이 불가능</span>합니다.</span>
          <span className="notice">※&nbsp;출금 비밀번호는 신중하게 생각해서 입력하시기 바랍니다.</span>
          <span className="notice">※&nbsp;로그인 비밀번호나 1111, 2222, 3333등 노출이 쉬운 비밀번호를 입력하여 피해가 발생하는 경우,</span>
          <span className="notice">※&nbsp;이에 따른 책임은 전적으로 본인에게 있음을 알려 드립니다.</span>
          <span className="notice">※&nbsp;출금 요청 시 출금 비밀번호가 일치하지 않을 경우는 출금 신청이 되지 않습니다.</span>
          <span className="notice">※&nbsp;예금주 명은 반드시 실명이어야 하며,</span>
          <span className="notice">※&nbsp;계좌번호 변경 시 고객센터로 문의하시기 바랍니다.</span>
        </div>
        <span className="goldline_bottom_1"></span>
        <div className="margin10"></div>
      </div>
    </div>
  );
}
