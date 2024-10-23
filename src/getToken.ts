import dotenv from "dotenv";
import { getInput } from "@actions/core";

dotenv.config();

/**
 * Retrieves the GitHub token from the environment variables or GitHub Actions inputs.
 *
 * @param {boolean} bearerHeader - Flag indicating whether to return the token with 'Bearer' prefix.
 * @returns {string} - The GitHub token.
 */
function getToken(bearerHeader: boolean): string {
const getEnvirontment: any = process.env;
  let getGHEnvirontment: any = Object.keys(getEnvirontment).filter((key) =>
    key.startsWith("GH_TOKEN")
  );
  getGHEnvirontment = getGHEnvirontment.map((key: string) => getEnvirontment[key]);

  // Select a random GitHub environment variable
  let getGHToken: string =
    getGHEnvirontment[Math.floor(Math.random() * getGHEnvirontment.length)];

  // If no GitHub environment variable is found, get the token from GitHub Actions inputs
  if (!getGHToken) {
    getGHToken = getInput("github_token");

    if (!getGHToken) {
      throw new Error("Could not find github token");
    }
  }

  if (bearerHeader) {
    return `Bearer ${getGHToken}`;
  }

  return getGHToken;
}

export default getToken;
