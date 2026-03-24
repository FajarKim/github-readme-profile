# Contributing to GitHub Readme Profile

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting [an issue](https://github.com/FajarKim/github-readme-profile/issues/new?assignees=&labels=bug&template=bug_report.yml).
- [Discussing](https://github.com/FajarKim/github-readme-profile/discussions) the current state of the code.
- Submitting [a fix](https://github.com/FajarKim/github-readme-profile/compare).
- Proposing [new features](https://github.com/FajarKim/github-readme-profile/issues/new?assignees=&labels=enhancement&template=feature_request.yml).
- Becoming a maintainer.

## All Changes Happen Through Pull Requests

Pull requests are the best way to propose changes. We actively welcome your pull requests:

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add test examples.
3. If you've changed APIs, update the documentation.
4. Issue that pull request!

## Theme Contribution

GitHub Readme Profile supports custom theming, and you can contribute new themes to the built‑in collection.

> [!NOTE]
> If you are contributing a theme only for personal use, you can [customize the appearance](/README.md#customization) of your card with URL parameters instead, no pull request needed.

> [!NOTE]
> Your pull request with a new theme will be merged once it receives enough positive feedback from the community (at least 5–10 👍 reactions). This helps ensure that only themes with broad appeal are included. You can also support themes from other contributors by upvoting them.

> [!NOTE]
> Before submitting your theme, please ensure it passes the **WCAG 2.0 Level AA** contrast ratio test. You can use [WebAIM’s contrast checker](https://webaim.org/resources/contrastchecker/) to verify.

To contribute a theme, edit the [`themes/index.ts`](/themes/index.ts) file and add your theme at the end of the file. Follow the existing structure: provide a descriptive name and a set of color definitions (`title_color`, `text_color`, `icon_color`, `border_color`, `bg_color`, etc.).

## Translations Contribution

GitHub Readme Profile supports multiple languages. If your language is missing, you can contribute a translation! See the currently supported languages in [`i18n/README.md`](/i18n/README.md).

To add a new language:

1. Edit the [`i18n/index.ts`](/i18n/index.ts) file.
2. Add a new property to each translation object using the language code as the key. The code should follow the ISO 639-1 standard (e.g., `id`, `fr`, `ja`). Country‑specific codes like `pt-BR` are also acceptable.
3. Provide the translated strings for all keys. You can use the existing translations as a reference.

If you are unsure about the language code, check [this list](https://gist.github.com/FajarKim/91516c2aecbfc8bf65f584d528d5f2b1) for accepted codes.

## Any Contributions You Make Will Be Under the MIT Software License

When you submit changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. If that's a concern, please contact the maintainers.

## Report Issues or Bugs Using GitHub Issues

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/FajarKim/github-readme-profile/issues/new/choose); it's that easy!

### Bug Reports

**Great bug reports** tend to have:

- A quick summary and/or background
- Steps to reproduce:
  - Be specific!
  - Include a snapshot or screenshot if possible.
  - Provide a live link to the affected card (e.g., `https://gh-readme-profile.vercel.app/api?username=...`)
- What actually happens
- What you expected to happen
- Notes (possible causes, things you tried that didn't work)

People ❤️ thorough bug reports, we're not even kidding.

### Feature Requests

**Great feature requests** tend to have:

- A clear idea summary
- What you want to add and why
- Additional context (images, links to resources, implementation ideas)

## License

By contributing, you agree that your contributions will be licensed under the project's [MIT License](/LICENSE).
