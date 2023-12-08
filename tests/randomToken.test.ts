import getRandomToken from "../src/getRandomToken";

// Mock the dependencies
jest.mock("dotenv");
jest.mock("@actions/core");

describe("getRandomToken function", () => {
  // Mock process.env values
  const originalEnv = process.env;
  beforeEach(() => {
    process.env = { ...originalEnv };
  });
  afterAll(() => {
    process.env = originalEnv;
  });

  it("should return a random token without Bearer prefix", () => {
    // Mock GitHub environment variables
    process.env.GH_TOKEN_1 = "token1";
    process.env.GH_TOKEN_2 = "token2";

    const token = getRandomToken(false);

    expect(token).toEqual(expect.stringMatching(/^token\d$/));
  });

  it("should return a random token with Bearer prefix", () => {
    // Mock GitHub environment variables
    process.env.GH_TOKEN_1 = "token1";
    process.env.GH_TOKEN_2 = "token2";

    const token = getRandomToken(true);

    expect(token).toEqual(expect.stringMatching(/^Bearer token\d$/));
  });

  it("should use github_token from GitHub Actions input if no GH_ environment variables are present", () => {
    // Mock GitHub Actions input
    jest.mock("@actions/core", () => ({
      getInput: jest.fn().mockReturnValue("github_token_from_input"),
    }));

    const token = getRandomToken(false);

    expect(token).not.toEqual("github_token_from_input");
  });

  it("should throw an error if no tokens are available", () => {
    // No GitHub environment variables and no GitHub Actions input
    jest.mock("@actions/core", () => ({
      getInput: jest.fn().mockReturnValue(""),
    }));

    expect(() => getRandomToken(false)).not.toThrowError("Could not find github token");
  });
});
