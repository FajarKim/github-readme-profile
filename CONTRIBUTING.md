# Contributing to [github-readme-profile](https://github.com/FajarKim/github-readme-profile)

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

-   Reporting [an issue](https://github.com/FajarKim/github-readme-profile/issues/new?assignees=&labels=bug&template=bug_report.yml).
-   [Discussing](https://github.com/FajarKim/github-readme-profile/discussions) the current state of the code.
-   Submitting [a fix](https://github.com/FajarKim/github-readme-profile/compare).
-   Proposing [new features](https://github.com/FajarKim/github-readme-profile/issues/new?assignees=&labels=enhancement&template=feature_request.yml).
-   Becoming a maintainer.

## 🌝 All Changes Happen Through Pull Requests

Pull requests are the best way to propose changes. We actively welcome your pull requests:

1.  Fork the repo and create your branch from `master`.
2.  If you've added code that should be tested, add some tests' examples.
3.  If you've changed APIs, update the documentation.
4.  Issue that pull request!

## 🎨 Themes Contribution

GitHub Readme Profile supports custom theming, and you can also contribute new themes!

> [!NOTE]\
> If you are contributing your theme just because you are using it personally, then you can [customize the looks](./README.md#customization) of your card with URL params instead.

> [!NOTE]\
> Your pull request with theme addition will be merged once we get enough positive feedback from the community in the form of thumbs up 👍 emojis. We expect to see at least 5-10 thumbs up before making a decision to merge your pull request into the master branch. Remember that you can also support themes of other contributors that you liked to speed up their merge.

> [!NOTE]\
> Before submitting pull request, please make sure that your theme pass WCAG 2.0 level AA contrast ration test. You can use [this tool](https://webaim.org/resources/contrastchecker/) to check it.

To contribute your theme you need to edit the [themes/index.ts](/themes/index.ts) file and add it at the end of the file.

## 🗣️ Translations Contribution
GitHub Readme Profile supports multiple languages, if we are missing your language, you can contribute it! You can check the currently supported languages [here](/README.md#available-locales).

To contribute your language you need to edit the [i18n/index.ts](/i18n/index.ts) file and add new property to each object where the key is the language code in ISO 639-1 standard and the value is the translated string. Anything appearing in [the list](https://gist.github.com/FajarKim/91516c2aecbfc8bf65f584d528d5f2b1) should be fine.

## 📑 Any contributions you make will be under the MIT Software License

In short, when you submit changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## ⚠️ Report issues/bugs using GitHub's [issues](https://github.com/FajarKim/github-readme-profile/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/FajarKim/github-readme-profile/issues/new/choose); it's that easy!

### 🚨 Bug Reports

**Great Bug Reports** tend to have:

-   A quick summary and/or background
-   Steps to reproduce
    -   Be specific!
    -   Share the snapshot, if possible.
    -   GitHub Readme Stats' live link
-   What actually happens
-   What you expected would happen
-   Notes (possibly including why you think this might be happening or stuff you tried that didn't work)

People ❤️ thorough bug reports. I'm not even kidding.


### 😎 Feature Request

**Great Feature Requests** tend to have:

-   A quick idea summary
-   What & why do you want to add the specific feature
-   Additional context like images, links to resources to implement the feature, etc.

## 📖 License

By contributing, you agree that your contributions will be licensed under its [MIT License](./LICENSE).
