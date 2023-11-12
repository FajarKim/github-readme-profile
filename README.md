<div align="center">
  <img src="https://raw.githubusercontent.com/FajarKim/github-readme-profile/master/logo.svg" alt="GitHub Readme Profile" width="120"/>
  <h2>GitHub Readme Profile</h2>
  <p>🙀 Generate your Stats GitHub Profile in SVG</p>
  <p><a href="https://github.com/FajarKim/github-readme-profile/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Report Bugs</a> · <a href="https://github.com/FajarKim/github-readme-profile/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Request Feature</a> · <a href="https://github.com/FajarKim/github-readme-profile/discussions/new?category=q-a">Ask Question</a></p>
  <a href="https://github.com/FajarKim/github-readme-profile/releases"><img src="https://custom-icon-badges.demolab.com/github/v/tag/FajarKim/github-readme-profile?label=Version&labelColor=302d41&color=f2cdcd&logoColor=d9e0ee&logo=tag&style=for-the-badge" alt="GitHub Readme Profile Version"/></a>
  <a href="https://www.codefactor.io/repository/github/fajarkim/github-readme-profile"><img src="https://img.shields.io/codefactor/grade/github/FajarKim/github-readme-profile?label=CodeFactor&labelColor=302d41&color=8bd5ca&logoColor=d9e0ee&logo=codefactor&style=for-the-badge" alt="GitHub Readme Profile Code Quality"/></a>
  <a href="https://github.com/FajarKim/github-readme-profile/issues"><img src="https://custom-icon-badges.demolab.com/github/issues/FajarKim/github-readme-profile?label=Issue&labelColor=302d41&color=f5a97f&logoColor=d9e0ee&logo=issue&style=for-the-badge" alt="GitHub Readme Profile Issues"/></a>
  <a href="https://github.com/FajarKim/github-readme-profile/pull"><img src="https://custom-icon-badges.demolab.com/github/issues-pr/FajarKim/bz2-shell?&label=Pull%20requests&labelColor=302d41&color=ddb6f2&logoColor=d9e0ee&logo=git-pull-request&style=for-the-badge" alt="GitHub Readme Profile PRs"/></a>
  <a href="https://github.com/FajarKim/github-readme-profile/graphs/contributors"><img src="https://custom-icon-badges.demolab.com/github/contributors/FajarKim/github-readme-profile?label=Contributors&labelColor=302d41&color=c9cbff&logoColor=d9e0ee&logo=people&style=for-the-badge"/></a>
</div>

</br>

<div align="center">
  <a href="https://vercel.com"><img src="https://raw.githubusercontent.com/FajarKim/FajarKim/master/images/powered-by-vercel.svg" alt="Powered by Vercel"/></a>
</div>

