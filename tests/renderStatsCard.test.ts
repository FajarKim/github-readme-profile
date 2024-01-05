import readmeStats from "../api/index";
import getData from "../src/getData";
import type { User } from "../src/fetcher/stats";
import card from "../src/card";
import themes from "../themes/index";
import locales from "../src/translations";

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

function valueReturn(value: string): string {
  return `${value}`;
}

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
    expect(mockResponse.setHeader).toHaveBeenCalledWith("Cache-Control", "s-maxage=3600, stale-while-revalidate");
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
    expect(mockResponse.setHeader).toHaveBeenCalledWith("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  });
});
