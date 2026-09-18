import { VendorCssMapping } from "@/models/vendor";

/**
 * Vendors with COMPLETE assets (unique bg + logo).
 * These are rendered first on the page.
 */
/** Special vendor that always appears first */
export const royalVendorCss: VendorCssMapping = { cssId: "royal", bgClass: "asg_bg" };

export const vendorCssMapping: Record<string, VendorCssMapping> = {
  Evolution:                 { cssId: "evo",      bgClass: "evo_bg" },
  Microgaming:               { cssId: "mgt",      bgClass: "mgt_bg" },
  DreamGame:                 { cssId: "drg",      bgClass: "drg_bg" },
  SexyCasino:                { cssId: "sg",       bgClass: "sg_bg" },
  PragmaticPlay_LiveCasino:  { cssId: "prp",      bgClass: "prp_bg" },
  Playtech:                  { cssId: "ptc",      bgClass: "ptc_bg" },
  Ezugi:                     { cssId: "ezugi",    bgClass: "ezugi_bg" },
  Skywind_LiveCasino:        { cssId: "skwd",     bgClass: "skwd_bg" },
  WMCasino:                  { cssId: "wm",       bgClass: "wm_bg" },
  VivoGaming:                { cssId: "vivo",     bgClass: "vivo_bg" },
  BigGaming:                 { cssId: "big",      bgClass: "big_bg" },
  OrientalGaming:            { cssId: "oriental", bgClass: "oret_bg" },
  Dowinn:                    { cssId: "dowinn",   bgClass: "dowinn_bg" },
};

/**
 * Vendors WITHOUT full assets → no logo icon, show English name as text instead.
 * Uses unique minibg backgrounds (completely different image set from casino bg).
 * cssId = "" means no logo image, the page will render vendor_name text instead.
 */
export const partialVendorMapping: Record<string, VendorCssMapping> = {
  AllbetLive:    { cssId: "", bgClass: "mini13_bg" },
  EEAI:          { cssId: "", bgClass: "mini14_bg" },
  BetGamesTv:    { cssId: "", bgClass: "mini15_bg" },
  CockFight:     { cssId: "", bgClass: "mini16_bg" },
  DBLive:        { cssId: "", bgClass: "mini17_bg" },
  HotRoad:       { cssId: "", bgClass: "mini6_bg" },
  PlayAce:       { cssId: "", bgClass: "mini7_bg" },
  PrettyGaming:  { cssId: "", bgClass: "mini8_bg" },
  SAGaming:      { cssId: "", bgClass: "mini9_bg" },
  TGSpeed:       { cssId: "", bgClass: "mini10_bg" },
  Winfinity:     { cssId: "", bgClass: "mini11_bg" },
  XproGaming:    { cssId: "", bgClass: "mini12_bg" },
};

/** Check if vendor has complete assets */
export function hasFullAssets(vendorId: string): boolean {
  return vendorId in vendorCssMapping;
}

/** Get CSS for any vendor (full or partial). Returns undefined if unknown. */
export function getVendorCss(vendorId: string): VendorCssMapping | undefined {
  return vendorCssMapping[vendorId] ?? partialVendorMapping[vendorId];
}
