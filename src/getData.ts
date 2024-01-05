import millify from "millify";
import stats from "./fetcher/stats";
import repositoryStats from "./fetcher/repositoryStats";
const base64ImageFetcher = require("node-base64-image");

/**
 * Data structure representing GitHub user information.
 *
 * @typedef {Object} GetData
 * @property {string} username - GitHub username.
 * @property {string} name - GitHub user's name.
 * @property {string|Buffer} pic - Base64-encoded image or Buffer representing the user's profile picture.
 * @property {string|number} public_repos - Formatted count of public repositories.
 * @property {string|number} followers - Formatted count of followers.
 * @property {string|number} following - Formatted count of users being followed.
 * @property {string|number} total_stars - Formatted count of total stars received on repositories.
 * @property {string|number} total_forks - Formatted count of total forks received on repositories.
 * @property {string|number} total_issues - Formatted count of total issues (both open and closed).
 * @property {string|number} total_closed_issues - Formatted count of closed issues.
 * @property {string|number} total_prs - Formatted count of total pull requests.
 * @property {string|number} total_prs_merged - Formatted count of total merged pull requests.
 * @property {string|number} total_commits - Formatted count of total commits.
 * @property {string|number} total_review - Formatted count of pull request reviews.
 * @property {string|number} total_discussion_answered - Formatted count of discussions answered.
 * @property {string|number} total_discussion_started - Formatted count of discussions started.
 * @property {string|number} total_contributed_to - Formatted count of repositories contributed to.
 */
type GetData = {
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

/**
 * Fetches and formats GitHub user data based on the provided username.
 *
 * @param {string} username - GitHub username.
 * @returns {Promise<GetData>} - A promise that resolves with formatted GitHub user data.
 */
async function getData(username: string): Promise<GetData> {
  const user = await stats(username);
  const totalRepoPages = Math.ceil(user.repositories.totalCount / 100);
  const userRepositories = await repositoryStats(username, totalRepoPages);

  if (!user.name) user.name = user.login;

  const output = {
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
      user.restrictedContributionsCount + user.totalCommitContributions
    ),
    total_review: millify(user.totalPullRequestReviewContributions),
    total_discussion_answered: millify(user.discussionAnswered.totalCount),
    total_discussion_started: millify(user.discussionStarted.totalCount),
    total_contributed_to: millify(user.repositoriesContributedTo.totalCount),
  };

  return output;
}

export { GetData, getData };
export default getData;
