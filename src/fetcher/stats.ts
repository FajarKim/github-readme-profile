import axios from "axios";
import getToken from "../getToken";

/**
 * Represents a user's information and statistics.
 *
 * @interface User
 * @property {string} name - The name of the user.
 * @property {string} login - The login username of the user.
 * @property {string} avatarUrl - The URL of the user's avatar.
 * @property {Repositories} repositories - Information about user repositories.
 * @property {Followers} followers - Information about user followers.
 * @property {Following} following - Information about users being followed by the user.
 * @property {OpenedIssues} openedIssues - Information about opened issues by the user.
 * @property {ClosedIssues} closedIssues - Information about closed issues by the user.
 * @property {PullRequests} pullRequests - Information about user pull requests.
 * @property {MergedPullRequests} mergedPullRequests - Information about merged pull requests by the user.
 * @property {DiscussionStarted} discussionStarted - Information about discussions started by the user.
 * @property {DiscussionAnswered} discussionAnswered - Information about discussions answered by the user.
 * @property {RepositoriesContributedTo} repositoriesContributedTo - Information about repositories contributed to by the user.
 * @property {number} totalCommitContributions - The total count of commit contributions by the user.
 * @property {number} restrictedContributionsCount - The count of restricted contributions by the user.
 * @property {number} totalPullRequestReviewContributions - The total count of pull request review contributions by the user.
 */
interface User {
  name: string;
  login: string;
  avatarUrl: string;
  repositories: Repositories;
  followers: Followers;
  following: Following;
  openedIssues: OpenedIssues;
  closedIssues: ClosedIssues;
  pullRequests: PullRequests;
  mergedPullRequests: MergedPullRequests;
  discussionStarted: DiscussionStarted;
  discussionAnswered: DiscussionAnswered;
  repositoriesContributedTo: RepositoriesContributedTo;
  totalCommitContributions: number;
  restrictedContributionsCount: number;
  totalPullRequestReviewContributions: number;
}

/**
 * Represents information about user repositories.
 *
 * @interface Repositories
 * @property {number} totalCount - The total count of repositories.
 */
interface Repositories {
  totalCount: number;
}

/**
 * Represents information about user followers.
 *
 * @interface Followers
 * @property {number} totalCount - The total count of followers.
 */
interface Followers {
  totalCount: number;
}

/**
 * Represents information about user following.
 *
 * @interface Following
 * @property {number} totalCount - The total count of following.
 */
interface Following {
  totalCount: number;
}

/**
 * Represents contributions data collected over a specific time period.
 *
 * @interface ContributionsCollection
 * @property {number} totalCommitContributions - The total count of commit contributions.
 * @property {number} restrictedContributionsCount - The count of restricted contributions.
 * @property {number} totalPullRequestReviewContributions - The total count of pull request review contributions.
 */
interface ContributionsCollection {
  totalCommitContributions: number;
  restrictedContributionsCount: number;
  totalPullRequestReviewContributions: number;
}

/**
 * Represents information about user opened issues.
 *
 * @interface OpenedIssues
 * @property {number} totalCount - The total count of opened issues.
 */
interface OpenedIssues {
  totalCount: number;
}

/**
 * Represents information about user closed issues.
 *
 * @interface ClosedIssues
 * @property {number} totalCount - The total count of closed issues.
 */
interface ClosedIssues {
  totalCount: number;
}

/**
 * Represents information about user pull requests.
 *
 * @interface PullRequests
 * @property {number} totalCount - The total count of pull requests.
 */
interface PullRequests {
  totalCount: number;
}

/**
 * Represents information about user merged pull requests.
 *
 * @interface MergedPullRequests
 * @property {number} totalCount - The total count of merged pull requests.
 */
interface MergedPullRequests {
  totalCount: number;
}

/**
 * Represents information about user discussion started.
 *
 * @interface DiscussionStarted
 * @property {number} totalCount - The total count of discussion started.
 */
interface DiscussionStarted {
  totalCount: number;
}

/**
 * Represents information about user discussion answered.
 *
 * @interface DiscussionAnswered
 * @property {number} totalCount - The total count of discussion answered.
 */
interface DiscussionAnswered {
  totalCount: number;
}

/**
 * Represents information about user repositories contributed to.
 *
 * @interface RepositoriesContributedTo
 * @property {number} totalCount - The total count of repositories contributed to.
 */
interface RepositoriesContributedTo {
  totalCount: number;
}

/**
 * Fetches the user's join year based on the provided username.
 *
 * @param {string} username - The GitHub username of the user.
 * @returns {Promise<number>} - A promise that resolves with the user's join year.
 */
