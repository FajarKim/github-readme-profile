import axios from "axios";
import getRandomToken from "../getRandomToken";

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

export interface Repositories {
  totalCount: number;
}

export interface Followers {
  totalCount: number;
}

export interface Following {
  totalCount: number;
}

export interface ContributionsCollection {
  totalCommitContributions: number;
  restrictedContributionsCount: number;
  totalPullRequestReviewContributions: number;
}

export interface OpenedIssues {
  totalCount: number;
}

export interface ClosedIssues {
  totalCount: number;
}

export interface PullRequests {
  totalCount: number;
}

export interface MergedPullRequests {
  totalCount: number;
}

export interface DiscussionStarted {
  totalCount: number;
}

export interface DiscussionAnswered {
  totalCount: number;
}

export interface RepositoriesContributedTo {
  totalCount: number;
}

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
