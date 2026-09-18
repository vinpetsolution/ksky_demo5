/**
 * Format number as integer with thousands separator, no decimals
 */
export function formatMoney(value: number): string {
  return Math.floor(value).toLocaleString();
}
