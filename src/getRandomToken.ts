// Importing necessary module
import dotenv from "dotenv";

// Loads environment variables from a .env file if present
dotenv.config();

/**
 * Generates a random token based on the GH_ environment variables.
 *
 * @param {boolean} bearerHeader Indicates whether to include "Bearer " prefix for authorization header.
 * @returns {string} A random token.
 */
function getRandomToken(bearerHeader: boolean): string {
  const getEnvs: any = process.env;
  let getGhEnv: any = Object.keys(getEnvs).filter((key) =>
    key.startsWith("GH_")
  );
  getGhEnv = getGhEnv.map((key: string) => getEnvs[key]);
  const getRandomEnv: string =
    getGhEnv[Math.floor(Math.random() * getGhEnv.length)];

  if (bearerHeader) {
    return `Bearer ${getRandomEnv}`;
  }
  return getRandomEnv;
}

export default getRandomToken;
