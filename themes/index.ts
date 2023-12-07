// Represents the available themes for GitHub stats cards
export type Themes = {
  [key: string]: {
    title_color?: string;
    text_color?: string;
    icon_color?: string;
    border_color?: string;
    bg_color?: string;
    stroke_color?: string;
    username_color?: string;
  };
};

// Object containing various predefined themes for GitHub stats cards
export const themes: Themes = {
  // Solid themes
  default: {
    title_color: "2f80ed",
    text_color: "434d58",
    icon_color: "4c71f2",
    border_color: "e4e2e2",
    bg_color: "ffffff",
  },
  transparent: {
    title_color: "2f80ed",
    text_color: "434d58",
    icon_color: "4c71f2",
    border_color: "e4e2e2",
    bg_color: "ffffff00",
  },
  dark: {
    title_color: "fff",
    text_color: "9f9f9f",
    icon_color: "79ff97",
    bg_color: "151515",
    stroke_color: "594545",
    username_color: "fff",
  },
  highcontrast: {
    title_color: "e7f216",
    text_color: "fff",
    icon_color: "00ffff",
    bg_color: "000",
    stroke_color: "022f2b",
  },
  "catppuccin-latte": {
    title_color: "137980",
    text_color: "4c4f69",
    icon_color: "8839ef",
    bg_color: "eff1f5",
    stroke_color: "dce0e8",
    username_color: "137980",
  },
  "catppuccin-frappe": {
    title_color: "81c8be",
    text_color: "c6d0f5",
    icon_color: "ca9ee6",
    bg_color: "303446",
    stroke_color: "414559",
    username_color: "81c8be",
  },
  "catppuccin-macchiato": {
    title_color: "8bd5ca",
    text_color: "cad3f5",
    icon_color: "c6a0f6",
    bg_color: "24273a",
    stroke_color: "363a4f",
    username_color: "8bd5ca",
  },
  "catppuccin-mocha": {
    title_color: "94e2d5",
    text_color: "cdd6f4",
    icon_color: "cba6f7",
    bg_color: "1e1e2e",
    stroke_color: "313244",
    username_color: "94e2d5",
  },
  vue: {
    title_color: "41b883",
    text_color: "273849",
    icon_color: "41b883",
    bg_color: "fffefe",
  },
  "vue-dark": {
    title_color: "41b883",
    text_color: "fffefe",
    icon_color: "41b883",
    bg_color: "273849",
  },
  github_dark: {
    title_color: "1F6FEA",
    text_color: "F1F6FC",
    icon_color: "3FB950",
    border_color: "3FB950",
    bg_color: "161B22",
  },
  github_dark_highcontrast: {
    title_color: "409EFE",
    text_color: "FFFFFF",
    icon_color: "2EA043",
    border_color: "FFFFFF",
    bg_color: "0A0C10",
    stroke_color: "2EA043",
  },
  github_dark_dimmed: {
    title_color: "316ECB",
    text_color: "CDD9E5",
    icon_color: "57AB5A",
    border_color: "57AB5A",
    bg_color: "21262D",
  },
  github_dark_tritanopia: {
    title_color: "1F6FEA",
    text_color: "F1F6FC",
    icon_color: "1585FD",
    border_color: "484F58",
    bg_color: "161B22",
    stroke_color: "FA4549",
  },
  github_light: {
    title_color: "0969DA",
    text_color: "1F2227",
    icon_color: "34D058",
    border_color: "34D058",
    bg_color: "FFFFFF",
  },
  github_light_highcontrast: {
    title_color: "0249B3",
    text_color: "0E1116",
    icon_color: "055D20",
    border_color: "272B34",
    bg_color: "FFFFFF",
    stroke_color: "055D20",
  },
  github_light_tritanopia: {
    title_color: "0969DA",
    text_color: "24292F",
    icon_color: "0088FF",
    border_color: "D1D5DA",
    bg_color: "FFFFFF",
    stroke_color: "FA4549",
  },
  "whatsapp-light": {
    title_color: "1DAB61",
    text_color: "131A20",
    icon_color: "858A8D",
    bg_color: "FFFFFF",
    border_color: "D8FDD2",
  },
  "whatsapp-dark": {
    title_color: "21C063",
    text_color: "F7F8FA",
    icon_color: "858A8D",
    bg_color: "0B141B",
    border_color: "103629",
  },
  buefy: {
    title_color: "7957D5",
    text_color: "363636",
    icon_color: "FF3860",
    border_color: "A8A8A8",
    bg_color: "FFFFFF",
  },
  "buefy-dark": {
    title_color: "7957D5",
    text_color: "ABABAB",
    icon_color: "FF3860",
    bg_color: "1A1B27",
  },
  "solarized-light": {
    title_color: "268bd2",
    text_color: "859900",
    icon_color: "b58900",
    bg_color: "fdf6e3",
    stroke_color: "eee8d5",
  },
  "solarized-dark": {
    title_color: "268bd2",
    text_color: "859900",
    icon_color: "b58900",
    bg_color: "002b36",
    stroke_color: "073642",
  },
  "vision-friendly-dark": {
    title_color: "ffb000",
    text_color: "ffffff",
    icon_color: "785ef0",
    bg_color: "000000",
    stroke_color: "111919",
  },
  "deuteranopia-friendly-dark": {
    title_color: "f0e442",
    text_color: "009e73",
    icon_color: "56b4e9",
    bg_color: "000000",
    stroke_color: "cc79a7",
    username_color: "e69f00",
  },
  garden: {
    title_color: "D2DD3B",
    text_color: "6FDD6C",
    icon_color: "DDD4A8",
    bg_color: "094A4A",
    border_color: "000000",
    stroke_color: "095A5A",
  },
  shadow_red: {
    title_color: "9A0000",
    text_color: "545454",
    icon_color: "4F0000",
    border_color: "4F0000",
    bg_color: "ffffff00",
  },
  shadow_green: {
    title_color: "007A00",
    text_color: "545454",
    icon_color: "003D00",
    border_color: "003D00",
    bg_color: "ffffff00",
  },
  shadow_blue: {
    title_color: "00779A",
    text_color: "545454",
    icon_color: "004450",
    border_color: "004490",
    bg_color: "ffffff00",
  },
  shadow_orange: {
    title_color: "B45202",
    text_color: "545454",
    icon_color: "733C00",
    border_color: "733C00",
    bg_color: "ffffff00",
  },
  shadow_purple: {
    title_color: "6F42C1",
    text_color: "545454",
    icon_color: "570182",
    border_color: "570182",
    bg_color: "ffffff00",
  },
  shadow_brown: {
    title_color: "755F3E",
    text_color: "545454",
    icon_color: "31312D",
    border_color: "31312D",
    bg_color: "ffffff00",
  },
  gruvbox: {
    title_color: "fabd2f",
    text_color: "8ec07c",
    icon_color: "fe8019",
    bg_color: "282828",
    stroke_color: "3c3836",
    username_color: "ebdbb2",
  },
  gruvbox_light: {
    title_color: "b57614",
    text_color: "427b58",
    icon_color: "af3a03",
    bg_color: "fbf1c7",
    stroke_color: "ebdbb2",
    username_color: "3c3836",
  },
  apprentice: {
    title_color: "ffffff",
    text_color: "bcbcbc",
    icon_color: "ffffaf",
    bg_color: "262626",
    stroke_color: "444444",
    username_color: "ffffaf",
  },
  radical: {
    title_color: "fe428e",
    text_color: "a9fef7",
    icon_color: "f8d847",
    bg_color: "141321",
  },
  tokyonight: {
    title_color: "89ddff",
    text_color: "1abc9c",
    icon_color: "bb9af7",
    bg_color: "1a1b26",
    stroke_color: "545c7e",
    username_color: "9d7cd8",
  },
  "shades-of-purple": {
    title_color: "fad000",
    text_color: "a599e9",
    icon_color: "b362ff",
    border_color: "1e1e3f",
    bg_color: "2d2b55",
  },
  ayu: {
    title_color: "E6B673",
    text_color: "E6E1CF",
    icon_color: "36A3D9",
    border_color: "5C6773",
    bg_color: "0F1419",
  },
  "ayu-light": {
    title_color: "CDA273",
    text_color: "5C6773",
    icon_color: "36A3D9",
    border_color: "ABB0B6",
    bg_color: "FAFAFA",
  },
  "ayu-mirage": {
    title_color: "FFC44C",
    text_color: "D9D7CE",
    icon_color: "5CCFE6",
    border_color: "5C6773",
    bg_color: "212733",
  },
  merko: {
    title_color: "abd200",
    text_color: "68b587",
    icon_color: "b7d364",
    bg_color: "0a0f0b",
    stroke_color: "253829",
  },
  carbonfox: {
    title_color: "33B1FF",
    text_color: "DFDFE0",
    icon_color: "25BE6A",
    border_color: "282828",
    bg_color: "161616",
  },
  dawnfox: {
    title_color: "56949F",
    text_color: "575279",
    icon_color: "618774",
    border_color: "E5E9F0",
    bg_color: "FAF4ED",
  },
  dayfox: {
    title_color: "287980",
    text_color: "352C24",
    icon_color: "396847",
    border_color: "F2E9E1",
    bg_color: "F6F2EE",
  },
  duskfox: {
    title_color: "9CCFD8",
    text_color: "E0DEF4",
    icon_color: "A3BE8C",
    border_color: "393552",
    bg_color: "232136",
  },
  nightfox: {
    title_color: "63CDCF",
    text_color: "DFDFE0",
    icon_color: "81B29A",
    border_color: "393B44",
    bg_color: "192330",
  },
  nordfox: {
    title_color: "88C0D0",
    text_color: "E5E9F0",
    icon_color: "A3BE8C",
    border_color: "3B4252",
    bg_color: "2E3440",
  },
  terafox: {
    title_color: "A1CDD8",
    text_color: "EBEBEB",
    icon_color: "7AA4A1",
    border_color: "2F3239",
    bg_color: "152528",
  },
  humoris: {
    title_color: "191419",
    text_color: "393c3c",
    icon_color: "683c2c",
    border_color: "e8e6e4",
    bg_color: "dfaf77",
    stroke_color: "683c2c",
  },
  iceberg: {
    title_color: "84A0C6",
    text_color: "D2D4DE",
    icon_color: "3987AE",
    border_color: "33374C",
    bg_color: "1E2132",
  },
  laederon: {
    title_color: "4a5d23",
    text_color: "08457e",
    icon_color: "817027",
    border_color: "e8f6f2",
    bg_color: "f8f6f2",
  },
  zenburn: {
    title_color: "efefef",
    text_color: "f0dfaf",
    icon_color: "cc9393",
    bg_color: "484848",
    stroke_color: "41363c",
  },
  bluloco: {
    title_color: "275fe4",
    text_color: "df621b",
    icon_color: "239749",
    border_color: "ECEDEE",
    bg_color: "F9F9F9",
  },
  "bluloco-dark": {
    title_color: "3375fe",
    text_color: "ff9369",
    icon_color: "25a45c",
    border_color: "21242D",
    bg_color: "282C34",
  },
  aura: {
    title_color: "a277ff",
    text_color: "61ffca",
    icon_color: "ffca85",
    bg_color: "15141b",
    stroke_color: "6d6d6d",
    username_color: "ff6767",
  },
  "lava-light": {
    title_color: "d81613",
    text_color: "786a1c",
    icon_color: "d81613",
    border_color: "933547",
    bg_color: "fffff0",
  },
  "lava-dark": {
    title_color: "ee403e",
    text_color: "fed078",
    icon_color: "ee403e",
    border_color: "933547",
    bg_color: "090b0c",
  },
  neon: {
    title_color: "00EAD3",
    text_color: "FF449F",
    icon_color: "00EAD3",
    border_color: "FFFFFF",
    bg_color: "000000",
    stroke_color: "444444",
  },
  "neon-palenight": {
    title_color: "F9DD3C",
    text_color: "5CADC0",
    icon_color: "E41D44",
    border_color: "A8A8A8",
    bg_color: "212237",
    stroke_color: "3B3D62",
  },
  "neon-blurange": {
    title_color: "25FB88",
    text_color: "C7CCFF",
    icon_color: "FB750B",
    border_color: "C7CCFF",
    bg_color: "030D6B",
    stroke_color: "2130BB",
  },

  // Gradient themes
  "sunset-gradient": {
    title_color: "FFFFFF",
    text_color: "FFFFFF",
    icon_color: "FFFFFF",
    border_color: "850000",
    bg_color: "45,8A2386,E94056,F27120",
  },
  "ocean-gradient": {
    title_color: "FFFFFF",
    text_color: "FFFFFF",
    icon_color: "FFFFFF",
    border_color: "000155",
    bg_color: "90,0093EA,80D0C8,80D0C8",
  },
  "ambient-gradient": {
    title_color: "FFFFFF",
    text_color: "FFFFFF",
    icon_color: "FFFFFF",
    border_color: "AE58A1",
    bg_color: "35,4158D0,C850C0,FFCC70",
  },
  "siny-gradient": {
    title_color: "FFFFFF",
    text_color: "FFFFFF",
    icon_color: "FFFFFF",
    bg_color: "30,E96443,904E95",
  },
  "purple-gradient": {
    title_color: "EC7F8F",
    text_color: "5CDD8F",
    icon_color: "EFFA4B",
    bg_color: "50,4A1133,0B1133",
  },
}
