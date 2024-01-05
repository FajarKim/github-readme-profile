import fs from "fs";
import themes from "../themes/index";

const TARGET_FILE = "./themes/README.md";

function generateThemeMarkdown(theme: string): string {
  return `\`${theme}\` ![${theme}][${theme}]`;
}

function generateThemeLink(username: string, theme: string): string {
  return `[${theme}]: https://github-readme-profile-alpha.vercel.app/api?username=${username}&theme=${theme}`;
}

export function generateReadmeThemes(username: string): string {
  const availableThemes = Object.keys(themes);
  const itemsPerRow = 3;

  let themesPreviewTable = "";
  for (let i = 0; i < availableThemes.length; i += itemsPerRow) {
    const themesSlice = availableThemes.slice(i, i + itemsPerRow);
    const row = themesSlice.map(theme => generateThemeMarkdown(theme)).join(" | ");
    themesPreviewTable += `| ${row} |\n`;
  }

  let themesPreviewLink = "";
  for (let i = 0; i < availableThemes.length; i += 1) {
    const themesSlice = availableThemes.slice(i, i + 1);
    const row = themesSlice.map(theme => generateThemeLink(username, theme)).join("\n");
    themesPreviewLink += `${row}\n`;
  }

  const readmeContent = `<!-- DO NOT EDIT THIS FILE DIRECTLY -->
## Available Themes

With inbuilt themes, you can customize the look of the card without doing any manual customization.

Use \`?theme=THEME_NAME\` parameter like so :-

\`\`\`md
![GitHub Profile](https://gh-readme-profile.vercel.app/api?username=${username}&theme=dark)
\`\`\`

## Themes Preview

|                   |                   |                   |
| :---------------: | :---------------: | :---------------: |
${themesPreviewTable}

Want to add a new theme? Consider reading the [contribution guidelines](/CONTRIBUTING.md#-themes-contribution) :D

${themesPreviewLink}`;

  return readmeContent;
}

const username = "FajarKim";

const generatedReadme = generateReadmeThemes(username);

fs.writeFileSync(TARGET_FILE, generatedReadme);
