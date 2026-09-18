/** Canonical username typing for join / account-id fields. */

export const USERNAME_LOWERCASE_ONLY_MSG =
  "아이디는 영문 소문자만 사용할 수 있습니다.";

export type SanitizeUsernameResult = {
  value: string;
  hadUppercase: boolean;
};

/**
 * Strip spaces and lowercase. hadUppercase is true when the raw input
 * contained A–Z before normalization (for one-shot toast / field error).
 */
export function sanitizeUsernameInput(raw: string): SanitizeUsernameResult {
  const hadUppercase = /[A-Z]/.test(raw);
  const value = raw.replace(/\s/g, "").toLowerCase();
  return { value, hadUppercase };
}

let lastUsernameCaseToastAt = 0;

/** Debounced user-facing notice when uppercase was typed/pasted. */
export function notifyUsernameLowercaseOnly(notify: (msg: string) => void): void {
  const now = Date.now();
  if (now - lastUsernameCaseToastAt < 2500) return;
  lastUsernameCaseToastAt = now;
  notify(USERNAME_LOWERCASE_ONLY_MSG);
}
