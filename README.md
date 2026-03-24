<div align="center">
  <img src="https://raw.githubusercontent.com/FajarKim/github-readme-profile/master/logo.svg" alt="GitHub Readme Profile" width="120">
  <h2>GitHub Readme Profile</h2>
  <p>🙀 Generate dynamic GitHub stats cards in SVG format. Fast, customizable, and ready to embed in your profile README.</p>
  <p><a href="https://techforpalestine.org/learn-more"><img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg" width="100%" alt="Support Palestine"/></a></p>
  <p>
    <a href="https://github.com/FajarKim/github-readme-profile/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Report Bug</a> ·
    <a href="https://github.com/FajarKim/github-readme-profile/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Request Feature</a> ·
    <a href="https://github.com/FajarKim/github-readme-profile/discussions/new?category=q-a">Ask Question</a>
  </p>
  <a href="https://github.com/FajarKim/github-readme-profile/releases"><img src="https://custom-icon-badges.demolab.com/github/v/tag/FajarKim/github-readme-profile?label=Version&labelColor=302d41&color=f2cdcd&logoColor=d9e0ee&logo=tag&style=for-the-badge" alt="Version"></a>
  <a href="https://www.codefactor.io/repository/github/fajarkim/github-readme-profile"><img src="https://img.shields.io/codefactor/grade/github/FajarKim/github-readme-profile?label=CodeFactor&labelColor=302d41&color=8bd5ca&logoColor=d9e0ee&logo=codefactor&style=for-the-badge" alt="Code Quality"></a>
  <a href="https://github.com/FajarKim/github-readme-profile/issues"><img src="https://custom-icon-badges.demolab.com/github/issues/FajarKim/github-readme-profile?label=Issues&labelColor=302d41&color=f5a97f&logoColor=d9e0ee&logo=issue&style=for-the-badge" alt="Issues"></a>
  <a href="https://github.com/FajarKim/github-readme-profile/pull"><img src="https://custom-icon-badges.demolab.com/github/issues-pr/FajarKim/github-readme-profile?label=Pull%20requests&labelColor=302d41&color=ddb6f2&logoColor=d9e0ee&logo=git-pull-request&style=for-the-badge" alt="Pull Requests"></a>
  <a href="https://github.com/FajarKim/github-readme-profile/graphs/contributors"><img src="https://custom-icon-badges.demolab.com/github/contributors/FajarKim/github-readme-profile?label=Contributors&labelColor=302d41&color=c9cbff&logoColor=d9e0ee&logo=people&style=for-the-badge" alt="Contributors"></a>
  <a href="https://chat.whatsapp.com/DM6WaaTQ4IJ3VOe2ly6KJD"><img src="https://img.shields.io/badge/Join%20To%20Community-blue?style=for-the-badge&logo=whatsapp&color=302d41&logoColor=a6da95" alt="Join Community"></a>
</div>

<br>

<div align="center">
  <a href="https://vercel.com"><img src="https://raw.githubusercontent.com/FajarKim/FajarKim/master/images/powered-by-vercel.svg" alt="Powered by Vercel"></a>
</div>

