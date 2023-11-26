import fs from 'fs';
import { generateReadmeThemes } from '../scripts/generate-theme-doc';
import { generateReadmeLocales } from '../scripts/generate-translation-doc';

jest.mock('fs');

describe('Test Generate Readme Docs', () => {
  it('should generate the README content themes correctly', () => {
    const username = 'FajarKim';
    const generatedReadme = generateReadmeThemes(username);

    expect(fs.writeFileSync).toHaveBeenCalledWith('./themes/README.md', generatedReadme);
  });

  it('should generate the README content locales correctly', () => {
    const generatedReadme = generateReadmeLocales();

    expect(fs.writeFileSync).toHaveBeenCalledWith('./docs/translations.md', generatedReadme);
  });
});
