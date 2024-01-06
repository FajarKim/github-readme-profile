import card from "../src/card";
import locales from "../src/translations";

describe("Test card function", () => {
  const mockData = {
    username: "FajarKim",
    name: "Rangga Fajar Oktariansyah",
    picture: "avatar",
    public_repos: 20,
    followers: 20,
    following: 10,
    total_stars: 140,
    total_forks: 90,
    total_issues: 150,
    total_closed_issues: 100,
    total_prs: 530,
    total_prs_merged: 490,
    total_commits: 1330,
    total_review: 340,
    total_discussion_answered: 4,
    total_discussion_started: 10,
    total_contributed_to: 12,
  };

  const mockUiConfig = {
    Locale: "en",
    Format: "svg",
    titleColor: "2f80ed",
    textColor: "434d58",
    iconColor: "4c71f2",
    borderColor: "e4e2e2",
    bgColor: "ffffff",
    strokeColor: "e4e2e2",
    usernameColor: "2f80ed",
    borderRadius: 5,
    borderWidth: 1,
    hideBorder: false,
    hideStroke: false,
    disabledAnimations: false,
    showItems: "reviews,issues_closed",
    hiddenItems: "forks,commits",
  };

  it("should generate SVG markup with default values", () => {
    const svgMarkup = card(mockData, mockUiConfig);

    expect(svgMarkup).toContain("<svg");
    expect(svgMarkup).toContain(mockData.name);
    expect(svgMarkup).toContain(`@${mockData.username}`);
  });

  it("should generate SVG markup with hidden and shown items", () => {
    const customUiConfig = { ...mockUiConfig, showItems: "reviews,issues_closed,discussions_started,discussions_answered", hiddenItems: "stars,forks,commits,prs" };
    const svgMarkup = card(mockData, customUiConfig);

    expect(svgMarkup).toContain("Total PRs Reviewed:");
    expect(svgMarkup).toContain("Total Issues Closed:");
    expect(svgMarkup).toContain("Discussions Started:");
    expect(svgMarkup).toContain("Discussions Answered:");
    expect(svgMarkup).not.toContain("Star's Count:");
    expect(svgMarkup).not.toContain("Fork's Count:");
    expect(svgMarkup).not.toContain("Commit's Count:");
  });

  it("should generate SVG markup with hidden and shown undefined items", () => {
    const customUiConfig = { ...mockUiConfig, showItems: undefined, hiddenItems: undefined };
    const svgMarkup = card(mockData, customUiConfig);

    expect(svgMarkup).toContain("Star's Count:");
    expect(svgMarkup).toContain("Fork's Count:");
    expect(svgMarkup).toContain("Commit's Count:");
  });

  it.each(Object.keys(locales))("should generate SVG markup with locales '%s'", (locale) => {
    const customUiConfig = { ...mockUiConfig, Locale: locale };
    const svgMarkup = card(mockData, customUiConfig);

    expect(svgMarkup).toContain("<svg");
    expect(svgMarkup).toContain(mockData.name);
    expect(svgMarkup).toContain(`@${mockData.username}`);
  });

  it.each(Object.keys(locales))("should generate SVG markup with locales '%s' and disabled animations", (locale) => {
    const customUiConfig = { ...mockUiConfig, Locale: locale, disabledAnimations: true };
    const svgMarkup = card(mockData, customUiConfig);

    expect(svgMarkup).toContain("<svg");
    expect(svgMarkup).toContain(mockData.name);
    expect(svgMarkup).toContain(`@${mockData.username}`);
    expect(svgMarkup).not.toContain("@keyframes");
  });

  it("should generate SVG markup with invalid locales", () => {
    const customUiConfig = { ...mockUiConfig, Locale: "abc123" };
    const svgMarkup = card(mockData, customUiConfig);

    expect(svgMarkup).toContain("<svg");
    expect(svgMarkup).toContain(mockData.name);
    expect(svgMarkup).toContain(`@${mockData.username}`);
  });

  it("should generate SVG markup with custom background color", () => {
    const customUiConfig = { ...mockUiConfig, bgColor: "ff5733" };
    const svgMarkup = card(mockData, customUiConfig);

    expect(svgMarkup).toContain("<rect");
    expect(svgMarkup).toContain("fill=\"#ff5733\"");
  });

  it("should generate SVG markup with gradient background color", () => {
    const customUiConfig = { ...mockUiConfig, bgColor: "45,ff5733,00ccff" };
    const svgMarkup = card(mockData, customUiConfig);

    expect(svgMarkup).toContain("<linearGradient");
  });

  it("should generate SVG markup with gradient background color (array)", () => {
    const customUiConfig = { ...mockUiConfig, bgColor: ["45", "ff5733", "00ccff"] };
    const svgMarkup = card(mockData, customUiConfig);

    expect(svgMarkup).toContain("<linearGradient");
  });

  it("should generate SVG markup with hidden border and stroke", () => {
    const customUiConfig = { ...mockUiConfig, hideBorder: true, hideStroke: true };
    const svgMarkup = card(mockData, customUiConfig);

    expect(svgMarkup).not.toContain("stroke=\"#e4e2e2\"");
    expect(svgMarkup).not.toContain("stroke-width=\"5\"");
  });

  it("should generate SVG markup with disabled animations", () => {
    const customUiConfig = { ...mockUiConfig, disabledAnimations: true };
    const svgMarkup = card(mockData, customUiConfig);

    expect(svgMarkup).not.toContain("@keyframes");
  });
});
