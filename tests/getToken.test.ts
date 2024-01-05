import getToken from "../src/getToken";
import * as core from "@actions/core";

jest.mock("dotenv");
jest.mock("@actions/core");

type MockedGetInput = jest.MockedFunction<typeof core.getInput>;

const mockedGetInput = core.getInput as MockedGetInput;


describe("getToken function", () => {
  const originalEnv = process.env;
  beforeEach(() => {
    process.env = { ...originalEnv };
  });
  afterAll(() => {
    process.env = originalEnv;
  });

  it("should return an individual token without Bearer prefix", () => {
    process.env.GH_TOKEN = "ghp_token";

    const token = getToken(false);

    expect(token).toEqual("ghp_token");
  });

  it("should return an individual token with Bearer prefix", () => {
    process.env.GH_TOKEN = "ghp_token";

    const token = getToken(true);

    expect(token).toEqual("Bearer ghp_token");
  });

  it("should return a GitHub Actions bot token without Bearer prefix", () => {
    mockedGetInput.mockReturnValue("GitHubActionsBotToken");

    const token = getToken(false);

    expect(token).not.toEqual("GitHubActionsBotToken");
  });

  it("should return a GitHub Actions bot token with Bearer prefix", () => {
    mockedGetInput.mockReturnValue("GitHubActionsBotToken");

    const token = getToken(true);

    expect(token).not.toEqual("Bearer GitHubActionsBotToken");
  });

  it("should throw an error if no tokens are available", () => {
    mockedGetInput.mockReturnValue("");

    expect(() => getToken(false)).toThrowError("Could not find github token");
  });
});
