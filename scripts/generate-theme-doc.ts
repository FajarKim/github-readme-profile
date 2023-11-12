import fs from "fs";
import { themes } from '../themes/index';

const TARGET_FILE = "./themes/README.md";
// Function to generate the markdown for themes
function generateThemeMarkdown(username: string, theme: string, itemsPerRow: number = 3): string {
  return `\`${theme}\` [![${theme}](https://github-readme-profile-alpha.vercel.app/api?username=${username}&theme=${theme})](https://github-readme-profile-alpha.vercel.app/api?username=${username}&theme=${theme})`;
}

// Function to generate README.md content
function generateReadme(username: string): string {
  const availableThemes = Object.keys(themes);
  const itemsPerRow = 3;

  let themesPreviewTable = '';
  for (let i = 0; i < availableThemes.length; i += itemsPerRow) {
    const themesSlice = availableThemes.slice(i, i + itemsPerRow);
    const row = themesSlice.map(theme => generateThemeMarkdown(username, theme)).join(' | ');
    themesPreviewTable += `| ${row} |\n`;
  }

  const readmeContent = `
## Available Themes

With inbuilt themes, you can customize the look of the card without doing any manual customization.

Use \`?theme=THEME_NAME\` parameter like so :-

\`\`\`md
![GitHub Profile](https://github-readme-profile-alpha.vercel.app/api?username=${username}&theme=dark)
\`\`\`

## Themes Preview

|                   |                   |                   |
| :---------------: | :---------------: | :---------------: |
${themesPreviewTable}

Want to add a new theme? Consider reading the [contribution guidelines](/CONTRIBUTING.md#-themes-contribution) :D
`;

  return readmeContent;
}

// Example usage
const username = 'FajarKim';
const generatedReadme = generateReadme(username);
fs.writeFileSync(TARGET_FILE, generatedReadme);
