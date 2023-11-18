// Importing necessary libraries and modules
import axios from "axios";
import getRandomToken from "../getRandomToken";

// Represents the structure returned: Promise containing the repository data.
type RepositoryData = {
  stars: number;
  forks: number;
  openedIssues: number;
};

/**
 * Fetches repository data for the specified user.
 *
 * @param username - GitHub username.
 * @param totalpage - Total pages of repositories to fetch.
 * @returns Promise containing the repository data.
 */
export default async function repositoryFetch(
  username: string,
  totalpage: number
): Promise<RepositoryData> {
  let stars = 0;
  let forks = 0;
  let openedIssues = 0;

  // Fetch repository data for each page in parallel
  await Promise.all(
    Array.from(
      { length: totalpage },
      async (_, i) => await getPerPageReposData(username, i + 1)
    )
  ).then((data: object[]) => {
    // Accumulate data from each page
    data.forEach((repo: any) => {
      stars += repo.stars;
      forks += repo.forks;
      openedIssues += repo.openedIssues;
    });
  });

  return {
    stars,
    forks,
    openedIssues,
  };
}

/**
 * Fetches repository data for a specific page.
 *
 * @param username - GitHub username.
 * @param pageno - Page number to fetch.
 * @returns Promise containing the repository data for the specified page.
 */
async function getPerPageReposData(
  username: string,
  pageno: number
): Promise<RepositoryData> {
  const sanitizedUsername = encodeURIComponent(username);
  // Fetch data for the specified page
  const data = await axios({
    method: "get",
    url: `https://api.github.com/users/${sanitizedUsername}/repos?page=${pageno}&per_page=100`,
    headers: {
      "User-Agent": "FajarKim/github-readme-profile",
      Authorization: getRandomToken(true),
    },
  });

  let stars = 0;
  let forks = 0;
  let openedIssues = 0;

  // Accumulate data from each repository on the page
  data.data.forEach((repo: any) => {
    stars += repo.stargazers_count;
    forks += repo.forks_count;
    openedIssues += repo.open_issues;
  });

  return {
    stars,
    forks,
    openedIssues,
  };
}