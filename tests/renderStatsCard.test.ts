import readmeStats from "../api/index";
import getData from "../src/getData";
import type { User } from "../src/fetcher/stats";
import card from "../src/card";
import themes from "../themes/index";
import locales from "../i18n/index";

jest.mock("../src/getData");
jest.mock("../src/card");

jest.mock("express", () => ({
  ...jest.requireActual("express"),
  __esModule: true,
  default: {
    Request: jest.fn(),
    Response: jest.fn(),
  },
}));

const exampleUserData: User = {
  name: "Fajar",
  login: "FajarKim",
  avatarUrl: "base64-encoded-image",
  repositories: { totalCount: 20 },
  followers: { totalCount: 20 },
  following: { totalCount: 10 },
  openedIssues: { totalCount: 150 },
  closedIssues: { totalCount: 100 },
  pullRequests: { totalCount: 530 },
  mergedPullRequests: { totalCount: 490 },
  discussionStarted: { totalCount: 4 },
  discussionAnswered: { totalCount: 10 },
  repositoriesContributedTo: { totalCount: 12 },
  totalCommitContributions: 1200,
  restrictedContributionsCount: 130,
  totalPullRequestReviewContributions: 340,
  joinedAt: "2020-01-01T00:00:00Z",
};

describe("Test GitHub Readme Profile API", () => {
  let mockRequest: any;
  let mockResponse: any;

  beforeEach(() => {
    mockRequest = {
      query: {},
    };

    mockResponse = {
      json: jest.fn(),
      send: jest.fn(),
      setHeader: jest.fn(),
      status: jest.fn(),
    };

    jest.clearAllMocks();
  });

  it("should handle request and generate JSON response", async () => {
    mockRequest.query.username = "FajarKim";
    mockRequest.query.format = "json";
    (getData as jest.Mock).mockResolvedValueOnce(exampleUserData);

    await readmeStats(mockRequest, mockResponse);

    expect(getData).toHaveBeenCalledWith(mockRequest.query.username);
    expect(mockResponse.json).toHaveBeenCalledWith(exampleUserData);
    expect(mockResponse.send).not.toHaveBeenCalled();
    expect(mockResponse.setHeader).toHaveBeenCalledWith("Cache-Control", "s-maxage=7200, stale-while-revalidate");
  });

  it("should return an error response when GitHub API fails", async () => {
    mockRequest.query.username = "FajarKim";
    mockRequest.query.format = "json";
    (getData as jest.Mock).mockRejectedValueOnce(new Error("GitHub API error"));

    await readmeStats(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith("Error fetching data from GitHub API");
  });

  it("should handle request and generate SVG response", async () => {
    mockRequest.query.username = "FajarKim";
    mockRequest.query.format = "svg";
    (getData as jest.Mock).mockResolvedValueOnce(exampleUserData);

    await readmeStats(mockRequest, mockResponse);

    expect(getData).toHaveBeenCalledWith(mockRequest.query.username);
    expect(card).toHaveBeenCalledWith(exampleUserData, expect.any(Object));
    expect(mockResponse.send).toHaveBeenCalled();
    expect(mockResponse.json).not.toHaveBeenCalled();
    expect(mockResponse.setHeader).toHaveBeenCalledWith("Content-Type", "image/svg+xml");
  });

  it.each(Object.keys(themes))("should handle request theme '%s' and generate SVG response", async (theme) => {
    mockRequest.query.username = "FajarKim";
    mockRequest.query.theme = theme;
    (getData as jest.Mock).mockResolvedValueOnce(exampleUserData);

    await readmeStats(mockRequest, mockResponse);

    expect(getData).toHaveBeenCalledWith(mockRequest.query.username);
    expect(card).toHaveBeenCalledWith(exampleUserData, expect.any(Object));
    expect(mockResponse.send).toHaveBeenCalled();
    expect(mockResponse.json).not.toHaveBeenCalled();
    expect(mockResponse.setHeader).toHaveBeenCalledWith("Content-Type", "image/svg+xml");
  });

  it.each(Object.keys(locales))("should handle request locale '%s' and generate SVG response", async (locale) => {
    mockRequest.query.username = "FajarKim";
    mockRequest.query.locale = locale;
    (getData as jest.Mock).mockResolvedValueOnce(exampleUserData);

    await readmeStats(mockRequest, mockResponse);

    expect(getData).toHaveBeenCalledWith(mockRequest.query.username);
    expect(card).toHaveBeenCalledWith(exampleUserData, expect.any(Object));
    expect(mockResponse.send).toHaveBeenCalled();
    expect(mockResponse.json).not.toHaveBeenCalled();
    expect(mockResponse.setHeader).toHaveBeenCalledWith("Content-Type", "image/svg+xml");
  });

  it("should handle request hide stats and generate SVG response", async () => {
    mockRequest.query.username = "FajarKim";
    mockRequest.query.hide = "repos,forks,prs_merged";
    (getData as jest.Mock).mockResolvedValueOnce(exampleUserData);

    await readmeStats(mockRequest, mockResponse);

    expect(getData).toHaveBeenCalledWith(mockRequest.query.username);
    expect(card).toHaveBeenCalledWith(exampleUserData, expect.any(Object));
    expect(mockResponse.send).toHaveBeenCalled();
    expect(mockResponse.json).not.toHaveBeenCalled();
    expect(mockResponse.setHeader).toHaveBeenCalledWith("Content-Type", "image/svg+xml");
  });

  it("should handle request show stats and generate SVG response", async () => {
    mockRequest.query.username = "FajarKim";
    mockRequest.query.show = "reviews,issues_closed";
    (getData as jest.Mock).mockResolvedValueOnce(exampleUserData);

    await readmeStats(mockRequest, mockResponse);

    expect(getData).toHaveBeenCalledWith(mockRequest.query.username);
    expect(card).toHaveBeenCalledWith(exampleUserData, expect.any(Object));
    expect(mockResponse.send).toHaveBeenCalled();
    expect(mockResponse.json).not.toHaveBeenCalled();
    expect(mockResponse.setHeader).toHaveBeenCalledWith("Content-Type", "image/svg+xml");
  });

  it("should handle invalid missing username and send error response", async () => {
    mockRequest.query.username = undefined;

    await readmeStats(mockRequest, mockResponse);

    expect(getData).not.toHaveBeenCalledWith();
    expect(card).not.toHaveBeenCalledWith();
    expect(mockResponse.send).toHaveBeenCalled();
    expect(mockResponse.json).not.toHaveBeenCalled();
  });

  it("should validate User data conforms to interface", async () => {
    mockRequest.query.username = "FajarKim";
    (getData as jest.Mock).mockResolvedValueOnce(exampleUserData);

    await readmeStats(mockRequest, mockResponse);

    const userData = mockResponse.json.mock.calls[0][0];
    expect(userData).toHaveProperty("name");
    expect(userData).toHaveProperty("login");
    expect(userData).toHaveProperty("avatarUrl");
    expect(userData.repositories.totalCount).toBeGreaterThanOrEqual(0);
  });

  it("should handle user with zero contributions", async () => {
    const zeroContributionsData = {
      ...exampleUserData,
      totalCommitContributions: 0,
      restrictedContributionsCount: 0,
      totalPullRequestReviewContributions: 0,
    };

    (getData as jest.Mock).mockResolvedValueOnce(zeroContributionsData);

    mockRequest.query.username = "FajarKim";

    await readmeStats(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith(zeroContributionsData);
  });

  it("should handle very large contribution data without errors", async () => {
    const highContributionsData = {
      ...exampleUserData,
      totalCommitContributions: 100000,
      restrictedContributionsCount: 50000,
      totalPullRequestReviewContributions: 30000,
    };

    (getData as jest.Mock).mockResolvedValueOnce(highContributionsData);

    mockRequest.query.username = "FajarKim";

    await readmeStats(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith(highContributionsData);
  });

  it("should fetch the user's join date and calculate total commits from join date until now", async () => {
    mockRequest.query.username = "FajarKim";
    (getData as jest.Mock).mockResolvedValueOnce(exampleUserData);

    const today = new Date("2023-10-26"); 
    const joinDate = new Date(exampleUserData.joinedAt);
    const totalDaysSinceJoining = Math.floor((today.getTime() - joinDate.getTime()) / (1000 * 60 * 60 * 24));

    await readmeStats(mockRequest, mockResponse);

    const responseData = mockResponse.json.mock.calls[0][0];
    expect(responseData.joinedAt).toEqual(exampleUserData.joinedAt);

    const expectedTotalCommits = exampleUserData.totalCommitContributions + totalDaysSinceJoining;
    expect(responseData.totalCommitContributionsSinceJoining).toEqual(expectedTotalCommits);
  });

  it("should handle missing join date gracefully", async () => {
    const incompleteUserData = { ...exampleUserData, joinedAt: undefined };
    (getData as jest.Mock).mockResolvedValueOnce(incompleteUserData);

    mockRequest.query.username = "FajarKim";

    await readmeStats(mockRequest, mockResponse);

    const responseData = mockResponse.json.mock.calls[0][0];
    expect(responseData.joinedAt).toBeUndefined();
    expect(responseData.totalCommitContributionsSinceJoining).toBeUndefined();
  });
});
