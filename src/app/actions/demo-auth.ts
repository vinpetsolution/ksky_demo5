"use server";

export interface DemoUser {
  id: string;
  userName: string;
  phone: string;
  agentId: string;
  balancePoint: number;
  balancePot: number;
  balanceMoney: number;
  totaledPlay: number;
  bank_holder: string;
  bank_name: string;
  bank_no: string;
  role: string;
  status: string;
}

export interface DemoAuthResponse {
  success: boolean;
  message: string;
  token: string;
  user: DemoUser | null;
}

const LOGIN_FAILED: DemoAuthResponse = {
  success: false,
  message: "아이디 또는 비밀번호가 올바르지 않습니다.",
  token: "",
  user: null,
};

function emptyUser(userName: string): DemoUser {
  return {
    id: "demo-user",
    userName,
    phone: "",
    agentId: "",
    balancePoint: 0,
    balancePot: 0,
    balanceMoney: 0,
    totaledPlay: 0,
    bank_holder: "",
    bank_name: "",
    bank_no: "",
    role: "USER",
    status: "ACTIVE",
  };
}

export async function demoSignIn(
  userName: string,
  password: string,
): Promise<DemoAuthResponse> {
  const expectedUser = process.env.DEMO_USERNAME ?? "";
  const expectedPass = process.env.DEMO_PASSWORD ?? "";
  const inputUser = userName.trim();

  if (!expectedUser || !expectedPass) {
    return LOGIN_FAILED;
  }

  if (inputUser !== expectedUser || password !== expectedPass) {
    return LOGIN_FAILED;
  }

  return {
    success: true,
    message: "로그인 성공",
    token: "demo-session",
    user: emptyUser(expectedUser),
  };
}
