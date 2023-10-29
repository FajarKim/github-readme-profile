import svg2img from "svg2img";
import { Request, Response } from "express";
import getData from "../src/getData";
import cardStyle from "../src/card";
import { themes, Themes } from "../themes/index";
import { isValidHexColor, isValidGradient, parseBoolean } from "../src/common/utils";

export type UiConfig = {
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
};

export default async function readmeStats(req: any, res: any): Promise<any> {
  try {
    let username = req.query.username;

    let fallbackTheme = "default";
    const defaultTheme: Themes[keyof Themes] = themes[fallbackTheme];
    const selectTheme: Themes[keyof Themes] = themes[req.query.theme] || defaultTheme;

    let uiConfig: UiConfig = {
      titleColor: req.query.title_color || selectTheme.title_color || defaultTheme.title_color,
      textColor: req.query.text_color || selectTheme.text_color || defaultTheme.text_color,
      iconColor: req.query.icon_color || selectTheme.icon_color || defaultTheme.icon_color,
      borderColor: req.query.border_color || selectTheme.border_color || defaultTheme.border_color,
      strokeColor: req.query.stroke_color || req.query.border_color || selectTheme.stroke_color || selectTheme.border_color || defaultTheme.border_color,
      usernameColor: req.query.username_color || req.query.text_color || selectTheme.username_color || selectTheme.text_color || defaultTheme.text_color,
      bgColor: req.query.bg_color || selectTheme.bg_color || defaultTheme.bg_color,
      Locale: req.query.locale || "en",
      borderWidth: req.query.border_width || 1,
      borderRadius: req.query.border_radius || 4.5,
      disabledAnimations: parseBoolean(req.query.disabled_animations) || false,
      Format: req.query.format || "svg",
      hiddenItems: req.query.hide,
      showItems: req.query.show,
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
    };
    
    if (!isValidGradient(uiConfig.bgColor)) {
      if (!isValidHexColor(uiConfig.bgColor)) {
        throw new Error("Enter a valid hex color code");
      };
    };

    var fetchStats = await getData(username);
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

    if (uiConfig.Format === "json") {
      res.json(fetchStats);
    } else if (uiConfig.Format === "png") {
      const svgBuffer = Buffer.from(cardStyle(fetchStats, uiConfig));
      const options = {
        resvg: {
          font: { defaultFontFamily: '"Segoe UI"', serifFamily: 'Ubuntu', sansSerifFamily: 'sans-serif' },
          background: 'rgba(0, 0, 0, .0)',
        },
        format: 'png' as any,
      };
      svg2img(svgBuffer as any, options, (error: Error | null, buffer: Buffer | null) => {
        if (error) {
          res.status(500).send(error.message);
        } else {
          res.setHeader("Content-Type", "image/png");
          if (buffer) {
            res.send(buffer);
          }
        }
      });
    } else {
      res.setHeader("Content-Type", "image/svg+xml");
      let svg = cardStyle(fetchStats, uiConfig);
      res.send(svg);
    }
  } catch (error: any) {
    res.setHeader("Cache-Control", "s-maxage=7200, stale-while-revalidate");
    res.status(500).send(error.message);
  }
}
