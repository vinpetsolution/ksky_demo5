import { VendorCssMapping } from "@/models/vendor";

/**
 * Slot vendors with COMPLETE assets (unique bg + logo).
 * Rendered first on the page.
 */
export const slotVendorCssMapping: Record<string, VendorCssMapping> = {
  PragmaticPlay_Slot:  { cssId: "slot_prag",        bgClass: "slot200_bg" },
  PlaynGo:             { cssId: "slot_playngo",      bgClass: "slot207_bg" },
  RedTiger:            { cssId: "slot_redtiger",     bgClass: "slot213_bg" },
  NetEnt:              { cssId: "slot_netent",       bgClass: "slot214_bg" },
  Booongo:             { cssId: "slot_bng",          bgClass: "slot217_bg" },
  CQ9:                 { cssId: "slot_cq9",          bgClass: "slot220_bg" },
  NoLimitCity:         { cssId: "slot_nolimit",      bgClass: "slot227_bg" },
  MicrogamingSlot:     { cssId: "slot_micro",        bgClass: "slot209_bg" },
  Habanero:            { cssId: "slot_habanero",     bgClass: "slot201_bg" },
  DragoonSoft:         { cssId: "slot_dragoon",      bgClass: "slot215_bg" },
  YGGDrasil:           { cssId: "slot_ygg",          bgClass: "slot216_bg" },
  PlaytechSlot:        { cssId: "slot_playtech",     bgClass: "slot219_bg" },
  Skywind_Slot:        { cssId: "slot_skywind",      bgClass: "slot221_bg" },
  Wazdan:              { cssId: "slot_wazdan",       bgClass: "slot222_bg" },
  PGSoft:              { cssId: "slot_pgsoft",       bgClass: "slot223_bg" },
  BigTimeGaming:       { cssId: "slot_btg",          bgClass: "slot225_bg" },
  Hacksaw:             { cssId: "slot_hack",         bgClass: "slot255_bg" },
  AvatarUX:            { cssId: "slot_avatar",       bgClass: "slot256_bg" },
  BlueprintGaming:     { cssId: "slot_blueprint",    bgClass: "slot258_bg" },
  Evoplay:             { cssId: "slot_evoplay",      bgClass: "slotevoplay_bg" },
  PlayStar:            { cssId: "slot_playstar",     bgClass: "slotplaystar_bg" },
  RelaxGaming:         { cssId: "slot_relax",        bgClass: "slotrelax_bg" },
  GameArt:             { cssId: "slot_gameart",      bgClass: "slotgameart_bg" },
  Thunderkick:         { cssId: "slot_thunderkick",  bgClass: "slotthunderkick_bg" },
  "1x2Gaming":         { cssId: "slot_1x2",         bgClass: "slot1x2_bg" },
  Spadegaming:         { cssId: "slot_spade",        bgClass: "slot202_bg" },
  QuickSpin:           { cssId: "slot_quick",        bgClass: "slot204_bg" },
  FastSpin:            { cssId: "slot_fastspin",     bgClass: "slot224_bg" },
  NextSpin:            { cssId: "slot_next",         bgClass: "slot249_bg" },
};

/**
 * Slot vendors WITHOUT full assets → show English name as text.
 * Each uses a unique bg that doesn't conflict with full vendors.
 */
export const slotPartialMapping: Record<string, VendorCssMapping> = {
  BTGaming:            { cssId: "", bgClass: "slot218_bg" },
  CPGames:             { cssId: "", bgClass: "slotka_bg" },
  ExtendedNetEnt:      { cssId: "", bgClass: "slot212_bg" },
  Fachai:              { cssId: "", bgClass: "slot253_bg" },
  Genesis:             { cssId: "", bgClass: "slot254_bg" },
  GoldenBay:           { cssId: "", bgClass: "slot257_bg" },
  JDBSlot:             { cssId: "", bgClass: "mini1_bg" },
  JiLi:                { cssId: "", bgClass: "mini2_bg" },
  Joker:               { cssId: "", bgClass: "mini3_bg" },
  LGDGaming:           { cssId: "", bgClass: "mini4_bg" },
  Mobilots:            { cssId: "", bgClass: "mini5_bg" },
  PlayAceSlot:         { cssId: "", bgClass: "mini13_bg" },
  SimplePlay:          { cssId: "", bgClass: "mini14_bg" },
  TripleProfitGaming:  { cssId: "", bgClass: "mini15_bg" },
  YesBingo:            { cssId: "", bgClass: "mini16_bg" },
};

/** Check if slot vendor has complete assets */
export function hasSlotFullAssets(vendorId: string): boolean {
  return vendorId in slotVendorCssMapping;
}

/** Get CSS for any slot vendor (full or partial). Returns undefined if unknown. */
export function getSlotVendorCss(vendorId: string): VendorCssMapping | undefined {
  return slotVendorCssMapping[vendorId] ?? slotPartialMapping[vendorId];
}
