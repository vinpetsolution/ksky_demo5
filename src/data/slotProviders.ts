export interface SlotProvider {
  key: string;       // data-gkey
  vendor: string;    // data-vendor
  product: string;   // data-product (empty for view-more type)
  cssId: string;     // CSS class identifier
  bgClass: string;   // background class
  name: string;      // display name in Korean
  type: "play" | "more"; // "play" = external-play, "more" = view-more-games
}

export const slotProviders: SlotProvider[] = [
  { key: "xt_200", vendor: "PragmaticPlay", product: "pragmatic_play_slots", cssId: "slot_200", bgClass: "slot200_bg", name: "프라그마틱모음", type: "play" },
  { key: "xt_207", vendor: "playngo", product: "playngo_slots", cssId: "slot_207", bgClass: "slot207_bg", name: "플레이앤고모음", type: "play" },
  { key: "xt_213", vendor: "redtiger", product: "redtiger_slots", cssId: "slot_213", bgClass: "slot213_bg", name: "레드타이거모음", type: "play" },
  { key: "xt_214", vendor: "netent", product: "netent_slots", cssId: "slot_214", bgClass: "slot214_bg", name: "넷엔트모음", type: "play" },
  { key: "xt_217", vendor: "Booongo", product: "booongo_slots", cssId: "slot_217", bgClass: "slot217_bg", name: "분고모음", type: "play" },
  { key: "xt_218", vendor: "Playson", product: "playson_slots", cssId: "slot_218", bgClass: "slot218_bg", name: "플레이슨모음", type: "play" },
  { key: "xt_220", vendor: "CQ9", product: "cq9_slots", cssId: "slot_220", bgClass: "slot220_bg", name: "CQ9모음", type: "play" },
  { key: "xt_227", vendor: "Nolimit City", product: "nolimitcity_slots", cssId: "slot_227", bgClass: "slot227_bg", name: "노리미트모음", type: "play" },
  { key: "xt_209", vendor: "MicroGaming Plus Slo", product: "", cssId: "slot_209", bgClass: "slot209_bg", name: "마이크로슬롯모음", type: "more" },
  { key: "xt_201", vendor: "Habanero", product: "", cssId: "slot_201", bgClass: "slot201_bg", name: "하바네로모음", type: "more" },
  { key: "xt_215", vendor: "dragoonsoft", product: "", cssId: "slot_215", bgClass: "slot215_bg", name: "드레곤소프트모음", type: "more" },
  { key: "xt_216", vendor: "Yggdrasil", product: "", cssId: "slot_216", bgClass: "slot216_bg", name: "YGG모음", type: "more" },
  { key: "xt_219", vendor: "PlayTechSlot", product: "", cssId: "slot_219", bgClass: "slot219_bg", name: "플레이테크모음", type: "more" },
  { key: "xt_221", vendor: "Skywind Slot", product: "", cssId: "slot_221", bgClass: "slot221_bg", name: "스카이윈드모음", type: "more" },
  { key: "xt_222", vendor: "Wazdan", product: "", cssId: "slot_222", bgClass: "slot222_bg", name: "와즈단모음", type: "more" },
  { key: "xt_223", vendor: "PG Soft", product: "", cssId: "slot_223", bgClass: "slot223_bg", name: "PG소프트모음", type: "more" },
  { key: "xt_225", vendor: "BigTimeGaming", product: "", cssId: "slot_225", bgClass: "slot225_bg", name: "빅타임게이밍모음", type: "more" },
  { key: "xt_255", vendor: "Hacksaw", product: "", cssId: "slot_255", bgClass: "slot255_bg", name: "핵소게이밍모음", type: "more" },
  { key: "xt_256", vendor: "AvatarUX", product: "", cssId: "slot_256", bgClass: "slot256_bg", name: "아바타UX모음", type: "more" },
  { key: "xt_258", vendor: "Blueprint Gaming", product: "", cssId: "slot_258", bgClass: "slot258_bg", name: "블루프린터모음", type: "more" },
  { key: "xt_271", vendor: "kagaming", product: "", cssId: "slot_ka", bgClass: "slotka_bg", name: "KA게이밍모음", type: "more" },
  { key: "xt_272", vendor: "evoplay", product: "", cssId: "slot_evoplay", bgClass: "slotevoplay_bg", name: "에보플레이모음", type: "more" },
  { key: "xt_273", vendor: "PlayStar", product: "", cssId: "slot_playstar", bgClass: "slotplaystar_bg", name: "플레이스타모음", type: "more" },
  { key: "xt_274", vendor: "Relax Gaming", product: "", cssId: "slot_relax", bgClass: "slotrelax_bg", name: "릴렉스게이밍모음", type: "more" },
  { key: "xt_275", vendor: "GameArt", product: "", cssId: "slot_gameart", bgClass: "slotgameart_bg", name: "게임아트모음", type: "more" },
  { key: "xt_276", vendor: "Thunderkick", product: "", cssId: "slot_thunderkick", bgClass: "slotthunderkick_bg", name: "썬더킥모음", type: "more" },
  { key: "xt_277", vendor: "1X2 Gaming", product: "", cssId: "slot_1x2", bgClass: "slot1x2_bg", name: "1x2게이밍모음", type: "more" },
];
