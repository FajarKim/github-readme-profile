import { isValidHexColor, isValidGradient, parseBoolean } from "../src/common/utils";

describe("isValidHexColor function", () => {
  it("should return true for valid hexadecimal colors", () => {
    expect(isValidHexColor("ff0000")).toBe(true);
    expect(isValidHexColor("00ff00")).toBe(true);
    expect(isValidHexColor("0000ff")).toBe(true);
    expect(isValidHexColor("123abc")).toBe(true);
    expect(isValidHexColor("abcdef12")).toBe(true);
  });

  it("should return false for invalid hexadecimal colors", () => {
    expect(isValidHexColor("12345")).toBe(false);
    expect(isValidHexColor("abcdefg")).toBe(false);
    expect(isValidHexColor("blue")).toBe(false);
  });
});

describe("isValidGradient function", () => {
  it("should return true for valid gradients", () => {
    expect(isValidGradient("45,ff0000,00ff00")).toBe(true);
  });

  it("should return false for invalid gradients", () => {
    expect(isValidGradient("45,invalid,green")).toBe(false);
  });
});

describe("parseBoolean function", () => {
  it("should parse boolean values correctly", () => {
    expect(parseBoolean(true)).toBe(true);
    expect(parseBoolean(false)).toBe(false);
    expect(parseBoolean("true")).toBe(true);
    expect(parseBoolean("false")).toBe(false);
  });

  it("should return undefined for invalid input", () => {
    expect(parseBoolean("invalid")).toBe(undefined);
    expect(parseBoolean("123")).toBe(undefined);
  });
});
