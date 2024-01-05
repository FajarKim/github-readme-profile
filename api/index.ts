import escapeHTML from "escape-html";
import { Resvg } from "@resvg/resvg-js";
import getData from "../src/getData";
import card from "../src/card";
import { themes, Themes } from "../themes/index";
import { isValidHexColor, isValidGradient, parseBoolean } from "../src/common/utils";

/**
 * Configuration type for the user interface.
 *
 * @typedef {Object} UiConfig
 * @property {string} titleColor - Color for the title text.
 * @property {string} textColor - Color for the main text.
 * @property {string} iconColor - Color for icons.
 * @property {string} borderColor - Color for borders.
 * @property {string} strokeColor - Color for strokes.
 * @property {string} usernameColor - Color for the username.
 * @property {any} bgColor - Background color or gradient.
 * @property {string} Locale - Locale setting.
 * @property {number|string} borderWidth - Width of borders.
 * @property {number|string} borderRadius - Radius of borders.
 * @property {boolean|string} disabledAnimations - Toggle for disabling animations.
 * @property {string} Format - Output format (e.g., "svg" or "png").
 * @property {string|undefined} hiddenItems - Items to hide.
 * @property {string|undefined} showItems - Items to show.
 * @property {boolean|string} hideStroke - Toggle for hiding strokes.
 * @property {boolean|string} hideBorder - Toggle for hiding borders.
 */
type UiConfig = {
  titleColor: string;
  textColor: string;
  iconColor: string;
  borderColor: string;
  strokeColor: string;
  usernameColor: string;
  bgColor: any;
  Locale: string;
  borderWidth: number | string;
  borderRadius: number | string;
  disabledAnimations: boolean | string;
  Format: string;
  hiddenItems: string | undefined;
  showItems: string | undefined;
  hideStroke: boolean | string;
  hideBorder: boolean | string;
};

/**
 * Handles the generation card of a GitHub stats based on user data and specified options.
 *
 * @param {any} req - The request object from the client.
 * @param {any} res - The response object to send data back to the client.
 * @returns {Promise<any>} - A promise that resolves when the photo profile is generated and sent.
 */
async function readmeStats(req: any, res: any): Promise<any> {
  try {
    const username = escapeHTML(req.query.username);

    const fallbackTheme = "default";
    const defaultTheme: Themes[keyof Themes] = themes[fallbackTheme];
    const selectTheme: Themes[keyof Themes] = themes[req.query.theme] || defaultTheme;

    const uiConfig: UiConfig = {
      titleColor: escapeHTML(req.query.title_color || selectTheme.title_color || defaultTheme.title_color),
      textColor: escapeHTML(req.query.text_color || selectTheme.text_color || defaultTheme.text_color),
      iconColor: escapeHTML(req.query.icon_color || selectTheme.icon_color || defaultTheme.icon_color),
      borderColor: escapeHTML(req.query.border_color || selectTheme.border_color || defaultTheme.border_color),
      strokeColor: escapeHTML(req.query.stroke_color || req.query.border_color || selectTheme.stroke_color || selectTheme.border_color || defaultTheme.border_color),
      usernameColor: escapeHTML(req.query.username_color || req.query.text_color || selectTheme.username_color || selectTheme.text_color || defaultTheme.text_color),
      bgColor: escapeHTML(req.query.bg_color || selectTheme.bg_color || defaultTheme.bg_color),
      Locale: escapeHTML(req.query.locale || "en"),
      borderWidth: escapeHTML(req.query.border_width || 1),
      borderRadius: escapeHTML(req.query.border_radius || 4.5),
      disabledAnimations: parseBoolean(escapeHTML(req.query.disabled_animations)) || false,
      Format: escapeHTML(req.query.format || "svg"),
      hiddenItems: escapeHTML(req.query.hide),
      showItems: escapeHTML(req.query.show),
      hideStroke: parseBoolean(escapeHTML(req.query.hide_stroke)) || false,
      hideBorder: parseBoolean(escapeHTML(req.query.hide_border)) || false,
    };

    if (!username) {
      throw new Error("Username is required");
    }

    if (
      !isValidHexColor(uiConfig.titleColor) ||
      !isValidHexColor(uiConfig.textColor) ||
      !isValidHexColor(uiConfig.iconColor) ||
      !isValidHexColor(uiConfig.borderColor) ||
      !isValidHexColor(uiConfig.usernameColor) ||
      !isValidHexColor(uiConfig.strokeColor)
    ) {
      throw new Error("Enter a valid hex color code");
    }

    if (!isValidGradient(uiConfig.bgColor)) {
      if (!isValidHexColor(uiConfig.bgColor)) {
        throw new Error("Enter a valid hex color code");
      }
    }

    const fetchStats = await getData(username);
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

    if (uiConfig.Format === "json") {
      res.json(fetchStats);
    } else if (uiConfig.Format === "png") {
      const svgString = card(fetchStats, uiConfig);
      const resvg = new Resvg(svgString, { font: { defaultFontFamily: "Segoe UI" }});
      const pngBuffer = await resvg.render().asPng();

      res.setHeader("Content-Type", "image/png");
      res.send(pngBuffer);
    } else {
      res.setHeader("Content-Type", "image/svg+xml");
      const svg = card(fetchStats, uiConfig);
      res.send(svg);
    }
  } catch (error: any) {
    res.setHeader("Cache-Control", "s-maxage=7200, stale-while-revalidate");
    res.status(500).send(escapeHTML(error.message));
  }
}

export { UiConfig, readmeStats };
export default readmeStats;
