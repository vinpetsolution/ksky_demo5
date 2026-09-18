export interface CasinoProvider {
  key: string;       // data-gkey
  vendor: string;    // data-vendor
  product: string;   // data-product
  cssId: string;     // CSS class identifier (e.g., "evo", "mgt")
  bgClass: string;   // background class (e.g., "evo_bg")
  name: string;      // display name in Korean
}

export const casinoProviders: CasinoProvider[] = [
  { key: "xt_01", vendor: "evolution", product: "evolution_all_games", cssId: "evo", bgClass: "evo_bg", name: "에볼루션" },
  { key: "xt_03", vendor: "MicroGaming", product: "MGL_GRAND_LobbyAll", cssId: "mgt", bgClass: "mgt_bg", name: "마이크로" },
  { key: "xt_05", vendor: "Asia Gaming", product: "0", cssId: "asg", bgClass: "asg_bg", name: "아시아게이밍" },
  { key: "xt_06", vendor: "DreamGame", product: "dgcasino", cssId: "drg", bgClass: "drg_bg", name: "드림게이밍" },
  { key: "xt_09", vendor: "sexybcrt", product: "MX-LIVE-001", cssId: "sg", bgClass: "sg_bg", name: "섹시게이밍" },
  { key: "xt_10", vendor: "PragmaticPlay Live", product: "104", cssId: "prp", bgClass: "prp_bg", name: "프라그마틱" },
  { key: "xt_12", vendor: "PlayTech", product: "ubal", cssId: "ptc", bgClass: "ptc_bg", name: "플레이테크" },
  { key: "xt_17", vendor: "ezugi", product: "ezugi", cssId: "ezugi", bgClass: "ezugi_bg", name: "에즈기" },
  { key: "xt_18", vendor: "bota", product: "bota", cssId: "bota", bgClass: "bota_bg", name: "보타" },
  { key: "xt_19", vendor: "Skywind Live", product: "sw_liveGame_all_live", cssId: "skwd", bgClass: "skwd_bg", name: "스카이윈드" },
  { key: "xt_55", vendor: "WM Live", product: "wmcasino", cssId: "wm", bgClass: "wm_bg", name: "WM라이브" },
  { key: "xt_65", vendor: "vivo", product: "703", cssId: "vivo", bgClass: "vivo_bg", name: "비보" },
];
