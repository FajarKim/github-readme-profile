import type { GetData } from "./getData";
import type { UiConfig } from "../api/index";
import { locales, Locales } from "./translations";
import icons from "./icons";
import { parseBoolean } from "./common/utils";

/**
 * Generates the SVG markup for the GitHub stats card.
 *
 * @param {GetData} data - GitHub user data stats.
 * @param {UiConfig} uiConfig - Configuration for the UI card options.
 * @returns {string} - SVG markup for the GitHub stats card.
 */
function card(data: GetData, uiConfig: UiConfig): string {
  const fallbackLocale = "en";
  const defaultLocale: Locales[keyof Locales] = locales[fallbackLocale];
  const selectLocale: Locales[keyof Locales] = locales[uiConfig.Locale] || defaultLocale;

  const isRtlDirection = parseBoolean(selectLocale.rtlDirection);
  const isDisabledAnimations = parseBoolean(uiConfig.disabledAnimations || uiConfig.Format === "png");

  const direction = isRtlDirection ? "rtl" : "ltr";
  const angle = {
    titleXAngle: isDisabledAnimations ? (isRtlDirection ? 520 : 15) : (isRtlDirection ? 510 : 5),
    titleYAngle: isDisabledAnimations ? 0 : -10,
    textXAngle: isRtlDirection ? 215 : 20,
    dataXAngle: isRtlDirection ? 15 : 220,
    iconXAngle: isRtlDirection ? 225 : -5,
    imageXAngle: isDisabledAnimations ? 120 : 125,
    imageYAngle: isDisabledAnimations ? 70 : 65,
    userXAngle: isDisabledAnimations ? 119.9 : 109.9,
    userYAngle: isDisabledAnimations ? 140 : 130,
    follXAngle: isDisabledAnimations ? 120 : 110,
    follYAngle: isDisabledAnimations ? 161 : 151,
  };

  const hideStroke = parseBoolean(uiConfig.hideStroke) ? `` : `stroke="#${uiConfig.strokeColor}" stroke-width="5"`;
  const hideBorder = parseBoolean(uiConfig.hideBorder) ? `` : `stroke="#${uiConfig.borderColor}" stroke-opacity="1" stroke-width="${uiConfig.borderWidth}"`;

  const animations = parseBoolean(uiConfig.disabledAnimations || uiConfig.Format === "png") ? `` : `
    /* Animations */
    @keyframes scaleInAnimation {
      from {
        transform: translate(-5px, 5px) scale(0);
      }
      to {
        transform: translate(-5px, 5px) scale(1);
      }
    }
    @keyframes fadeInAnimation {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes fadeLeftInAnimation {
      from {
        opacity: 0;
        transform: translate(-90px, 10px);
      }
      to {
        opacity: 1;
        transform: translate(10px, 10px);
      }
    }

    .div-animation {
      animation: fadeLeftInAnimation 0.7s ease-in-out forwards;
    }

    .image-profile-animation {
      animation: scaleInAnimation 1.2s ease-in-out forwards;
      transform-origin: ${angle.imageXAngle}px ${angle.imageYAngle}px;
    }

    .single-item-animation {
      opacity: 0;
      animation: fadeInAnimation 0.3s ease-in-out forwards;
    }`;

  const hiddenItems = uiConfig.hiddenItems || "";
  const hiddenItemsArray = hiddenItems.split(",");
  const showItems = uiConfig.showItems || "";
  const showItemsArray = showItems.split(",");

  const cardItems = [
    { text: selectLocale.totalReposText || defaultLocale.totalReposText, value: data.public_repos, icon: icons.repository, hidden: hiddenItemsArray.includes("repos") },
    { text: selectLocale.starsCountText || defaultLocale.starsCountText, value: data.total_stars, icon: icons.star, hidden: hiddenItemsArray.includes("stars") },
    { text: selectLocale.forksCountText || defaultLocale.forksCountText, value: data.total_forks, icon: icons.fork, hidden: hiddenItemsArray.includes("forks") },
    { text: selectLocale.commitsCountText || defaultLocale.commitsCountText, value: data.total_commits, icon: icons.commit, hidden: hiddenItemsArray.includes("commits") },
    { text: selectLocale.totalPRText || defaultLocale.totalPRText, value: data.total_prs, icon: icons.pull_request, hidden: hiddenItemsArray.includes("prs") },
    { text: selectLocale.totalPRMergedText || defaultLocale.totalPRMergedText, value: data.total_prs_merged, icon: icons.pull_request_merged, hidden: hiddenItemsArray.includes("prs_merged") },
    { text: selectLocale.totalPRReviewedText || defaultLocale.totalPRReviewedText, value: data.total_review, icon: icons.review, hidden: !showItemsArray.includes("reviews") },
    { text: selectLocale.totalIssuesText || defaultLocale.totalIssuesText, value: data.total_issues, icon: icons.issue, hidden: hiddenItemsArray.includes("issues") },
    { text: selectLocale.totalIssuesClosedText || defaultLocale.totalIssuesClosedText, value: data.total_closed_issues, icon: icons.issue_closed, hidden: !showItemsArray.includes("issues_closed") },
    { text: selectLocale.totalDiscussionStartedText || defaultLocale.totalDiscussionStartedText, value: data.total_discussion_started, icon: icons.discussion_started, hidden: !showItemsArray.includes("discussions_started") },
    { text: selectLocale.totalDiscussionAnsweredText || defaultLocale.totalDiscussionAnsweredText, value: data.total_discussion_answered, icon: icons.discussion_answered, hidden: !showItemsArray.includes("discussions_answered") },
    { text: selectLocale.contributedToText || defaultLocale.contributedToText, value: data.total_contributed_to, icon: icons.contributed_to, hidden: hiddenItemsArray.includes("contributed") },
  ];

  const cardItemsToShow = cardItems.filter(item => !item.hidden);

  const cardItemsSVG = cardItemsToShow.map((item, index) => `
    <g transform="translate(230, ${15 + index * 25})">
      <g class="single-item-animation" style="animation-delay: ${210 + index * 100}ms" transform="translate(25, 0)">
        <svg x="${angle.iconXAngle}" y="0" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
          ${item.icon}
        </svg>
        <text class="text" x="${angle.textXAngle}" y="12.5">${item.text}:</text>
        <text class="text text-bold" x="${angle.dataXAngle}" y="12.5">${item.value}</text>
      </g>
    </g>`).join("\n");

  function generateGradient(colors: string[]): string {
    const gradientId = "gradient";
    const gradientAngle = colors[0];
    const getColors = colors.slice(1);
    const gradientStops = getColors.map((color, index) => {
      const offset = (index * 100) / (getColors.length - 1);
      return `<stop offset="${offset}%" stop-color="#${color}"/>`;
    }).join("");
    return `
  <defs>
    <linearGradient id="${gradientId}" gradientTransform="rotate(${gradientAngle})" gradientUnits="userSpaceOnUse">
      ${gradientStops}
    </linearGradient>
  </defs>
  <rect x="0.5" y="0.5" rx="${uiConfig.borderRadius}" height="99.4%" width="99.8%" fill="url(#${gradientId})" ${hideBorder}/>`;
  }

  let backgroundSVG;
  if (uiConfig.bgColor) {
    if (Array.isArray(uiConfig.bgColor)) {
      backgroundSVG = generateGradient(uiConfig.bgColor);
    } else if (typeof uiConfig.bgColor === 'string') {
      const gradientHexArray = uiConfig.bgColor.split(',');
      if (gradientHexArray.length >= 2) {
        const gradientColors = gradientHexArray.map(color => color.trim());
        backgroundSVG = generateGradient(gradientColors);
      } else {
        backgroundSVG = `
  <rect x="0.5" y="0.5" rx="${uiConfig.borderRadius}" height="99.4%" width="99.8%" fill="#${uiConfig.bgColor}" ${hideBorder}/>`;
      }
    }
  }

  return `
<svg width="535" height="${Math.max(220, 45 + cardItemsToShow.length * 25)}"  direction="${direction}" viewBox="0 0 535 ${Math.max(220, 45 + cardItemsToShow.length * 25)}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <style>
${animations}
    .text {
      font-family: "Segoe UI", Ubuntu, sans-serif;
      fill: #${uiConfig.textColor};
      font-size: 14px;
    }

    .text-bold {
      font-weight: 700;
    }

    .text-middle {
      alignment-baseline: middle;
      text-anchor: middle;
    }

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
  <title id="titleId">${selectLocale.titleCard.split("{name}").join(data.name) || defaultLocale.titleCard.split("{name}").join(data.name)}</title>
${backgroundSVG}
  <g transform="translate(0, 25)">
    <g class="div-animation">
      <text x="${angle.titleXAngle}" y="${angle.titleYAngle}" class="text-title">${selectLocale.titleCard.split("{name}").join(data.name) || defaultLocale.titleCard.split("{name}").join(data.name)}</text>
    </g>
    <g class="image-profile-animation">
      <defs>
        <pattern id="image" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 512 512">
          <image x="0%" y="0%" width="512" height="512" href="data:image/jpeg;base64,${data.pic}"></image>
        </pattern>
      </defs>
      <circle cx="${angle.imageXAngle}" cy="${angle.imageYAngle}" r="50" fill="url(#image)" ${hideStroke}/>
    </g>
    <text x="${angle.userXAngle}" y="${angle.userYAngle}" direction="ltr" class="text-username div-animation">@${data.username}</text>
    <g class="div-animation text-middle">
      <text x="${angle.follXAngle}" y="${angle.follYAngle}" class="text-followers"><tspan class="text-bold">${data.followers}</tspan> ${selectLocale.followersText || defaultLocale.followersText} · <tspan class="text-bold">${data.following}</tspan> ${selectLocale.followingText || defaultLocale.followingText}</text>
    </g>
${cardItemsSVG}
  </g>
</svg>`;
}

export default card;
