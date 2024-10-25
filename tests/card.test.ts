import card from "../src/card";
import locales from "../i18n/index";

describe("Test card function", () => {
  const mockData = {
    username: "FajarKim",
    name: "Rangga Fajar Oktariansyah",
    picture: "/9j/2wBDADUlKC8oITUvKy88OTU/UIVXUElJUKN1e2GFwarLyL6qurfV8P//1eL/5re6////////////zv//////////////2wBDATk8PFBGUJ1XV53/3Lrc////////////////////////////////////////////////////////////////////wAARCABLAEsDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAQQAAgMF/8QAKhAAAQMDAwMEAQUAAAAAAAAAAQACEQMhMRJBUQQTYSJxkaGxFDIzNIH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AHFJQS/VmzW7G6yq3fJ6jQ0SOZTCQpHTVZCeQFRBRUFVc4MaXOMAIpbq6rmAMbFxdBenWZUcdJPsVqkaDywgkEg7AJ1QEmBJSVV+uoScCwTVX+MpHVczypVi5/bIy0p1jtTQeQkAc+VZupl2kTwpKuH1EmOpdIBaJKua5aASLHyrsTDKSqnu1jGMLT9RchwcAZgrASBwlpIs21Rh22TiTYwPOkm26bbZoHCQqPEsIXNeYqOHldNLVaAfLcOF2nnwqhYPAIVi8ECSCBxkrItgkE3GwQsIGOVMXVwfUSdgSgXQGo0zFURecoPcHmY0jFgrgs2o4ySSSPwtDUbpJAgHAWDW21Q7/ETc+qZ5JTEbUXkO97J0YSVJpc4abiYTosFItRBzdQ/CKi0hHqpbU9W4wN0uTPAHATfVsL6ovgcLDtefpBVr2gixxHsqkjAwFp2Dz9I9h0Z+kGUtjdXpUjVcdNgMkoigTv8ASY6OmWy4OtMEEINqFLRnay1UwggCKCiBTqamivbJF7rI1vB+Ues/sH2CwUG4rTkGEHVr+kfKx2U2VFzVd4+E/wBID2ASMmVzcuAPK61MBrABgILoKKIP/9k=",
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
    Title: "Rangga Fajar Oktariansyah's GitHub Stats",
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
    Revert: false,
    photoQuality: 15,
    photoResize: 150,
  };

  it("should generate SVG markup with default values", async () => {
    const svgMarkup = await card(mockData, mockUiConfig);

    expect(svgMarkup).toContain("<svg");
    expect(svgMarkup).toContain(mockData.name);
    expect(svgMarkup).toContain(`@${mockData.username}`);
  });

  it("should generate SVG markup with hidden and shown items", async () => {
    const customUiConfig = { ...mockUiConfig, showItems: "reviews,issues_closed,discussions_started,discussions_answered", hiddenItems: "stars,forks,commits,prs" };
    const svgMarkup = await card(mockData, customUiConfig);

    expect(svgMarkup).toContain("Total PRs Reviewed:");
    expect(svgMarkup).toContain("Total Issues Closed:");
    expect(svgMarkup).toContain("Discussions Started:");
    expect(svgMarkup).toContain("Discussions Answered:");
    expect(svgMarkup).not.toContain("Star's Count:");
    expect(svgMarkup).not.toContain("Fork's Count:");
    expect(svgMarkup).not.toContain("Commit's Count:");
  });

  it("should generate SVG markup with hidden and shown undefined items", async () => {
    const customUiConfig = { ...mockUiConfig, showItems: undefined, hiddenItems: undefined };
    const svgMarkup = await card(mockData, customUiConfig);

    expect(svgMarkup).toContain("Star's Count:");
    expect(svgMarkup).toContain("Fork's Count:");
    expect(svgMarkup).toContain("Commit's Count:");
  });

  it.each(Object.keys(locales))("should generate SVG markup with locales '%s'", async (locale) => {
    const customUiConfig = { ...mockUiConfig, Locale: locale };
    const svgMarkup = await card(mockData, customUiConfig);

    expect(svgMarkup).toContain("<svg");
    expect(svgMarkup).toContain(mockData.name);
    expect(svgMarkup).toContain(`@${mockData.username}`);
  });

  it.each(Object.keys(locales))("should generate SVG markup with locales '%s' and disabled animations", async (locale) => {
    const customUiConfig = { ...mockUiConfig, Locale: locale, disabledAnimations: true };
    const svgMarkup = await card(mockData, customUiConfig);

    expect(svgMarkup).toContain("<svg");
    expect(svgMarkup).toContain(mockData.name);
    expect(svgMarkup).toContain(`@${mockData.username}`);
    expect(svgMarkup).not.toContain("@keyframes");
  });

  it("should generate SVG markup with invalid locales", async () => {
    const customUiConfig = { ...mockUiConfig, Locale: "abc123" };
    const svgMarkup = await card(mockData, customUiConfig);

    expect(svgMarkup).toContain("<svg");
    expect(svgMarkup).toContain(mockData.name);
    expect(svgMarkup).toContain(`@${mockData.username}`);
  });

  it("should generate SVG markup with custom background color", async () => {
    const customUiConfig = { ...mockUiConfig, bgColor: "ff5733" };
    const svgMarkup = await card(mockData, customUiConfig);

    expect(svgMarkup).toContain("<rect");
    expect(svgMarkup).toContain("fill=\"#ff5733\"");
  });

  it("should generate SVG markup with gradient background color", async () => {
    const customUiConfig = { ...mockUiConfig, bgColor: "45,ff5733,00ccff" };
    const svgMarkup = await card(mockData, customUiConfig);

    expect(svgMarkup).toContain("<linearGradient");
  });

  it("should generate SVG markup with gradient background color (array)", async () => {
    const customUiConfig = { ...mockUiConfig, bgColor: ["45", "ff5733", "00ccff"] };
    const svgMarkup = await card(mockData, customUiConfig);

    expect(svgMarkup).toContain("<linearGradient");
  });

  it("should generate SVG markup with hidden border and stroke", async () => {
    const customUiConfig = { ...mockUiConfig, hideBorder: true, hideStroke: true };
    const svgMarkup = await card(mockData, customUiConfig);

    expect(svgMarkup).not.toContain("stroke=\"#e4e2e2\"");
    expect(svgMarkup).not.toContain("stroke-width=\"5\"");
  });

  it("should generate SVG markup with disabled animations", async () => {
    const customUiConfig = { ...mockUiConfig, disabledAnimations: true };
    const svgMarkup = await card(mockData, customUiConfig);

    expect(svgMarkup).not.toContain("@keyframes");
  });
});
