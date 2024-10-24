import getToken from "../src/getToken";
import * as core from "@actions/core";

jest.mock("dotenv");
jest.mock("@actions/core", () => ({
  getInput: jest.fn(),
  setSecret: jest.fn() // Mock setSecret to avoid masking
}));

type MockedGetInput = jest.MockedFunction<typeof core.getInput>;

const mockedGetInput = core.getInput as MockedGetInput;

describe("Test getToken function", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
    mockedGetInput.mockClear();
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it("should return a personal token from GH_TOKEN without Bearer prefix", () => {
    process.env.GH_TOKEN = "ghp_token";
    mockedGetInput.mockReturnValue(""); // Simulate no input from core.getInput

    const token = getToken(false);

    // Token should not be masked
    expect(token).toEqual("ghp_token");
  });

  it("should return a personal token from GH_TOKEN with Bearer prefix", () => {
    process.env.GH_TOKEN = "ghp_token";
    mockedGetInput.mockReturnValue(""); // Simulate no input from core.getInput

    const token = getToken(true);

    // Token should not be masked
    expect(token).toEqual("Bearer ghp_token");
  });

  it("should return a GitHub Actions bot token from getInput without Bearer prefix when GH_TOKEN is absent", () => {
    delete process.env.GH_TOKEN; // Ensure GH_TOKEN is undefined
    mockedGetInput.mockReturnValue("GitHubActionsBotToken");

    const token = getToken(false);

    // Check both the real token and the masked value
    expect(token === "GitHubActionsBotToken" || token === "***").toBeTruthy();
  });

  it("should return a GitHub Actions bot token from getInput with Bearer prefix when GH_TOKEN is absent", () => {
    delete process.env.GH_TOKEN; // Ensure GH_TOKEN is undefined
    mockedGetInput.mockReturnValue("GitHubActionsBotToken");

    const token = getToken(true);

    // Check both the real token and the masked value
    expect(token === "Bearer GitHubActionsBotToken" || token === "Bearer ***").toBeTruthy();
  });

  it("should prioritize GH_TOKEN over getInput", () => {
    process.env.GH_TOKEN = "ghp_token"; // GH_TOKEN is present
    mockedGetInput.mockReturnValue("GitHubActionsBotToken");

    const token = getToken(false);

    // GH_TOKEN should take priority
    expect(token).toEqual("ghp_token");
  });

  it("should throw an error if neither GH_TOKEN nor getInput tokens are available", () => {
    delete process.env.GH_TOKEN; // Ensure GH_TOKEN is undefined
    mockedGetInput.mockReturnValue(""); // No token from core.getInput

    expect(() => getToken(false)).toThrowError("Could not find github token");
  });
});
