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

export const themes: Themes = {
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
    icon_color: "79ff97",
    text_color: "9f9f9f",
    stroke_color: "594545",
    bg_color: "151515",
    username_color: "fff",
  },
  highcontrast: {
    title_color: "e7f216",
    icon_color: "00ffff",
    text_color: "fff",
    stroke_color: "191919",
    bg_color: "000",
  },
  "catppuccin-latte": {
    title_color: "137980",
    text_color: "4c4f69",
    icon_color: "8839ef",
    bg_color: "eff1f5",
    stroke_color: "dadce0",
    username_color: "137980",
  },
  "catppuccin-frappe": {
    title_color: "81c8be",
    text_color: "c6d0f5",
    icon_color: "ca9ee6",
    bg_color: "303446",
    stroke_color: "434962",
    username_color: "81c8be",
  },
  "catppuccin-macchiato": {
    title_color: "8bd5ca",
    text_color: "cad3f5",
    icon_color: "c6a0f6",
    bg_color: "24273a",
    stroke_color: "343854",
    username_color: "8bd5ca",
  },
  "catppuccin-mocha": {
    title_color: "94e2d5",
    text_color: "cdd6f4",
    icon_color: "cba6f7",
    bg_color: "1e1e2e",
    stroke_color: "2a2a40",
    username_color: "94e2d5",
  },
  vue: {
    title_color: "41b883",
    icon_color: "41b883",
    text_color: "273849",
    bg_color: "fffefe",
  },
  "vue-dark": {
    title_color: "41b883",
    icon_color: "41b883",
    text_color: "fffefe",
    bg_color: "273849",
  },
  github_dark: {
    title_color: "58A6FF",
    icon_color: "1F6FEB",
    text_color: "C3D1D9",
    bg_color: "0D1117",
    border_color: "39D353",
  },
  github_dark_dimmed: {
    title_color: "539BF5",
    icon_color: "539BF5",
    text_color: "ADBAC7",
    bg_color: "24292F",
    border_color: "373E47",
  },
  github_light: {
    title_color: "1F6FEB",
    icon_color: "39D353",
    text_color: "24292F",
    bg_color: "FFFFFF",
    border_color: "39D353",
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
    icon_color: "b58900",
    text_color: "859900",
    bg_color: "fdf6e3",
    stroke_color: "fdf0ce",
  },
  "solarized-dark": {
    title_color: "268bd2",
    icon_color: "b58900",
    text_color: "859900",
    bg_color: "002b36",
    stroke_color: "004557",
  },
  "vision-friendly-dark": {
    title_color: "ffb000",
    icon_color: "785ef0",
    text_color: "ffffff",
    bg_color: "000000",
    stroke_color: "111919",
  },
  "deuteranopia-friendly-dark": {
    title_color: "f0e442",
    icon_color: "56b4e9",
    text_color: "009e73",
    bg_color: "000000",
    stroke_color: "cc79a7",
    username_color: "e69f00",
  },
  garden: {
    title_color: "D2DD3B",
    icon_color: "DDD4A8",
    text_color: "6FDD6C",
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
}
