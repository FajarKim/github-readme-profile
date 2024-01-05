// Importing necessary libraries and modules
import axios from "axios";
import getRandomToken from "../getRandomToken";

// Represents the user data obtained from the GitHub GraphQL API
export interface User {
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

// Represents the total count of repositories
export interface Repositories {
  totalCount: number;
}

// Represents the total count of followers
export interface Followers {
  totalCount: number;
}

// Represents the total count of following
export interface Following {
  totalCount: number;
}

// Represents contribution data
export interface ContributionsCollection {
  totalCommitContributions: number;
  restrictedContributionsCount: number;
  totalPullRequestReviewContributions: number;
}

// Represents the total count of opened issues
export interface OpenedIssues {
  totalCount: number;
}

// Represents the total count of closed issues
export interface ClosedIssues {
  totalCount: number;
}

// Represents the total count of pull requests
export interface PullRequests {
  totalCount: number;
}

// Represents the total count of merged pull requests
export interface MergedPullRequests {
  totalCount: number;
}

// Represents the total count of started discussions
export interface DiscussionStarted {
  totalCount: number;
}

// Represents the total count of answered discussions
export interface DiscussionAnswered {
  totalCount: number;
}

// Represents the total count of repositories contributed to
export interface RepositoriesContributedTo {
  totalCount: number;
}

async function getUserJoinYear(username: string): Promise<number> {
  const data = await axios({
    method: "post",
    url: "https://api.github.com/graphql",
    headers: {
      "User-Agent": "FajarKim/github-readme-profile",
      Authorization: getRandomToken(true),
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

async function fetchContributions(username: string, year: number): Promise<ContributionsCollection> {
  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;

  const data = await axios({
    method: "post",
    url: "https://api.github.com/graphql",
    headers: {
      "User-Agent": "FajarKim/github-readme-profile",
      Authorization: getRandomToken(true),
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
 * Fetches user data from the GitHub GraphQL API.
 *
 * @param {string} username GitHub username.
 * @returns {Promise<User>} Promise representing the user data obtained from the GitHub Graphql API.
 */
export default async function apiFetch(username: string): Promise<User> {
  const startYear = await getUserJoinYear(username);
  const endYear = new Date().getFullYear();

  let TotalCommitContributions = 0;
  let RestrictedContributionsCount = 0;
  let TotalPullRequestReviewContributions = 0;

  for (let year = startYear; year <= endYear; year++) {
    const contributions = await fetchContributions(username, year);
    TotalCommitContributions += contributions.totalCommitContributions;
    RestrictedContributionsCount += contributions.restrictedContributionsCount;
    TotalPullRequestReviewContributions += contributions.totalPullRequestReviewContributions;
  }

  const data = await axios({
    method: "post",
    url: "https://api.github.com/graphql",
    headers: {
      "User-Agent": "FajarKim/github-readme-profile",
      Authorization: getRandomToken(true),
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
