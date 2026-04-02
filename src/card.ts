import sharp from "sharp";
import { minify } from "html-minifier-terser";
import parseBoolean from "@barudakrosul/parse-boolean";
import type { GetData } from "./getData";
import type { UiConfig } from "../api/index";
import locales from "../i18n/index";
import icons from "./icons";

/**
 * Processes a profile picture: resizes it, converts it to JPEG, and returns the base64 encoding.
 *
 * @param {Buffer | string} picture - A Buffer or base64 string representing the image.
 * @param {number} quality - JPEG quality (0-100).
 * @param {number} size - Image width.
 * @returns {Promise<string>} - Base64 string of the processed image.
 */
async function processProfilePicture(
  picture: Buffer | string,
  quality: number,
  size: number
): Promise<string> {
  const imageBuffer = typeof picture === "string" ? Buffer.from(picture, "base64") : picture;
  const outputBuffer = await sharp(imageBuffer)
    .resize({ width: size })
    .jpeg({ quality })
    .toBuffer();
  return outputBuffer.toString("base64");
}

/**
 * Generates an SVG linear gradient element based on an array of colors.
 * The first element is the rotation angle (e.g., “45”), and the rest are hex color codes.
 *
 * @param {string[]} colors - An array containing the angles and colors of the gradient.
 * @param {UiConfig} uiConfig - UI configuration for obtaining the borderRadius.
 * @param {string} hideBorder - Border attribute string or empty.
 * @returns {string} - SVG markup for a linear gradient.
 */
function generateGradient(colors: string[], uiConfig: UiConfig, hideBorder: string): string {
  const [angle, ...colorStops] = colors;
  const stops = colorStops.map((color, i) => {
    const offset = (i * 100) / (colorStops.length - 1);
    return `<stop offset="${offset}%" stop-color="#${color}"/>`;
  }).join("");
  return `
    <defs>
      <linearGradient id="gradient" gradientTransform="rotate(${angle})" gradientUnits="userSpaceOnUse">
        ${stops}
      </linearGradient>
    </defs>
    <rect x="0.5" y="0.5" rx="${uiConfig.borderRadius || 20}" height="99.4%" width="99.8%" fill="url(#gradient)" ${hideBorder}/>
  `;
}

/**
 * Creates an SVG background based on the uiConfig.bgColor configuration.
 * Supports solid colors or linear gradients (with angles and colors).
 *
 * @param {UiConfig} uiConfig - UI configuration.
 * @param {string} hideBorder - Border attribute string or empty.
 * @param {number} borderRadius - Border radius.
 * @returns {string} - SVG markup for the background.
 */
function buildBackground(
  uiConfig: UiConfig,
  hideBorder: string,
  borderRadius: number
): string {
  const { bgColor } = uiConfig;
  if (!bgColor) return "";

  if (Array.isArray(bgColor)) {
    return generateGradient(bgColor, uiConfig, hideBorder);
  }

  const gradientParts = bgColor.split(",").map((c: string) => c.trim());
  if (gradientParts.length >= 2) {
    return generateGradient(gradientParts, uiConfig, hideBorder);
  }

  return `
    <rect x="0.5" y="0.5" rx="${borderRadius}" height="99.4%" width="99.8%" fill="#${bgColor}" ${hideBorder}/>
  `;
}

/**
 * Calculates the position of all elements within a card based on direction (RTL/LTR),
 * animation status, and revert mode.
 *
 * @param {boolean|undefined} isRtl - Whether to use right-to-left direction.
 * @param {boolean|undefined} isAnimDisabled - Whether animation is disabled.
 * @param {boolean|undefined} isRevert - Whether the layout is reversed (revert).
 * @returns {Object} An object containing the X/Y coordinates for each element.
 */
function getPositions(
  isRtl: boolean | undefined,
  isAnimDisabled: boolean | undefined,
  isRevert: boolean | undefined
) {
  const configs = {
    animated: {
      title: { x: isRtl ? 510 : 5, y: -10 },
      image: { x: isRevert ? 417 : 127, y: 65 },
      user: { x: isRevert ? 402 : 112, y: 130 },
      foll: { x: isRevert ? 402 : 112, y: 151 },
    },
    static: {
      title: { x: isRtl ? 520 : 15, y: 0 },
      image: { x: isRevert ? 412 : 122, y: 70 },
      user: { x: isRevert ? 412 : 122, y: 140 },
      foll: { x: isRevert ? 412 : 122, y: 161 },
    },
  };

  const mode = isAnimDisabled ? "static" : "animated";
  const config = configs[mode];

  return {
    titleX: config.title.x,
    titleY: config.title.y,
    textX: isRtl ? 225 : 20,
    dataX: isRtl ? 25 : 220,
    iconX: isRtl ? 235 : -5,
    imageX: config.image.x,
    imageY: config.image.y,
    userX: config.user.x,
    userY: config.user.y,
    follX: config.foll.x,
    follY: config.foll.y,
    itemStatsX: isRevert ? (isRtl ? 10 : 0) : 230,
  };
}

