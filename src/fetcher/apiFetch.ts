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
  contributionsCollection: ContributionsCollection;
  openedIssues: OpenedIssues;
  closedIssues: ClosedIssues;
  pullRequests: PullRequests;
  mergedPullRequests: MergedPullRequests;
  discussionStarted: DiscussionStarted;
  discussionAnswered: DiscussionAnswered;
  repositoriesContributedTo: RepositoriesContributedTo;
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

/**
 * Fetches user data from the GitHub GraphQL API.
 *
 * @param {string} username GitHub username.
 * @returns {Promise<User>} Promise representing the user data obtained from the GitHub Graphql API.
 */
export default async function apiFetch(username: string): Promise<User> {
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
          contributionsCollection {
            totalCommitContributions
            restrictedContributionsCount
            totalPullRequestReviewContributions
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

  return data.data.data.user;
}
