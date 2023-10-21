import svg2img from "svg2img";
import { Request, Response } from "express";
import getData from "../src/getData";
import cardStyle from "../src/card";
import { themes, Themes } from "../themes/index";

export type UiConfig = {
  titleColor: string;
  textColor: string;
  iconColor: string;
  borderColor: string;
  strokeColor: string;
  usernameColor: string;
  bgColor: string;
  Locale: string;
  borderWidth: number | string;
  borderRadius: number | string;
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
      borderWidth: req.query.border_width || "1",
      borderRadius: req.query.border_radius || "4.5",
    };

    if (!username) throw new Error("Username is required");

    var fetchStats = await getData(username);
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

    if (req.query.format === "json") {
      res.json(fetchStats);
    } else if (req.query.format === "png") {
      const svgBuffer = Buffer.from(cardStyle(fetchStats, uiConfig)) as any;
      const options = { format: 'png' as any };
      svg2img(svgBuffer as any, options, (error: Error | null, buffer: Buffer | null) => {
        if (error) {
          res.status(500).send(error.message);
        } else {
          res.setHeader('Content-Type', 'image/png');
          if (buffer) {
            res.send(buffer as any);
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