/**
 * Creates a CSS animation block if animations are enabled.
 *
 * @param {boolean|undefined} isAnimDisabled - Whether animations are disabled.
 * @param {number} imageX - The X coordinate of the profile image (relative to the transform origin).
 * @param {number} imageY - The Y coordinate of the profile image (relative to the transform origin).
 * @returns {string} - The CSS animation or an empty string.
 */
function getAnimationStyles(
  isAnimDisabled: boolean | undefined,
  imageX: number,
  imageY: number
): string {
  if (isAnimDisabled) return "";
  return `
    @keyframes scaleInAnimation {
      from { transform: translate(-5px, 5px) scale(0); }
      to { transform: translate(-5px, 5px) scale(1); }
    }
    @keyframes fadeInAnimation {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeLeftInAnimation {
      from { opacity: 0; transform: translate(-90px, 10px); }
      to { opacity: 1; transform: translate(10px, 10px); }
    }
    .div-animation {
      animation: fadeLeftInAnimation 0.7s ease-in-out forwards;
    }
    .image-profile-animation {
      animation: scaleInAnimation 1.2s ease-in-out forwards;
      transform-origin: ${imageX}px ${imageY}px;
    }
    .single-item-animation {
      opacity: 0;
      animation: fadeInAnimation 0.3s ease-in-out forwards;
    }
  `;
}

/**
 * Generates SVG markup for a GitHub statistics card.
 *
 * @param {GetData} data - GitHub user statistics data.
 * @param {UiConfig} uiConfig - Card display configuration.
 * @returns {Promise<string>} - SVG markup for the statistics card.
 */
