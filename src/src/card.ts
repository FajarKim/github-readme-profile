import type { GetData } from "./getData";
import type { UiConfig } from "../api/index";
import { locales, Locales } from "./translations";

export default function cardStyle(data: GetData, uiConfig: UiConfig): string {
  let fallbackLocale = "en";
  const defaultLocale: Locales[keyof Locales] = locales[fallbackLocale];
  const selectLocale: Locales[keyof Locales] = locales[uiConfig.Locale] || defaultLocale;

  var direction = "ltr",
      titleXAngle = "5",
      iconXAngle = "0",
      textXAngle = "25",
      dataXAngle = "225";

  if (selectLocale.rtlDirection == "true" || selectLocale.rtlDirection == true || selectLocale.rtlDirection) {
    var direction = "rtl",
        titleXAngle = "510",
        iconXAngle = "225",
        textXAngle = "215",
        dataXAngle = "15";
  };

  var card = `<svg width="535" height="245" direction="${direction}" viewBox="0 0 535 245" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <style>
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
        	animation: scaleInAnimation 0.9s ease-in-out forwards;
        }
        
        .single-item-animation {
            opacity: 0;
            animation: fadeInAnimation 0.3s ease-in-out forwards;
        }

        .text {
            font-family: Arial, Helvetica, sans-serif;
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
    <title id="titleId">${selectLocale.titleCard.split("{name}").join(data.name)}</title>

    <rect x="0.5" y="0.5" rx="4.5" height="99%" width="534" fill="#${uiConfig.bgColor}" stroke="#${uiConfig.borderColor}" stroke-opacity="1" />
    <g transform="translate(0, 25)">
        <g class="div-animation">
        	<text x="${titleXAngle}" y="-10" class="text-title">${selectLocale.titleCard.split("{name}").join(data.name)}</text>
        </g>
        <g class="image-profile-animation">
        	<defs>
               <pattern id="image" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 512 512">
        	         <image x="0%" y="0%" width="512" height="512" href="data:image/jpeg;base64,${data.pic}"></image>
                </pattern>
            </defs>
            <circle cx="125" cy="65" r="50" fill="url(#image)" stroke="#${uiConfig.strokeColor}" stroke-width="5"/>
        </g>
        <text x="109.9" y="130" direction="ltr" class="text-username div-animation">@${data.username}</text>
        <g class="div-animation text-middle">
            <text x="110" y="151" class="text-followers"><tspan class="text-bold">${data.followers}</tspan> ${selectLocale.followersText} · <tspan class="text-bold">${data.following}</tspan> ${selectLocale.followingText}</text>
        </g>

        <svg x="-10" y="12">
            <g transform="translate(230, 0)">
                <g class="single-item-animation" style="animation-delay: 210ms" transform="translate(25, 0)">
                    <svg x="${iconXAngle}" y="0" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
                    </svg>
                    <text class="text" x="${textXAngle}" y="12.5">${selectLocale.totalReposText}:</text>
                    <text class="text text-bold" x="${dataXAngle}" y="12.5">${data.public_repos}</text>
                </g>
            </g>

            <g transform="translate(230, 25)">
                <g class="single-item-animation" style="animation-delay: 350ms" transform="translate(25, 0)">
                    <svg x="${iconXAngle}" y="0" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z" />
                    </svg>
                    <text class="text" x="${textXAngle}" y="12.5">${selectLocale.starsCountText}:</text>
                    <text class="text text-bold" x="${dataXAngle}" y="12.5">${data.total_stars}</text>
                </g>
            </g>

            <g transform="translate(230, 50)">
                <g class="single-item-animation" style="animation-delay: 460ms" transform="translate(25, 0)">
                    <svg x="${iconXAngle}" y="0" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                    </svg>
                    <text class="text" x="${textXAngle}" y="12.5">${selectLocale.forksCountText}:</text>
                    <text class="text text-bold" x="${dataXAngle}" y="12.5">${data.total_forks}</text>
                </g>
            </g>

            <g transform="translate(230, 75)">
                <g class="single-item-animation" style="animation-delay: 560ms" transform="translate(25, 0)">
                    <svg x="${iconXAngle}" y="0" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z" />
                    </svg>
                    <text class="text" x="${textXAngle}" y="12.5">${selectLocale.commitsCountText}:</text>
                    <text class="text text-bold" x="${dataXAngle}" y="12.5">${data.total_commits}</text>
                </g>
            </g>
            
            <g transform="translate(230, 100)">
                <g class="single-item-animation" style="animation-delay: 660ms" transform="translate(25, 0)">
                    <svg x="${iconXAngle}" y="0" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"/>
                    </svg>
                    <text class="text" x="${textXAngle}" y="12.5">${selectLocale.totalPRText}:</text>
                    <text class="text text-bold" x="${dataXAngle}" y="12.5">${data.total_prs}</text>
                </g>
            </g>
            
            <g transform="translate(230, 125)">
                <g class="single-item-animation" style="animation-delay: 760ms" transform="translate(25, 0)">
                    <svg x="${iconXAngle}" y="0" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd" d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z" />
                    </svg>
                    <text class="text" x="${textXAngle}" y="12.5">${selectLocale.totalPRMergedText}:</text>
                    <text class="text text-bold" x="${dataXAngle}" y="12.5">${data.total_prs_merged}</text>
                </g>
            </g>

            <g transform="translate(230, 150)">
                <g class="single-item-animation" style="animation-delay: 760ms" transform="translate(25, 0)">
                    <svg x="${iconXAngle}" y="0" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z" />
                    </svg>
                    <text class="text" x="${textXAngle}" y="12.5">${selectLocale.totalIssuesText}:</text>
                    <text class="text text-bold" x="${dataXAngle}" y="12.5">${data.total_issues}</text>
                </g>
            </g>
            
            <g transform="translate(230, 175)">
                <g class="single-item-animation" style="animation-delay: 760ms" transform="translate(25, 0)">
                    <svg x="${iconXAngle}" y="0" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"/>
                    </svg>
                    <text class="text" x="${textXAngle}" y="12.5">${selectLocale.contributedToText}:</text>
                    <text class="text text-bold" x="${dataXAngle}" y="12.5">${data.total_contributed_to}</text>
                </g>
            </g>
        </svg>
    </g>
</svg>`;

  return card;
}
