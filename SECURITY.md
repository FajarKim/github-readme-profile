# Security Policies and Procedures

This document outlines security procedures and general policies for the GitHub Readme Profile project.

- [Reporting a Vulnerability](#reporting-a-vulnerability)
- [Disclosure Policy](#disclosure-policy)
- [Security Features](#security-features)
- [Scope of Vulnerabilities](#scope-of-vulnerabilities)
- [Dependencies](#dependencies)

## Reporting a Vulnerability

The GitHub Readme Profile team and community take all security vulnerabilities seriously. Thank you for improving the security of our open source software. We appreciate your efforts and responsible disclosure and will make every effort to acknowledge your contributions.

**Report security vulnerabilities by emailing the maintainer:**

[![Mail](https://custom-icon-badges.demolab.com/badge/Mail-fajarrkim%40gmail.com-blue?labelColor=302d41&color=b7bdf8&logoColor=d9e0ee&style=for-the-badge&logo=mail)](mailto:fajarrkim@gmail.com)

The lead maintainer will acknowledge your email within 48 hours and will send a more detailed response within 72 hours, indicating the next steps in handling your report. After the initial reply, the security team will endeavor to keep you informed of the progress toward a fix and full announcement, and may ask for additional information or guidance.

**For vulnerabilities in third‑party modules**, please report them to the person or team maintaining that module.

## Disclosure Policy

When the security team receives a security bug report, they will assign it to a primary handler. This person will coordinate the fix and release process, involving the following steps:

1. Confirm the problem and determine its impact.
2. Audit the codebase to find any potential similar problems.
3. Prepare fixes and test them thoroughly.
4. Release the fixes as soon as possible, with an explanation of the issue and the mitigation.

## Security Features

- **Environment Variables**: The project uses a `GH_TOKEN` environment variable to authenticate with the GitHub API. This token should be kept secret and never exposed in client‑side code.
- **Proxy Middleware**: The application includes a middleware that proxies all requests (except those to `/api`, `/themes`, and `/i18n`) to an external generator. This middleware is carefully configured to avoid leaking sensitive headers or internal paths.
- **Input Sanitization**: User‑supplied parameters (e.g., `username`, `title`, `theme`, colors) are sanitized to prevent injection attacks in the generated SVG.
- **Generator CAPTCHA Security**: The external generator service (`https://gh-readme-profile-generator.vercel.app`) implements CAPTCHA verification before allowing access to the generation form. This helps prevent automated abuse and protects the infrastructure from excessive load.
- **Content Security Policy (CSP)**: The API responds with appropriate headers to reduce the risk of XSS and other client‑side attacks.

## Scope of Vulnerabilities

Vulnerabilities may exist in any part of the codebase, including but not limited to:

- The main API endpoint at `https://gh-readme-profile.vercel.app/api`
- The proxy middleware that forwards requests to the generator
- The theme and translation loading systems (`themes/index.ts`, `i18n/index.ts`)
- The SVG rendering logic
- The handling of GitHub API responses
- The Vercel deployment configuration

If you discover a vulnerability in the **generator** (hosted at `https://gh-readme-profile-generator.vercel.app`), please report it through the same channel.

## Dependencies

The project relies on several npm packages. We regularly update dependencies to include security patches. If you find a vulnerability in one of these dependencies, please report it using the process above or, if the vulnerability is in a direct dependency, consider opening a security advisory through GitHub.

We encourage contributors to keep an eye on the dependency list and run `npm audit` periodically to identify potential issues.

---

Thank you for helping keep GitHub Readme Profile secure.