export default async function card(data: GetData, uiConfig: UiConfig): Promise<string> {
  const getLocale = (locale: string): string => {
    return Object.keys(locales).includes(locale) ? locale : "en";
  };
  const createLocalizedLocale = (primaryLocale: string, fallbackLocale: string = "en") => {
    const primary = locales[primaryLocale] || {};
    const fallback = locales[fallbackLocale] || locales.en || {};
    return { ...fallback, ...primary };
  };
  const activeLocale = getLocale(uiConfig.Locale);
  const selectedLocale = createLocalizedLocale(activeLocale);

  const isRtl = parseBoolean(selectedLocale.rtlDirection || false);
  const isAnimDisabled = parseBoolean(uiConfig.disabledAnimations || uiConfig.Format === "png");
  const isRevert = parseBoolean(uiConfig.Revert || false);

  // Card title
  let titleCard = (uiConfig.Title && uiConfig.Title !== "undefined")
    ? uiConfig.Title.split("{name}").join(data.name)
    : (selectedLocale.titleCard).split("{name}").join(data.name);

  // Profile picture process
  const photoQuality = Number(uiConfig.photoQuality || 80);
  const photoResize = Number(uiConfig.photoResize || 512);
  const pictureBase64 = await processProfilePicture(data.picture, photoQuality, photoResize);

  // Element position
  const positions = getPositions(isRtl, isAnimDisabled, isRevert);

  // Stroke and border
  const hideStroke = parseBoolean(uiConfig.hideStroke || false) ? "" : `stroke="#${uiConfig.strokeColor}" stroke-width="5"`;
  const hideBorder = parseBoolean(uiConfig.hideBorder || false) ? "" : `stroke="#${uiConfig.borderColor}" stroke-opacity="1" stroke-width="${uiConfig.borderWidth}"`;
  const borderRadius = Number(uiConfig.borderRadius || 20);

  // Background
  const backgroundSVG = buildBackground(uiConfig, hideBorder, borderRadius);

  // CSS animations
  const animationsCSS = getAnimationStyles(isAnimDisabled, positions.imageX, positions.imageY);

  // Statistical item
  const hiddenSet = new Set((uiConfig.hiddenItems || "").split(",").filter(Boolean));
  const showSet = new Set((uiConfig.showItems || "").split(",").filter(Boolean));

  // List of all items that may be displayed
  const itemsConfig = [
    { key: "repos", labelKey: "totalReposText", valueKey: "public_repos", icon: icons.repository, visible: !hiddenSet.has("repos") },
    { key: "stars", labelKey: "starsCountText", valueKey: "total_stars", icon: icons.star, visible: !hiddenSet.has("stars") },
    { key: "forks", labelKey: "forksCountText", valueKey: "total_forks", icon: icons.fork, visible: !hiddenSet.has("forks") },
    { key: "commits", labelKey: "commitsCountText", valueKey: "total_commits", icon: icons.commit, visible: !hiddenSet.has("commits") },
    { key: "prs", labelKey: "totalPRText", valueKey: "total_prs", icon: icons.pull_request, visible: !hiddenSet.has("prs") },
    { key: "prs_merged", labelKey: "totalPRMergedText", valueKey: "total_prs_merged", icon: icons.pull_request_merged, visible: !hiddenSet.has("prs_merged") },
    { key: "reviews", labelKey: "totalPRReviewedText", valueKey: "total_review", icon: icons.review, visible: showSet.has("reviews") },
    { key: "issues", labelKey: "totalIssuesText", valueKey: "total_issues", icon: icons.issue, visible: !hiddenSet.has("issues") },
    { key: "issues_closed", labelKey: "totalIssuesClosedText", valueKey: "total_closed_issues", icon: icons.issue_closed, visible: showSet.has("issues_closed") },
    { key: "discussions_started", labelKey: "totalDiscussionStartedText", valueKey: "total_discussion_started", icon: icons.discussion_started, visible: showSet.has("discussions_started") },
    { key: "discussions_answered", labelKey: "totalDiscussionAnsweredText", valueKey: "total_discussion_answered", icon: icons.discussion_answered, visible: showSet.has("discussions_answered") },
    { key: "contributed", labelKey: "contributedToText", valueKey: "total_contributed_to", icon: icons.contributed_to, visible: !hiddenSet.has("contributed") },
  ];

  const visibleItems = itemsConfig.filter(item => item.visible);
  const cardItemsSVG = visibleItems.map((item, idx) => {
    const label = (selectedLocale as Record<string, string>)[item.labelKey];
    const value = data[item.valueKey as keyof GetData];
    return `
      <g transform="translate(${positions.itemStatsX}, ${15 + idx * 25})">
        <g class="single-item-animation" style="animation-delay: ${210 + idx * 100}ms" transform="translate(25, 0)">
          <svg x="${positions.iconX}" y="0" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
            ${item.icon}
          </svg>
          <text class="text" x="${positions.textX}" y="12.5">${label}:</text>
          <text class="text text-bold" x="${positions.dataX}" y="12.5">${value}</text>
        </g>
      </g>
    `;
  }).join("\n");

  // Dynamic SVG height based on the number of items
  const svgHeight = Math.max(220, 45 + visibleItems.length * 25);

  const rawSVG = `
    <svg width="535" height="${svgHeight}" direction="${isRtl ? "rtl" : "ltr"}" viewBox="0 0 535 ${svgHeight}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <style>
        ${animationsCSS}
        .text {
          font-family: "Segoe UI", Ubuntu, sans-serif;
          fill: #${uiConfig.textColor};
          font-size: 14px;
        }
        .text-bold { font-weight: 700; }
        .text-middle { alignment-baseline: middle; text-anchor: middle; }
        .text-followers {
          font-family: "Segoe UI", Ubuntu, sans-serif;
          fill: #${uiConfig.textColor};
          font-size: 13px;
        }
        .text-username {
          font-family: "Segoe UI", Ubuntu, sans-serif;
          fill: #${uiConfig.usernameColor};
          font-weight: 750;
          font-size: 14.6px;
          alignment-baseline: middle;
          text-anchor: middle;
        }
        .text-title {
          font-family: "Segoe UI", Ubuntu, sans-serif;
          fill: #${uiConfig.titleColor};
          font-size: 17px;
          font-weight: 600;
        }
        .icon {
          fill: #${uiConfig.iconColor};
          display: block;
        }
      </style>
      <title id="titleId">${titleCard}</title>
      ${backgroundSVG}
      <g transform="translate(0, 25)">
        <g class="div-animation">
          <text x="${positions.titleX}" y="${positions.titleY}" class="text-title">${titleCard}</text>
        </g>
        <g class="image-profile-animation">
          <defs>
            <pattern id="image" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 512 512">
              <image x="0%" y="0%" width="512" height="512" href="data:image/jpeg;base64,${pictureBase64}" />
            </pattern>
          </defs>
          <circle cx="${positions.imageX}" cy="${positions.imageY}" r="50" fill="url(#image)" ${hideStroke} />
        </g>
        <text x="${positions.userX}" y="${positions.userY}" direction="ltr" class="text-username div-animation">@${data.username}</text>
        <g class="div-animation text-middle">
          <text x="${positions.follX}" y="${positions.follY}" class="text-followers">
            <tspan class="text-bold">${data.followers}</tspan> ${selectedLocale.followersText} · 
            <tspan class="text-bold">${data.following}</tspan> ${selectedLocale.followingText}
          </text>
        </g>
        ${cardItemsSVG}
      </g>
    </svg>
  `;

  // Minify SVG
  const minifiedSVG = await minify(rawSVG, {
    collapseWhitespace: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeOptionalTags: false,
    removeAttributeQuotes: false,
    minifyCSS: true,
    minifyJS: false,
  });

  return minifiedSVG;
}
