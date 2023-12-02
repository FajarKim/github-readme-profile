import getRandomToken from "../src/getRandomToken";

describe("Test Get Random Token", () => {
  it("should generate a random token without Bearer prefix by default", () => {
    const token = getRandomToken(false);

    expect(token).toBeFalsy();
  });

  it("should generate a random token with Bearer prefix when bearerHeader is true", () => {
    const token = getRandomToken(true);

    expect(token).toBeTruthy();
    expect(token.startsWith("Bearer ")).toBeTruthy();
  });
});
