import type { GetData } from "./getData";
import type { UiConfig } from "../api/index";
import { locales, Locales } from "./translations";
import { parseBoolean } from "./common/utils";

type CardsUi = {
  direction?: string;
  titleXAngle?: number | string;
  titleYAngle?: number | string;
  textXAngle?: number | string;
  textYAngle?: number | string;
  dataXAngle?: number | string;
  dataYAngle?: number | string;
  iconXAngle?: number | string;
  iconYAngle?: number | string;
  imageXAngle?: number | string;
  imageYAngle?: number | string;
  userXAngle?: number | string;
  userYAngle?: number | string;
  follXAngle?: number | string;
  follYAngle?: number | string;
};

export default function cardStyle(data: GetData, uiConfig: UiConfig): string {
  let fallbackLocale = "en";
  const defaultLocale: Locales[keyof Locales] = locales[fallbackLocale];
  const selectLocale: Locales[keyof Locales] = locales[uiConfig.Locale] || defaultLocale;

  var animations = `        /* Animations */
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

  var cardsUi: CardsUi = {
    direction: "ltr",
    titleXAngle: 5,
    titleYAngle: -10,
    textXAngle: 25,
    textYAngle: 12.5,
    dataXAngle: 225,
    dataYAngle: 12.5,
    iconXAngle: 0,
    iconYAngle: 0,
    imageXAngle: 125,
    imageYAngle: 65,
    userXAngle: 109.9,
    userYAngle: 130,
    follXAngle: 110,
    follYAngle: 151,
  };

  if (parseBoolean(selectLocale.rtlDirection)) {
    var cardsUi: CardsUi = {
      direction: "rtl",
      titleXAngle: 510,
      titleYAngle: -10,
      textXAngle: 215,
      textYAngle: 12.5,
      dataXAngle: 15,
      dataYAngle: 12.5,
      iconXAngle: 225,
      iconYAngle: 0,
      imageXAngle: 125,
      imageYAngle: 65,
      userXAngle: 109.9,
      userYAngle: 130,
      follXAngle: 110,
      follYAngle: 151,
    };
  };
  
  if (parseBoolean(uiConfig.disabledAnimations)) {
    var animations = "";
    var cardsUi: CardsUi = {
      direction: "ltr",
      titleXAngle: 15,
      titleYAngle: 0,
      textXAngle: 25,
      textYAngle: 12.5,
      dataXAngle: 225,
      dataYAngle: 12.5,
      iconXAngle: 0,
      iconYAngle: 0,
      imageXAngle: 120,
      imageYAngle: 70,
      userXAngle: 119.9,
      userYAngle: 140,
      follXAngle: 120,
      follYAngle: 161,
    };
    
    if (parseBoolean(selectLocale.rtlDirection)) {
      var cardsUi: CardsUi = {
        direction: "rtl",
        titleXAngle: 520,
        titleYAngle: 0,
        textXAngle: 215,
        textYAngle: 12.5,
        dataXAngle: 15,
        dataYAngle: 12.5,
        iconXAngle: 225,
        iconYAngle: 0,
        imageXAngle: 120,
        imageYAngle: 70,
        userXAngle: 119.9,
        userYAngle: 140,
        follXAngle: 120,
        follYAngle: 161,
      };
    };
  };

  var card = `<svg width="535" height="245"  direction="${cardsUi.direction}" viewBox="0 0 535 245" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
            <text x="${cardsUi.titleXAngle}" y="${cardsUi.titleYAngle}" class="text-title">${selectLocale.titleCard.split("{name}").join(data.name) || defaultLocale.titleCard.split("{name}").join(data.name)}</text>
        </g>
        <g class="image-profile-animation">
            <defs>
                <pattern id="image" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 512 512">
                    <image x="0%" y="0%" width="512" height="512" href="data:image/jpeg;base64,${data.pic}"></image>
                </pattern>
            </defs>
            <circle cx="${cardsUi.imageXAngle}" cy="${cardsUi.imageYAngle}" r="50" fill="url(#image)" stroke="#${uiConfig.strokeColor}" stroke-width="5"/>
        </g>
        <text x="${cardsUi.userXAngle}" y="${cardsUi.userYAngle}" direction="ltr" class="text-username div-animation">@${data.username}</text>
        <g class="div-animation text-middle">
            <text x="${cardsUi.follXAngle}" y="${cardsUi.follYAngle}" class="text-followers"><tspan class="text-bold">${data.followers}</tspan> ${selectLocale.followersText || defaultLocale.followersText} · <tspan class="text-bold">${data.following}</tspan> ${selectLocale.followingText || defaultLocale.followingText}</text>
        </g>

        <svg x="-10" y="12">
            <g transform="translate(230, 0)">
                <g class="single-item-animation" style="animation-delay: 210ms" transform="translate(25, 0)">
                    <svg x="${cardsUi.iconXAngle}" y="${cardsUi.iconYAngle}" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"/>
                    </svg>
                    <text class="text" x="${cardsUi.textXAngle}" y="${cardsUi.textYAngle}">${selectLocale.totalReposText || defaultLocale.totalReposText}:</text>
                    <text class="text text-bold" x="${cardsUi.dataXAngle}" y="${cardsUi.dataYAngle}">${data.public_repos}</text>
                </g>
            </g>

            <g transform="translate(230, 25)">
                <g class="single-item-animation" style="animation-delay: 350ms" transform="translate(25, 0)">
                    <svg x="${cardsUi.iconXAngle}" y="${cardsUi.iconYAngle}" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"/>
                    </svg>
                    <text class="text" x="${cardsUi.textXAngle}" y="${cardsUi.textYAngle}">${selectLocale.starsCountText || defaultLocale.starsCountText}:</text>
                    <text class="text text-bold" x="${cardsUi.dataXAngle}" y="${cardsUi.dataYAngle}">${data.total_stars}</text>
                </g>
            </g>

            <g transform="translate(230, 50)">
                <g class="single-item-animation" style="animation-delay: 460ms" transform="translate(25, 0)">
                    <svg x="${cardsUi.iconXAngle}" y="${cardsUi.iconYAngle}" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd" d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>
                    </svg>
                    <text class="text" x="${cardsUi.textXAngle}" y="${cardsUi.textYAngle}">${selectLocale.forksCountText || defaultLocale.forksCountText}:</text>
                    <text class="text text-bold" x="${cardsUi.dataXAngle}" y="${cardsUi.dataYAngle}">${data.total_forks}</text>
                </g>
            </g>

            <g transform="translate(230, 75)">
                <g class="single-item-animation" style="animation-delay: 560ms" transform="translate(25, 0)">
                    <svg x="${cardsUi.iconXAngle}" y="${cardsUi.iconYAngle}" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd" d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"/>
                    </svg>
                    <text class="text" x="${cardsUi.textXAngle}" y="${cardsUi.textYAngle}">${selectLocale.commitsCountText || defaultLocale.commitsCountText}:</text>
                    <text class="text text-bold" x="${cardsUi.dataXAngle}" y="${cardsUi.dataYAngle}">${data.total_commits}</text>
                </g>
            </g>
            
            <g transform="translate(230, 100)">
                <g class="single-item-animation" style="animation-delay: 660ms" transform="translate(25, 0)">
                    <svg x="${cardsUi.iconXAngle}" y="${cardsUi.iconYAngle}" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd" d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"/>
                    </svg>
                    <text class="text" x="${cardsUi.textXAngle}" y="${cardsUi.textYAngle}">${selectLocale.totalPRText || defaultLocale.totalPRText}:</text>
                    <text class="text text-bold" x="${cardsUi.dataXAngle}" y="${cardsUi.dataYAngle}">${data.total_prs}</text>
                </g>
            </g>
            
            <g transform="translate(230, 125)">
                <g class="single-item-animation" style="animation-delay: 760ms" transform="translate(25, 0)">
                    <svg x="${cardsUi.iconXAngle}" y="${cardsUi.iconYAngle}" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd" d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"/>
                    </svg>
                    <text class="text" x="${cardsUi.textXAngle}" y="${cardsUi.textYAngle}">${selectLocale.totalPRMergedText || defaultLocale.totalPRMergedText}:</text>
                    <text class="text text-bold" x="${cardsUi.dataXAngle}" y="${cardsUi.dataYAngle}">${data.total_prs_merged}</text>
                </g>
            </g>

            <g transform="translate(230, 150)">
                <g class="single-item-animation" style="animation-delay: 860ms" transform="translate(25, 0)">
                    <svg x="${cardsUi.iconXAngle}" y="${cardsUi.iconYAngle}" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"/>
                    </svg>
                    <text class="text" x="${cardsUi.textXAngle}" y="${cardsUi.textYAngle}">${selectLocale.totalIssuesText || defaultLocale.totalIssuesText}:</text>
                    <text class="text text-bold" x="${cardsUi.dataXAngle}" y="${cardsUi.dataYAngle}">${data.total_issues}</text>
                </g>
            </g>
            
            <g transform="translate(230, 175)">
                <g class="single-item-animation" style="animation-delay: 960ms" transform="translate(25, 0)">
                    <svg x="${cardsUi.iconXAngle}" y="${cardsUi.iconYAngle}" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd" d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"/>
                    </svg>
                    <text class="text" x="${cardsUi.textXAngle}" y="${cardsUi.textYAngle}">${selectLocale.contributedToText || defaultLocale.contributedToText}:</text>
                    <text class="text text-bold" x="${cardsUi.dataXAngle}" y="${cardsUi.dataYAngle}">${data.total_contributed_to}</text>
                </g>
            </g>
        </svg>
    </g>
</svg>`;

  return card;
}