# 📌 Features
- [🎴 Getting Started](#-getting-started)
  - [🎨 Themes](#-themes)
  - [✏️ Customization](#%EF%B8%8F-customization)
- [📑 License](#-license)
- [Deploy on ▲ Vercel](#deploy-on--vercel)
- [💳 Credits](#-credits)
- [💰 Donate](#-donate)
- [👥 Contributions](#-contributions)

# 🎴 Getting Started
Copy-paste this into your markdown content, and that is it. Simple!

Change the `?username=` value to your GitHub username.

```markdown
[![GitHub Stats](https://gh-readme-profile.vercel.app/api?username=FajarKim)](https://github.com/FajarKim/github-readme-profile)
```

[![GitHub Stats](https://github-readme-profile-theta.vercel.app/api?username=FajarKim)](https://github.com/FajarKim/github-readme-profile)

## 🎨 Themes
With inbuilt themes, you can customize the look of the card without doing any [manual customization](#%EF%B8%8F-customization).

Use `&theme=THEME_NAME` parameter like so:

```markdown
![GitHub Stats](https://gh-readme-profile.vercel.app/api?username=FajarKim&theme=dark)
```
<details>
  <summary>Show Example</summary>
  <a href="https://github.com/FajarKim/github-readme-profile"><img src="https://github-readme-profile-theta.vercel.app/api?username=FajarKim&theme=dark" alt="GitHub Stats"/></a>
</details>

#### All inbuilt themes
GitHub Readme Profile comes with several built-in themes (e.g. `transparent`, `dark`, `highcontarst`).

|        Themes        |           Preview           |
| :------------------: | :-------------------------: |
|       `default`      |      ![image][default]      |
|     `transparent`    |    ![image][transparent]    |
|        `dark`        |       ![image][dark]        |
|    `highcontrast`    |   ![image][highcontrast]    |

You can look at a preview for [all available themes](./themes). You can also contribute new themes if you like, contributing guidelines can be found [here](./CONTRIBUTING.md#-themes-contribution).

[default]: https://github-readme-profile-theta.vercel.app/api?username=FajarKim&theme=default
[transparent]: https://github-readme-profile-theta.vercel.app/api?username=FajarKim&theme=transparent
[dark]: https://github-readme-profile-theta.vercel.app/api?username=FajarKim&theme=dark
[highcontrast]: https://github-readme-profile-theta.vercel.app/api?username=FajarKim&theme=highcontrast

## ✏️ Customization
You can customize the appearance of all your cards however you wish with URL parameters.

#### Options
- `title_color` - Card's title color (_hex color_). Default: `2f80ed`.
- `text_color` - Body text color (_hex color_). Default: `434d58`.
- `icon_color` - Icons color if available (_hex color_). Default: `4c71f2`.
- `border_color` - Card's border color (_hex color_). Default: `e4e2e2`.
- `bg_color` - Card's background color (_hex color_) or a gradient in the form of _angle,start,end_. Default: `fffefe`.
- `stroke_color` - Profile image border color (_hex color_). Default: `e4e2e2` or `border_color` query.
- `username_color` - Username text color (_hex color_). Deafult: `434d58` or `text_color` query.
- `theme` - Name of the theme, choose from [all available themes](./themes). Default: `default` theme.
- `locale` - Sets the language in the card, you can check full list of available locales [here](#available-locales). Default: `en`.
- `border_width` - Sets the border's width manually (_number_). Default: `1`.
- `border_radius` - Corner rounding on the card. Default: `4.5`.
- `format` - Output format card option (`svg`, `png`, and `json`). Default: `svg`.
- `disabled_animations` - Disables all animations in the card (_boolean_). Default: `false`.
- `hide` - Hides the [specified items](#hiding-individual-stats) from stats (_Comma-separated values_). Default: `[] (blank array)`.
- `show` - Shows [additional items](#showing-additional-individual-stats) on stats card (_Comma-separated values_). Default: `[] (blank array)`.

#### Use the transparent theme
We have included a `transparent` theme that has a transparent background. This theme is optimized to look good on GitHub's dark and light default themes. You can enable this theme using the `&theme=transparent` parameter like so:

```markdown
![GitHub Stats](https://gh-readme-profile.vercel.app/api?username=FajarKim&theme=transparent)
```

<details>
  <summary>Show Example</summary>
  <a href="https://github.com/FajarKim/github-readme-profile"><img src="https://github-readme-profile-theta.vercel.app/api?username=FajarKim&theme=transparent" alt="GitHub Stats"/></a>
</details>

#### Add transparent alpha channel to a themes `bg_color`
You can use the `bg_color` parameter to make any of the available themes transparent. This is done by setting the `bg_color` to a color with a transparent alpha channel (i.e. `bg_color=00000000`):

```markdown
![GitHub Stats](https://gh-readme-profile.vercel.app/api?username=FajarKim&bg_color=00000000)
```

<details>
  <summary>Show Example</summary>
  <a href="https://github.com/FajarKim/github-readme-profile"><img src="https://github-readme-profile-theta.vercel.app/api?username=FajarKim&bg_color=00000000" alt="GitHub Stats"/></a>
</details>

#### Use GitHub's theme context tag
You can use [GitHub's theme context](https://github.blog/changelog/2021-11-24-specify-theme-context-for-images-in-markdown/) tags to switch the theme based on the user GitHub theme automatically. This is done by appending `#gh-dark-mode-only` or `#gh-light-mode-only` to the end of an image URL. This tag will define whether the image specified in the markdown is only shown to viewers using a light or a dark GitHub theme:

```markdown
[![GitHub Stats-Dark](https://gh-readme-profile.vercel.app/api?username=FajarKim&theme=dark#gh-dark-mode-only)](https://github.com/FajarKim/github-readme-profile#gh-dark-mode-only)
[![GitHub Stats-Light](https://gh-readme-profile.vercel.app/api?username=FajarKim&theme=default#gh-light-mode-only)](https://github.com/FajarKim/github-readme-profile#gh-light-mode-only)
```

<details>
  <summary>Show Example</summary>
  <a href="https://github.com/FajarKim/github-readme-profile#gh-dark-mode-only"><img src="https://github-readme-profile-theta.vercel.app/api?username=FajarKim&theme=dark#gh-dark-mode-only" alt="GitHub Stats-Dark"/></a>
  <a href="https://github.com/FajarKim/github-readme-profile#gh-light-mode-only"><img src="https://github-readme-profile-theta.vercel.app/api?username=FajarKim&theme=default#gh-light-mode-only" alt="GitHub Stats-Light"/></a>
</details>

#### Use gradient color
You can use the `bg_color` parameter to make gradient color. This is done by setting the `bg_color` with format _angle,start,end_ (comma-separated value).

```markdown
![GitHub Stats](https://gh-readme-profile.vercel.app/api?username=FajarKim&bg_color=30,e96443,904e95&title_color=fff&text_color=fff&icon_color=fff)
```

<details>
  <summary>Show Example</summary>
  <a href="https://github.com/FajarKim/github-readme-profile"><img src="https://github-readme-profile-theta.vercel.app/api?username=FajarKim&bg_color=30,e96443,904e95&title_color=fff&text_color=fff&icon_color=fff" alt="GitHub Stats"/></a>
</details>

#### Hiding individual stats
You can pass a query parameter `&hide=` to hide any specific stats with comma-separated values.

> Options:
> `&hide=repos,stars,forks,commits,prs,prs_merged,issues,
contributed`

```markdown
![GitHub Stats](https://gh-readme-profile.vercel.app/api?username=FajarKim&hide=repos,forks,prs_merged)
```

<details>
  <summary>Show Example</summary>
  <a href="https://github.com/FajarKim/github-readme-profile"><img src="https://github-readme-profile-beta.vercel.app/api?username=FajarKim&hide=repos,forks,prs_merged" alt="GitHub Stats"/></a>
</details>

#### Showing additional individual stats
You can pass a query parameter `&show=` to show any specific additional stats with comma-separated values

> Options:
> `&show=reviews,issues_closed,discussions_started,discussions_answered`

```markdown
![GitHub Stats](https://gh-readme-profile.vercel.app/api?username=FajarKim&show=reviews,issues_closed,discussions_started,discussions_answered)
```

<details>
  <summary>Show Example</summary>
  <a href="https://github.com/FajarKim/github-readme-profile"><img src="https://github-readme-profile-beta.vercel.app/api?username=FajarKim&show=reviews,issues_closed,discussions_started,discussions_answered" alt="GitHub Stats"/></a>
</details>

#### Available locales
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

The locale code added to file should be a 2-letter abbreviation from [ISO 639-1](https://www.andiamo.co.uk/resources/iso-language-codes/) or a 4-letter code with a language and country code (eg. `id` or `pt-BR`). Anything appearing in [the list](https://gist.github.com/FajarKim/91516c2aecbfc8bf65f584d528d5f2b1) should be fine.

```markdown
![GitHub Stats](https://gh-readme-profile.vercel.app/api?username=FajarKim&locale=id)
```

<details>
  <summary>Show Example</summary>
  <a href="https://github.com/FajarKim/github-readme-profile"><img src="https://github-readme-profile-theta.vercel.app/api?username=FajarKim&locale=id" alt="GitHub Stats"/></a>
</details>

## 📑 License
GitHub Readme Profile is released under the MIT license, which grants the following permissions:
- Commercial use
- Modification
- Distribution
- Private use

For more convoluted language, see the [LICENSE](/LICENSE).

## Deploy on ▲ Vercel
Step-by-step guide on setting up your own Vercel instance.
1. Go to [vercel.com](https://vercel.com).
2. Click on `Log In`.
3. Sign in with GitHub by pressing `Continue with GitHub`.
4. Sign in to GitHub and allow access to all repositories if prompted.
5. Fork this repository.
6. Go back to your [Vercel dashboard](https://vercel.com/dashboard).
7. To import a project, click the `Add New...` or `+` button and select the `Project` option.
8. Click the Continue with GitHub button, search for the required Git Repository and import it by clicking the `Import` button. Alternatively, you can import a Third-Party Git Repository using the `Import Third-Party Git Repository` link at the bottom of the page.
9. Create a personal access token (PAT) [here](https://github.com/settings/tokens/new) and enable the `repo` and `user` permissions (this allows access to see private repo and user stats).
10. Add the PAT as an environment variable named `GH_TOKEN`.
11. In build and output settings, you set install command toggle and add command `npm install typescript`.
12. Click deploy, and you're good to go. See your domains to use the API!

[![Deploy](https://raw.githubusercontent.com/FajarKim/FajarKim/master/images/deploy-on-vercel.svg)](https://vercel.com/import/project?template=https://github.com/FajarKim/github-readme-profile)

## 💳 Credits
This repository contains forked from [tuhinpal/readme-stats-github](https://github.com/tuhinpal/readme-stats-github) and inspired from [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats).

## 💰 Donate
Love the project? Please consider donating to help it improve!
<div align="left">
    <a href="https://github.com/sponsors/FajarKim/"><img src="https://img.shields.io/badge/GitHub-Sponsor-blue?labelColor=302d41&color=f5bde6&logo=github&logoColor=d9e0ee&style=for-the-badge" alt="GitHub Sponsor"></a>
    <a href="https://paypal.me/agusbirawan/"><img src="https://img.shields.io/badge/PayPal-Donate-blue?labelColor=302d41&color=f4dbd6&logo=paypal&logoColor=d9e0ee&style=for-the-badge" alt="PayPal Donate"></a>
    <a href="https://buymeacoffee.com/fajarkim/"><img src="https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-blue?labelColor=302d41&color=eed49f&logo=buymeacoffee&logoColor=d9e0ee&style=for-the-badge" alt="Buy Me a Coffee"></a>
    <a href="https://trakteer.id/FajarKim/"><img src="https://custom-icon-badges.demolab.com/badge/Trakteer-Donate-blue?labelColor=302d41&color=ed8796&logo=trakteerid&logoColor=d9e0ee&style=for-the-badge" alt="Trakteer.id Donate"></a>
</div>

Are you considering supporting the project by donating to me? Please DO NOT!!

Please visit [this link](https://fajarkim.github.io/donate) and make a small donation to help the people in need. A small donation goes a long way. ❤️

### 👥 Contributions
> Contributions are welcome!

Specially thanks ❤️ for contributors bellow:

<a href="https://github.com/FajarKim/github-readme-profile/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=FajarKim/github-readme-profile" />
</a>

Want to contribute? Please note our contribution guidelines [here](/CONTRIBUTING.md).

<div align="center">
  <img src="https://raw.githubusercontent.com/FajarKim/FajarKim/master/images/line.svg?sanitize=true"/>
</div>

<p align="center">Made with ❤️ and TypeScript</p>
<p align="center">Copyright © 2023 Rangga Fajar Oktariansyah</p>
<div align="center">
  <a href="LICENSE"><img src="https://custom-icon-badges.demolab.com/github/license/FajarKim/github-readme-profile?label=License&labelColor=302d41&color=91d7e3&logo=law&logoColor=d9e0ee&style=for-the-badge" alt="GitHub Readme Profile License"></a>
</div>
