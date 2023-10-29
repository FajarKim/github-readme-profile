import millify from "millify";
import apiFetch from "./fetcher/apiFetch";
import repositoryFetch from "./fetcher/repositoryFetch";
const base64ImageFetcher = require("node-base64-image");

export type GetData = {
  username: string;
  name: string;
  pic: string | Buffer;
  public_repos: string | number;
  followers: string | number;
  following: string | number;
  total_stars: string | number;
  total_forks: string | number;
  total_issues: string | number;
  total_closed_issues: string | number;
  total_prs: string | number;
  total_prs_merged: string | number;
  total_commits: string | number;
  total_review: string | number;
  total_discussion_answered: string | number;
  total_discussion_started: string | number;
  total_contributed_to: string | number;
};

async function getData(username: string): Promise<GetData> {
  let user = await apiFetch(username);
  let totalRepoPages = Math.ceil(user.repositories.totalCount / 100);
  let userRepositories = await repositoryFetch(username, totalRepoPages);

  if (!user.name) user.name = user.login;

  let output = {
    username: user.login,
    name: user.name,
    pic: await base64ImageFetcher.encode(`${user.avatarUrl}&s=200`, {
      string: true,
    }),
    public_repos: millify(user.repositories.totalCount),
    followers: millify(user.followers.totalCount),
    following: millify(user.following.totalCount),
    total_stars: millify(userRepositories.stars),
    total_forks: millify(userRepositories.forks),
    total_issues: millify(
      user.openedIssues.totalCount + user.closedIssues.totalCount
    ),
    total_closed_issues: millify(user.closedIssues.totalCount),
    total_prs: millify(user.pullRequests.totalCount),
    total_prs_merged: millify(user.mergedPullRequests.totalCount),
    total_commits: millify(
      user.contributionsCollection.restrictedContributionsCount +
        user.contributionsCollection.totalCommitContributions
    ),
    total_review: millify(user.contributionsCollection.totalPullRequestReviewContributions),
    total_discussion_answered: millify(user.discussionStarted.totalCount),
    total_discussion_started: millify(user.discussionStarted.totalCount),
    total_contributed_to: millify(user.repositoriesContributedTo.totalCount),
  };

  return output;
}

export default getData;
