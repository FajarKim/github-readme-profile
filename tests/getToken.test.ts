import { getToken, getToken2, getToken3 } from "../src/getToken";
import * as core from "@actions/core";

jest.mock("dotenv");
jest.mock("@actions/core");

type MockedGetInput = jest.MockedFunction<typeof core.getInput>;

const mockedGetInput = core.getInput as MockedGetInput;


describe("Test getToken function", () => {
  const originalEnv = process.env;
  beforeEach(() => {
    process.env = { ...originalEnv };
  });
  afterAll(() => {
    process.env = originalEnv;
  });

  it("should return an personal token 1 without Bearer prefix", () => {
    process.env.GH_TOKEN_1 = "ghp_token";

    const token = getToken(false);

    expect(token).toEqual("ghp_token");
  });

  it("should return an personal token 1 with Bearer prefix", () => {
    process.env.GH_TOKEN_1 = "ghp_token";

    const token = getToken(true);

    expect(token).toEqual("Bearer ghp_token");
  });

  it("should return an personal token 2 without Bearer prefix", () => {
    process.env.GH_TOKEN_2 = "ghp_token2";

    const token = getToken2(false);

    expect(token).toEqual("ghp_token2");
  });

  it("should return an personal token 2 with Bearer prefix", () => {
    process.env.GH_TOKEN_2 = "ghp_token2";

    const token = getToken2(true);

    expect(token).toEqual("Bearer ghp_token2");
  });

  it("should return an personal token 2 if no token 2 available without Bearer prefix", () => {
    process.env.GH_TOKEN_1 = "ghp_token";
//    process.env.GH_TOKEN_2 = "";

    const token = getToken2(false);

    expect(token).toEqual("ghp_token");
  });

  it("should return an personal token 2 if no token 2 available with Bearer prefix", () => {
    process.env.GH_TOKEN_1 = "ghp_token";
  //  process.env.GH_TOKEN_2 = "";

    const token = getToken2(true);

    expect(token).toEqual("Bearer ghp_token");
  });

  it("should return an personal token 3 without Bearer prefix", () => {
    process.env.GH_TOKEN_3 = "ghp_token3";

    const token = getToken3(false);

    expect(token).toEqual("ghp_token3");
  });

  it("should return an personal token 3 with Bearer prefix", () => {
    process.env.GH_TOKEN_3 = "ghp_token3";

    const token = getToken3(true);

    expect(token).toEqual("Bearer ghp_token3");
  });

  it("should return an personal token 3 if no token 3 available without Bearer prefix", () => {
    process.env.GH_TOKEN_1 = "ghp_token";
    //process.env.GH_TOKEN_3 = "";

    const token = getToken3(false);

    expect(token).toEqual("ghp_token");
  });

  it("should return an personal token 3 if no token 3 available with Bearer prefix", () => {
    process.env.GH_TOKEN_1 = "ghp_token";
//    process.env.GH_TOKEN_3 = "";

    const token = getToken3(true);

    expect(token).toEqual("Bearer ghp_token");
  });

  it("should return a GitHub Actions bot token without Bearer prefix", () => {
    mockedGetInput.mockReturnValue("GitHubActionsBotToken");

    const token = getToken(false);

    expect(token).toEqual("GitHubActionsBotToken");
  });

  it("should return a GitHub Actions bot token with Bearer prefix", () => {
    mockedGetInput.mockReturnValue("GitHubActionsBotToken");

    const token = getToken(true);

    expect(token).toEqual("Bearer GitHubActionsBotToken");
  });

  it("should throw an error if no tokens are available", () => {
    mockedGetInput.mockReturnValue("");

    expect(() => getToken(false)).toThrowError("Could not find github token");
  });
});
