import type { GetData } from "./getData";
import type { UiConfig } from "../api/index";
import { locales, Locales } from "./translations";
import { icons } from "./icons";
import { parseBoolean } from "./common/utils";

export default function cardStyle(data: GetData, uiConfig: UiConfig): string {
  let fallbackLocale = "en";
  const defaultLocale: Locales[keyof Locales] = locales[fallbackLocale];
  const selectLocale: Locales[keyof Locales] = locales[uiConfig.Locale] || defaultLocale;

  const animations = parseBoolean(uiConfig.disabledAnimations || uiConfig.Format === "png") ? `` : `        /* Animations */
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
            animation: scaleInAnimation 0.9s ease-in-out forwards;
        }
        
        .single-item-animation {
            opacity: 0;
            animation: fadeInAnimation 0.3s ease-in-out forwards;
        }`;

  const direction = parseBoolean(selectLocale.rtlDirection) ? "rtl" : "ltr";
  const titleXAngleDirection = parseBoolean(selectLocale.rtlDirection) ? 510 : 5;
  const titleXAngleDirectionDisabled = parseBoolean(selectLocale.rtlDirection) ? 520 : 15;
  const titleXAngle = parseBoolean(uiConfig.disabledAnimations || uiConfig.Format === "png") ? titleXAngleDirectionDisabled : titleXAngleDirection;
  const titleYAngle = parseBoolean(uiConfig.disabledAnimations || uiConfig.Format === "png") ? 0 : -10;
  const textXAngle = parseBoolean(selectLocale.rtlDirection) ? 215 : 25;
  const textYAngle = 12.5;
  const dataXAngle = parseBoolean(selectLocale.rtlDirection) ? 15 : 225;
  const dataYAngle = 12.5;
  const iconXAngle = parseBoolean(selectLocale.rtlDirection) ? 225 : 0;
  const iconYAngle = 0;
  const imageXAngle = parseBoolean(uiConfig.disabledAnimations || uiConfig.Format === "png") ? 120 : 125;
  const imageYAngle = parseBoolean(uiConfig.disabledAnimations || uiConfig.Format === "png") ? 70 : 65;
  const userXAngle = parseBoolean(uiConfig.disabledAnimations || uiConfig.Format === "png") ? 119.9 : 109.9;
  const userYAngle = parseBoolean(uiConfig.disabledAnimations || uiConfig.Format === "png") ? 140 : 130;
  const follXAngle = parseBoolean(uiConfig.disabledAnimations || uiConfig.Format === "png") ? 120 : 110;
  const follYAngle = parseBoolean(uiConfig.disabledAnimations || uiConfig.Format === "png") ? 161 : 151;

  const cardItems = [
    { text: selectLocale.totalReposText || defaultLocale.totalReposText, value: data.public_repos, icon: icons.repository },
    { text: selectLocale.starsCountText || defaultLocale.starsCountText, value: data.total_stars, icon: icons.star },
    { text: selectLocale.forksCountText || defaultLocale.forksCountText, value: data.total_forks, icon: icons.fork },
    { text: selectLocale.commitsCountText || defaultLocale.commitsCountText, value: data.total_commits, icon: icons.commit },
    { text: selectLocale.totalPRText || defaultLocale.totalPRText, value: data.total_prs, icon: icons.pull_request },
    { text: selectLocale.totalPRMergedText || defaultLocale.totalPRMergedText, value: data.total_prs_merged, icon: icons.pull_request_merged },
    { text: selectLocale.totalIssuesText || defaultLocale.totalIssuesText, value: data.total_issues, icon: icons.issue },
    { text: selectLocale.contributedToText || defaultLocale.contributedToText, value: data.total_contributed_to, icon: icons.contributed_to },
  ];

  const cardItemsSVG = cardItems.map((item, index) => `
            <g transform="translate(230, ${index * 25})">
                <g class="single-item-animation" style="animation-delay: ${210 + index * 100}ms" transform="translate(25, 0)">
                    <svg x="${iconXAngle}" y="${iconYAngle}" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        ${item.icon}
                    </svg>
                    <text class="text" x="${textXAngle}" y="${textYAngle}">${item.text}:</text>
                    <text class="text text-bold" x="${dataXAngle}" y="${dataYAngle}">${item.value}</text>
                </g>
            </g>`).join('\n');

  var card = `<svg width="535" height="245"  direction="${direction}" viewBox="0 0 535 245" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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

    <rect x="0.5" y="0.5" rx="${uiConfig.borderRadius}" height="99%" width="534" fill="#${uiConfig.bgColor}" stroke="#${uiConfig.borderColor}" stroke-opacity="1" stroke-width="${uiConfig.borderWidth}"/>
    <g transform="translate(0, 25)">
        <g class="div-animation">
            <text x="${titleXAngle}" y="${titleYAngle}" class="text-title">${selectLocale.titleCard.split("{name}").join(data.name) || defaultLocale.titleCard.split("{name}").join(data.name)}</text>
        </g>
        <g class="image-profile-animation">
            <defs>
                <pattern id="image" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 512 512">
                    <image x="0%" y="0%" width="512" height="512" href="data:image/jpeg;base64,${data.pic}"></image>
                </pattern>
            </defs>
            <circle cx="${imageXAngle}" cy="${imageYAngle}" r="50" fill="url(#image)" stroke="#${uiConfig.strokeColor}" stroke-width="5"/>
        </g>
        <text x="${userXAngle}" y="${userYAngle}" direction="ltr" class="text-username div-animation">@${data.username}</text>
        <g class="div-animation text-middle">
            <text x="${follXAngle}" y="${follYAngle}" class="text-followers"><tspan class="text-bold">${data.followers}</tspan> ${selectLocale.followersText || defaultLocale.followersText} · <tspan class="text-bold">${data.following}</tspan> ${selectLocale.followingText || defaultLocale.followingText}</text>
        </g>

        <svg x="-10" y="12">
            ${cardItemsSVG}
        </svg>
    </g>
</svg>`;

  return card;
}