async function getUserJoinYear(username: string): Promise<number> {
  const data = await axios({
    method: "post",
    url: "https://api.github.com/graphql",
    headers: {
      "User-Agent": "FajarKim/github-readme-profile",
      Authorization: getToken(true),
    },
    data: {
      query: `query userInfo($username: String!) {
        user(login: $username) {
          createdAt
        }
      }`,
      variables: {
        username,
      },
    },
  });

  if (data.data.errors?.length > 0) {
    throw new Error(data.data.errors[0].message);
  }

  const user = data.data.data.user;
  if (!user || !user.createdAt) {
    throw new Error("User data is missing.");
  }

  const joinDate = new Date(user.createdAt);
  return joinDate.getFullYear();
}

/**
 * Fetches the contributions data for the specified year.
 *
 * @param {string} username - The GitHub username of the user.
 * @param {number} year - The year for which contributions data is fetched.
 * @returns {Promise<ContributionsCollection>} - A promise that resolves with contributions data.
 */
async function fetchContributions(username: string, year: number): Promise<ContributionsCollection> {
  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;

  const data = await axios({
    method: "post",
    url: "https://api.github.com/graphql",
    headers: {
      "User-Agent": "FajarKim/github-readme-profile",
      Authorization: getToken(true),
    },
    data: {
      query: `query userInfo($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            totalCommitContributions
            restrictedContributionsCount
            totalPullRequestReviewContributions
          }
        }
      }`,
      variables: {
        username,
        from,
        to,
      },
    },
  });

  if (data.data.errors?.length > 0) {
    throw new Error(data.data.errors[0].message);
  }

  const contributions = data.data.data.user.contributionsCollection;
  return {
    totalCommitContributions: contributions.totalCommitContributions,
    restrictedContributionsCount: contributions.restrictedContributionsCount,
    totalPullRequestReviewContributions: contributions.totalPullRequestReviewContributions,
  };
}

/**
 * Fetches various statistics and information about the user.
 *
 * @param {string} username - The GitHub username of the user.
 * @returns {Promise<User>} - A promise that resolves with the user's information and statistics.
 */
async function stats(username: string): Promise<User> {
  const startYear = await getUserJoinYear(username);
  const endYear = new Date().getFullYear();

  const contributionPromises = [];
  for (let year = startYear; year <= endYear; year++) {
    contributionPromises.push(fetchContributions(username, year));
  }

  const contributions = await Promise.all(contributionPromises);

  const TotalCommitContributions = contributions.reduce(
    (total, contribution) => total + contribution.totalCommitContributions,
    0
  );
  const RestrictedContributionsCount = contributions.reduce(
    (total, contribution) => total + contribution.restrictedContributionsCount,
    0
  );
  const TotalPullRequestReviewContributions = contributions.reduce(
    (total, contribution) => total + contribution.totalPullRequestReviewContributions,
    0
  );

  const data = await axios({
    method: "post",
    url: "https://api.github.com/graphql",
    headers: {
      "User-Agent": "FajarKim/github-readme-profile",
      Authorization: getToken(true),
    },
    data: {
      query: `query userInfo($username: String!) {
        user(login: $username) {
          name
          login
          avatarUrl
          repositories(ownerAffiliations: OWNER, privacy: PUBLIC) {
            totalCount
          }
          followers {
            totalCount
          }
          following {
            totalCount
          }
          openedIssues: issues(states: OPEN) {
            totalCount
          }
          closedIssues: issues(states: CLOSED) {
            totalCount
          }
          pullRequests(first: 1) {
            totalCount
          }
          mergedPullRequests: pullRequests(states: MERGED) {
            totalCount
          }
          discussionStarted: repositoryDiscussions {
            totalCount
          }
          discussionAnswered: repositoryDiscussionComments(onlyAnswers: true) {
            totalCount
          }
          repositoriesContributedTo(first: 1, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
            totalCount
          }
        }
      }`,
      variables: {
        username,
      },
    },
  });

  if (data.data.errors?.length > 0)
    throw new Error(data.data.errors[0].message);

  const user = data.data.data.user;

  return {
    name: user.name,
    login: user.login,
    avatarUrl: user.avatarUrl,
    repositories: user.repositories,
    followers: user.followers,
    following: user.following,
    openedIssues: user.openedIssues,
    closedIssues: user.closedIssues,
    pullRequests: user.pullRequests,
    mergedPullRequests: user.mergedPullRequests,
    discussionStarted: user.discussionStarted,
    discussionAnswered: user.discussionAnswered,
    repositoriesContributedTo: user.repositoriesContributedTo,
    totalCommitContributions: TotalCommitContributions,
    restrictedContributionsCount: RestrictedContributionsCount,
    totalPullRequestReviewContributions: TotalPullRequestReviewContributions,
  };
}

export {
  User,
  Repositories,
  Followers,
  Following,
  ContributionsCollection,
  OpenedIssues,
  ClosedIssues,
  PullRequests,
  MergedPullRequests,
  DiscussionStarted,
  DiscussionAnswered,
  RepositoriesContributedTo,
  getUserJoinYear,
  fetchContributions,
  stats
};
export default stats;