## Table of Contents
- [Getting Started](#getting-started)
  - [Basic Usage](#basic-usage)
  - [Themes](#themes)
  - [Customization](#customization)
- [Advanced Usage](#advanced-usage)
  - [Gradient Backgrounds](#gradient-backgrounds)
  - [Transparent Theme & Alpha Channel](#transparent-theme--alpha-channel)
  - [GitHub Theme Context](#github-theme-context)
  - [Hiding Individual Stats](#hiding-individual-stats)
  - [Showing Additional Stats](#showing-additional-stats)
  - [Available Locales](#available-locales)
- [License](#license)
- [Deploy on Vercel](#deploy-on-vercel)
- [Credits](#credits)
- [Donate](#donate)
- [Contributions](#contributions)

## Getting Started

### Basic Usage
To display your GitHub stats in your profile README, simply copy and paste the following Markdown snippet. Replace `FajarKim` with your own GitHub username. The card will automatically fetch your latest public statistics and render them as a clean SVG image.

```markdown
[![GitHub Stats](https://gh-readme-profile.vercel.app/api?username=FajarKim)](https://github.com/FajarKim/github-readme-profile)
```

[![GitHub Stats](https://github-readme-profile-theta.vercel.app/api?username=FajarKim)](https://github.com/FajarKim/github-readme-profile)

### Themes
The appearance of the card can be changed instantly by selecting one of the built-in themes. Themes control the color palette for backgrounds, text, icons, and borders. To apply a theme, add the `&theme=THEME_NAME` parameter to the image URL.

```markdown
![GitHub Stats](https://gh-readme-profile.vercel.app/api?username=FajarKim&theme=dark)
```

<details>
  <summary>Show Example</summary>
  <a href="https://github.com/FajarKim/github-readme-profile"><img src="https://github-readme-profile-theta.vercel.app/api?username=FajarKim&theme=dark" alt="GitHub Stats"></a>
</details>

#### Available Built-in Themes
The project includes several pre-defined themes. You can see a preview of each below. For a complete list, refer to [themes/README.md](./themes/README.md).

|        Themes        |           Preview           |
| :------------------: | :-------------------------: |
|       `default`      |      ![image][default]      |
|     `transparent`    |    ![image][transparent]    |
|        `dark`        |       ![image][dark]        |
|    `highcontrast`    |   ![image][highcontrast]    |

[default]: https://github-readme-profile-theta.vercel.app/api?username=FajarKim&theme=default
[transparent]: https://github-readme-profile-theta.vercel.app/api?username=FajarKim&theme=transparent
[dark]: https://github-readme-profile-theta.vercel.app/api?username=FajarKim&theme=dark
[highcontrast]: https://github-readme-profile-theta.vercel.app/api?username=FajarKim&theme=highcontrast

If you would like to contribute a new theme, please see our [contribution guidelines](./CONTRIBUTING.md#-themes-contribution).

### Customization
Beyond the built-in themes, you have fine-grained control over every visual aspect of the card using URL parameters. Each parameter is optional and can be combined freely.

#### Options
The following table lists all available customization parameters, their descriptions, data types, and default values.

<table>
  <tr>
    <td><p align="center"><b>Name</b></p></td>
    <td><p align="center"><b>Description</b></p></td>
    <td><p align="center"><b>Type</b></p></td>
    <td><p align="center"><b>Default value</b></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>title_color</code></p></td>
    <td><p align="left">Defines the color of the card title.</p></td>
    <td><p align="center"><code>string</code><br>(hex color)</p></td>
    <td><p align="center"><code>2f80ed</code></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>text_color</code></p></td>
    <td><p align="left">Sets the color for all body text inside the card, including stat labels and numbers.</p></td>
    <td><p align="center"><code>string</code><br>(hex color)</p></td>
    <td><p align="center"><code>434d58</code></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>icon_color</code></p></td>
    <td><p align="left">Controls the color of the icons displayed next to each stat.</p></td>
    <td><p align="center"><code>string</code><br>(hex color)</p></td>
    <td><p align="center"><code>4c71f2</code></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>border_color</code></p></td>
    <td><p align="left">Specifies the color of the card border. This parameter is ignored if <code>hide_border</code> is set to <code>true</code>.</p></td>
    <td><p align="center"><code>string</code><br>(hex color)</p></td>
    <td><p align="center"><code>e4e2e2</code></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>bg_color</code></p></td>
    <td><p align="left">Background color of the card. Can be a solid hex color or a gradient defined as <i>angle,start,end</i> (e.g., <code>30,e96443,904e95</code>).</p></td>
    <td><p align="center"><code>string</code><br>(hex color or gradient)</p></td>
    <td><p align="center"><code>fffefe</code></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>stroke_color</code></p></td>
    <td><p align="left">Determines the color of the border around the profile image. Does not apply when <code>hide_stroke</code> is enabled.</p></td>
    <td><p align="center"><code>string</code><br>(hex color)</p></td>
    <td><p align="center"><code>e4e2e2</code> or <code>border_color</code> value</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>username_color</code></p></td>
    <td><p align="left">Color for the username text displayed under the photo profile.</p></td>
    <td><p align="center"><code>string</code><br>(hex color)</p></td>
    <td><p align="center"><code>434d58</code> or <code>text_color</code> value</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>theme</code></p></td>
    <td><p align="left">Name of a pre-defined theme. Overrides individual color parameters if set. Choose from <a href="/themes">all available themes</a>.</p></td>
    <td><p align="center"><code>enum</code></p></td>
    <td><p align="center"><code>default</code></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>title</code></p></td>
    <td><p align="left">Custom title text for the card. Must be URL-encoded (use a tool like <a href="https://www.urlencoder.org/" target="_blank">URL Encoder</a>).</p></td>
    <td><p align="center"><code>string</code></p></td>
    <td><p align="center"><code>null</code></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>locale</code></p></td>
    <td><p align="left">Sets the language of the card text. Full list of available locales can be found <a href="/i18n/README.md">here</a>.</p></td>
    <td><p align="center"><code>enum</code></p></td>
    <td><p align="center"><code>en</code></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>border_width</code></p></td>
    <td><p align="left">Explicitly sets the width of the card border in pixels.</p></td>
    <td><p align="center"><code>number</code></p></td>
    <td><p align="center"><code>1</code></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>border_radius</code></p></td>
    <td><p align="left">Controls the rounding of the card corners, measured in pixels.</p></td>
    <td><p align="center"><code>number</code></p></td>
    <td><p align="center"><code>4.5</code></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>hide</code></p></td>
    <td><p align="left">Comma-separated list of stats to hide. Options: <code>repos</code>, <code>stars</code>, <code>forks</code>, <code>commits</code>, <code>prs</code>, <code>prs_merged</code>, <code>issues</code>, <code>contributed</code>.</p></td>
    <td><p align="center"><code>string</code><br>(comma-separated values)</p></td>
    <td><p align="center"><code>null</code></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>show</code></p></td>
    <td><p align="left">Comma-separated list of additional stats to show. Options: <code>reviews</code>, <code>issues_closed</code>, <code>discussions_started</code>, <code>discussions_answered</code>.</p></td>
    <td><p align="center"><code>string</code><br>(comma-separated values)</p></td>
    <td><p align="center"><code>null</code></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>format</code></p></td>
    <td><p align="left">Output format of the card. Available options: <code>svg</code> (default), <code>png</code>, <code>json</code>, <code>xml</code>.</p></td>
    <td><p align="center"><code>enum</code></p></td>
    <td><p align="center"><code>svg</code></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>disabled_animations</code></p></td>
    <td><p align="left">If set to <code>true</code>, disables all CSS animations.</p></td>
    <td><p align="center"><code>boolean</code></p></td>
    <td><p align="center"><code>false</code></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>hide_border</code></p></td>
    <td><p align="left">Removes the outer border of the card when set to <code>true</code>.</p></td>
    <td><p align="center"><code>boolean</code></p></td>
    <td><p align="center"><code>false</code></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>hide_stroke</code></p></td>
    <td><p align="left">Removes the stroke around the profile image when set to <code>true</code>.</p></td>
    <td><p align="center"><code>boolean</code></p></td>
    <td><p align="center"><code>false</code></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>revert</code></p></td>
    <td><p align="left">Flips the layout: the stats column moves to the left, and the profile image moves to the right.</p></td>
    <td><p align="center"><code>boolean</code></p></td>
    <td><p align="center"><code>false</code></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>photo_quality</code></p></td>
    <td><p align="left">Quality of the profile image, expressed as a percentage (1–100). Lower values reduce file size but may decrease sharpness.</p></td>
    <td><p align="center"><code>number</code><br>(percentage)</p></td>
    <td><p align="center"><code>15</code></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>photo_resize</code></p></td>
    <td><p align="left">Resizes the profile image to the specified width in pixels. Minimum allowed value is 10px.</p></td>
    <td><p align="center"><code>number</code><br>(pixels)</p></td>
    <td><p align="center"><code>150</code></p></td>
  </tr>
</table>

## Advanced Usage

### Gradient Backgrounds
You can create a smooth gradient background by using the `bg_color` parameter with the format `angle,start,end`. The angle is in degrees (0–360), and the colors are given as hex codes without the `#`. For example:

```markdown
![GitHub Stats](https://gh-readme-profile.vercel.app/api?username=FajarKim&bg_color=30,e96443,904e95&title_color=fff&text_color=fff&icon_color=fff)
```

<details>
  <summary>Show Example</summary>
  <a href="https://github.com/FajarKim/github-readme-profile"><img src="https://github-readme-profile-theta.vercel.app/api?username=FajarKim&bg_color=30,e96443,904e95&title_color=fff&text_color=fff&icon_color=fff" alt="GitHub Stats"></a>
</details>

### Transparent Theme & Alpha Channel
The `transparent` theme removes the background entirely, making the card blend with any page background. This is especially useful if you want to embed the card in a GitHub README without a white box.

```markdown
![GitHub Stats](https://gh-readme-profile.vercel.app/api?username=FajarKim&theme=transparent)
```

<details>
  <summary>Show Example</summary>
  <a href="https://github.com/FajarKim/github-readme-profile"><img src="https://github-readme-profile-theta.vercel.app/api?username=FajarKim&theme=transparent" alt="GitHub Stats"></a>
</details>

You can also achieve a transparent background with any theme by setting `bg_color` to a fully transparent hex code (e.g., `bg_color=00000000`). This leaves the theme’s other colors intact.

```markdown
![GitHub Stats](https://gh-readme-profile.vercel.app/api?username=FajarKim&bg_color=00000000)
```

<details>
  <summary>Show Example</summary>
  <a href="https://github.com/FajarKim/github-readme-profile"><img src="https://github-readme-profile-theta.vercel.app/api?username=FajarKim&bg_color=00000000" alt="GitHub Stats"></a>
</details>

### GitHub Theme Context
GitHub allows you to specify different images for light and dark themes using the `#gh-dark-mode-only` and `#gh-light-mode-only` tags. This lets you serve a card that automatically adapts to the viewer’s theme preference.

```markdown
[![GitHub Stats - Dark](https://gh-readme-profile.vercel.app/api?username=FajarKim&theme=dark#gh-dark-mode-only)](https://github.com/FajarKim/github-readme-profile#gh-dark-mode-only)
[![GitHub Stats - Light](https://gh-readme-profile.vercel.app/api?username=FajarKim&theme=default#gh-light-mode-only)](https://github.com/FajarKim/github-readme-profile#gh-light-mode-only)
```

<details>
  <summary>Show Example</summary>
  <a href="https://github.com/FajarKim/github-readme-profile#gh-dark-mode-only"><img src="https://github-readme-profile-theta.vercel.app/api?username=FajarKim&theme=dark#gh-dark-mode-only" alt="GitHub Stats - Dark"></a>
  <a href="https://github.com/FajarKim/github-readme-profile#gh-light-mode-only"><img src="https://github-readme-profile-theta.vercel.app/api?username=FajarKim&theme=default#gh-light-mode-only" alt="GitHub Stats - Light"></a>
</details>

### Hiding Individual Stats
If you want to keep the card compact or focus on specific metrics, you can hide certain stats using the `hide` parameter. The value is a comma-separated list without spaces.

```markdown
![GitHub Stats](https://gh-readme-profile.vercel.app/api?username=FajarKim&hide=repos,forks,prs_merged)
```

<details>
  <summary>Show Example</summary>
  <a href="https://github.com/FajarKim/github-readme-profile"><img src="https://github-readme-profile-beta.vercel.app/api?username=FajarKim&hide=repos,forks,prs_merged" alt="GitHub Stats"></a>
</details>

Available values for `hide`: `repos`, `stars`, `forks`, `commits`, `prs`, `prs_merged`, `issues`, `contributed`.

### Showing Additional Stats
Beyond the default stats, you can enable extra metrics like code reviews, closed issues, or discussions using the `show` parameter.

```markdown
![GitHub Stats](https://gh-readme-profile.vercel.app/api?username=FajarKim&show=reviews,issues_closed,discussions_started,discussions_answered)
```

<details>
  <summary>Show Example</summary>
  <a href="https://github.com/FajarKim/github-readme-profile"><img src="https://github-readme-profile-beta.vercel.app/api?username=FajarKim&show=reviews,issues_closed,discussions_started,discussions_answered" alt="GitHub Stats"></a>
</details>

Available values for `show`: `reviews`, `issues_closed`, `discussions_started`, `discussions_answered`.

### Available Locales
The card can display text in multiple languages. Use the `locale` parameter to change the language. Below are some of the supported locales; for a complete list, see [i18n/README.md](./i18n/README.md).

<table>
  <tr>
    <td><p align="center"><b>Code</b></p></td>
    <td><p align="center"><b>Locale</b></p></td>
  </tr>
  <tr>
    <td><p align="center"><code>en</code></p></td>
    <td><p align="left">English</p></td>
  </tr>
  <tr>
    <td><p align="center"><code>ar</code></p></td>
    <td><p align="left">Arabic (العربية)</p></td>
  </tr>
  <tr>
    <td><p align="center"><code>fr</code></p></td>
    <td><p align="left">French (Français)</p></td>
  </tr>
  <tr>
    <td><p align="center"><code>id</code></p></td>
    <td><p align="left">Indonesian (Bahasa Indonesia)</p></td>
  </tr>
  <tr>
    <td><p align="center"><code>ja</code></p></td>
    <td><p align="left">Japanese (日本語)</p></td>
  </tr>
  <tr>
    <td><p align="center"><code>ko</code></p></td>
    <td><p align="left">Korean (한국어)</p></td>
  </tr>
</table>

If your language is missing, you can contribute a new translation by following the [guidelines](./CONTRIBUTING.md#%EF%B8%8F-translations-contribution).

```markdown
![GitHub Stats](https://gh-readme-profile.vercel.app/api?username=FajarKim&locale=id)
```

<details>
  <summary>Show Example</summary>
  <a href="https://github.com/FajarKim/github-readme-profile"><img src="https://github-readme-profile-theta.vercel.app/api?username=FajarKim&locale=id" alt="GitHub Stats"></a>
</details>

## License
This project is open-source and distributed under the MIT License. You are free to use, modify, and distribute it, subject to the terms of the license. For more details, see the [LICENSE](./LICENSE) file.

## Deploy on Vercel
You can host your own instance of the GitHub Readme Profile API on Vercel. This gives you full control over the endpoint and allows you to customize the behavior or add new features.

1. **Sign up / log in** at [vercel.com](https://vercel.com) using your GitHub account.
2. **Fork** this repository to your GitHub account.
3. **Create a personal access token** from [GitHub Settings](https://github.com/settings/tokens/new). Enable the `repo` and `user` permissions. This token allows the API to fetch your private and public repository data.
4. **Import the project** in Vercel:
   - Click “Add New…” → “Project”.
   - Import your forked repository.
   - Add an environment variable named `GH_TOKEN` with your personal access token as its value.
   - In the **Build & Output Settings**, enable the install command and add `npm install typescript` (this ensures TypeScript dependencies are installed).
5. **Deploy** – Vercel will automatically build and deploy your instance. Once finished, you will get a unique URL (e.g., `https://your-project.vercel.app`) that you can use in place of `gh-readme-profile.vercel.app`.

[![Deploy](https://raw.githubusercontent.com/FajarKim/FajarKim/master/images/deploy-on-vercel.svg)](https://vercel.com/import/project?template=https://github.com/FajarKim/github-readme-profile)

## Credits
This project is a fork of [tuhinpal/readme-stats-github](https://github.com/tuhinpal/readme-stats-github). Many design ideas and additional features were inspired by [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats). We thank the original authors and all contributors who have helped improve this tool.

## Donate
If this project has been helpful to you, please consider supporting humanitarian causes instead of donating to the author. Every contribution, no matter how small, can make a real difference.

<div align="left">
  <a href="https://ko-fi.com/fajarkim/" target="_blank"><img src="https://img.shields.io/badge/Ko%e2%80%91fi-Donate-blue?labelColor=302d41&color=94e2d5&logo=ko-fi&logoColor=d9e0ee&style=for-the-badge" alt="Ko-fi"></a>
  <a href="https://trakteer.id/fajarkim/" target="_blank"><img src="https://custom-icon-badges.demolab.com/badge/Trakteer-Donate-blue?labelColor=302d41&color=ed8796&logo=trakteerid&logoColor=d9e0ee&style=for-the-badge" alt="Trakteer.id Donate"></a>
  <a href="https://paypal.me/fajarrkim/" target="_blank"><img src="https://img.shields.io/badge/PayPal-Donate-blue?labelColor=302d41&color=8aadf4&logo=paypal&logoColor=d9e0ee&style=for-the-badge" alt="PayPal Donate"></a>
  <a href="https://saweria.co/FajarKim/" target="_blank"><img src="https://custom-icon-badges.demolab.com/badge/Saweria-Donate-blue?labelColor=302d41&color=eed49f&logo=saweria&logoColor=d9e0ee&style=for-the-badge" alt="Saweria Donate"></a>
</div>

Alternatively, you can star this repository and share it with others. That helps the project gain visibility and motivates further development.

## Contributions
Contributions of all kinds are welcome! Whether you want to fix a bug, add a new theme, improve translations, or suggest a feature, please read our [contribution guidelines](./CONTRIBUTING.md) to get started.

<a href="https://github.com/FajarKim/github-readme-profile/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=FajarKim/github-readme-profile" alt="Contributors">
</a>

[![StandWithPalestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)

<div align="center">
  <img src="https://raw.githubusercontent.com/FajarKim/FajarKim/master/images/line.svg?sanitize=true">
</div>

<p align="center">Made with ❤️ and TypeScript</p>
<p align="center">Copyright © 2023–present Rangga Fajar Oktariansyah</p>

<div align="center">
  <a href="LICENSE"><img src="https://custom-icon-badges.demolab.com/github/license/FajarKim/github-readme-profile?label=License&labelColor=302d41&color=91d7e3&logo=law&logoColor=d9e0ee&style=for-the-badge" alt="License"></a>
</div>
