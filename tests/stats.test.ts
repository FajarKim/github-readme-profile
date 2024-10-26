import axios from "axios";
import { getUserJoinYear, fetchContributions, stats } from "../src/fetcher/stats";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("GitHub Stats Module", () => {
  const username = "testuser";

  beforeEach(() => {
    jest.clearAllMocks();
  });

    it("should fetch the correct join year for the user", async () => {
      const mockResponse: Array<any> = {
        data: {
          data: {
            user: {
              createdAt: "2015-06-15T00:00:00Z",
            },
          },
        },
        status: 200,
        statusText: "OK",
        headers: {},
        config: {},
      };

      mockedAxios.post.mockResolvedValueOnce(mockResponse);

      const joinYear = await getUserJoinYear(username);
      expect(joinYear).toBe(2015);
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    });

    it("should throw an error if user data is missing", async () => {
      const mockResponse: Array<any> = {
        data: {
          data: {
            user: null,
          },
        },
        status: 200,
        statusText: "OK",
        headers: {},
        config: {},
      };

      mockedAxios.post.mockResolvedValueOnce(mockResponse);

      await expect(getUserJoinYear(username)).rejects.toThrow("User data is missing.");
    });

    it("should throw an error if there are errors in the API response", async () => {
      const mockErrorResponse: Array<any> = {
        data: {
          errors: [{ message: "Some error occurred" }],
        },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config: {},
      };

      mockedAxios.post.mockResolvedValueOnce(mockErrorResponse);

      await expect(getUserJoinYear(username)).rejects.toThrow("Some error occurred");
    });

    it("should fetch contributions for the specified year", async () => {
      const mockResponse: Array<any> = {
        data: {
          data: {
            user: {
              contributionsCollection: {
                totalCommitContributions: 100,
                restrictedContributionsCount: 10,
                totalPullRequestReviewContributions: 5,
              },
            },
          },
        },
        status: 200,
        statusText: "OK",
        headers: {},
        config: {},
      };

      mockedAxios.post.mockResolvedValueOnce(mockResponse);

      const contributions = await fetchContributions(username, 2022);
      expect(contributions.totalCommitContributions).toBe(100);
      expect(contributions.restrictedContributionsCount).toBe(10);
      expect(contributions.totalPullRequestReviewContributions).toBe(5);
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    });

    it("should throw an error if there are errors in the API response", async () => {
      const mockErrorResponse: Array<any> = {
        data: {
          errors: [{ message: "Some error occurred" }],
        },
        status: 400,
        statusText: "Bad Request",
        headers: {},
        config: {},
      };

      mockedAxios.post.mockResolvedValueOnce(mockErrorResponse);

      await expect(fetchContributions(username, 2022)).rejects.toThrow("Some error occurred");
    });

    it("should fetch user stats with aggregated contributions", async () => {
      mockedAxios.post.mockImplementation((config) => {
        if (config.data.query.includes("createdAt")) {
          const mockResponse: Array<any> = {
            data: {
              data: {
                user: {
                  createdAt: "2019-01-01T00:00:00Z",
                },
              },
            },
            status: 200,
            statusText: "OK",
            headers: {},
            config: {},
          };
          return Promise.resolve(mockResponse);
        } else if (config.data.query.includes("contributionsCollection")) {
          const mockResponse: Array<any> = {
            data: {
              data: {
                user: {
                  contributionsCollection: {
                    totalCommitContributions: 50,
                    restrictedContributionsCount: 5,
                    totalPullRequestReviewContributions: 2,
                  },
                },
              },
            },
            status: 200,
            statusText: "OK",
            headers: {},
            config: {},
          };
          return Promise.resolve(mockResponse);
        } else {
          const mockResponse: Array<any> = {
            data: {
              data: {
                user: {
                  name: "Test User",
                  login: "testuser",
                  avatarUrl: "https://example.com/avatar.jpg",
                  repositories: { totalCount: 10 },
                  followers: { totalCount: 100 },
                  following: { totalCount: 50 },
                  openedIssues: { totalCount: 20 },
                  closedIssues: { totalCount: 30 },
                  pullRequests: { totalCount: 15 },
                  mergedPullRequests: { totalCount: 10 },
                  discussionStarted: { totalCount: 5 },
                  discussionAnswered: { totalCount: 3 },
                  repositoriesContributedTo: { totalCount: 7 },
                },
              },
            },
            status: 200,
            statusText: "OK",
            headers: {},
            config: {},
          };
          return Promise.resolve(mockResponse);
        }
      });

      const userStats = await stats(username);

      expect(userStats.name).toBe("Test User");
      expect(userStats.totalCommitContributions).toBe(100); // 50 + 50
      expect(userStats.restrictedContributionsCount).toBe(10); // 5 + 5
      expect(userStats.totalPullRequestReviewContributions).toBe(4); // 2 + 2
      expect(userStats.repositories.totalCount).toBe(10);
      expect(userStats.followers.totalCount).toBe(100);
      expect(userStats.following.totalCount).toBe(50);
    });
});
