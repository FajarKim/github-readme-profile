import axios from "axios";
import getToken from "../getToken";

/**
 * Type representing the data associated with a user's repository stats.
 *
 * @typedef {Object} RepositoryData
 * @property {number} stars - The total count of stars across repositories.
 * @property {number} forks - The total count of forks across repositories.
 * @property {number} openedIssues - The total count of opened issues across repositories.
 */
type RepositoryData = {
  stars: number;
  forks: number;
  openedIssues: number;
};

/**
 * Retrieves and calculates repository statistics for a given user.
 *
 * @param {string} username - The username of the GitHub user.
 * @param {number} totalpage - The total number of pages to retrieve data from.
 * @returns {Promise<RepositoryData>} - A promise that resolves to the repository statistics.
 */
async function repositoryStats(
  username: string,
  totalpage: number
): Promise<RepositoryData> {
  let stars = 0;
  let forks = 0;
  let openedIssues = 0;

  await Promise.all(
    Array.from(
      { length: totalpage },
      async (_, i) => await getPerPageRepositoryData(username, i + 1)
    )
  ).then((data: object[]) => {
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
 * Retrieves repository data for a specific page.
 *
 * @param {string} username - The username of the GitHub user.
 * @param {number} pageno - The page number to retrieve data from.
 * @returns {Promise<RepositoryData>} - A promise that resolves to the repository data for the specified page.
 */
async function getPerPageRepositoryData(
  username: string,
  pageno: number
): Promise<RepositoryData> {
  const sanitizedUsername = encodeURIComponent(username);

  const data = await axios({
    method: "get",
    url: `https://api.github.com/users/${sanitizedUsername}/repos?page=${pageno}&per_page=100`,
    headers: {
      "User-Agent": "FajarKim/github-readme-profile",
      Authorization: getToken(true),
    },
  });

  let stars = 0;
  let forks = 0;
  let openedIssues = 0;

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

export {
  RepositoryData,
  repositoryStats,
  getPerPageRepositoryData
};
export default repositoryStats;
