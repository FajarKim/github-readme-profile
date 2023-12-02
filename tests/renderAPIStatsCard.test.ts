import readmeStats from "../api/index";
import getData from "../src/getData";
import cardStyle from "../src/card";
import { themes } from "../themes/index";
import { locales } from "../src/translations";

jest.mock("../src/getData");
jest.mock("../src/card");
jest.mock("express");

function valueReturn(value: string): string {
  return `${value}`;
}

describe("Test GitHub Readme Profile API", () => {
  let mockRequest: any;
  let mockResponse: any;

  beforeEach(() => {
    mockRequest = {
      query: {},
    };

    mockResponse = {
      json: jest.fn(),
      send: jest.fn(),
      setHeader: jest.fn(),
      status: jest.fn(),
    };

    // Reset mock implementation for each module
    jest.clearAllMocks();
  });

  it("should handle request and generate JSON response", async () => {
    mockRequest.query.username = "FajarKim";
    mockRequest.query.format = "json";

    await readmeStats(mockRequest, mockResponse);

    expect(getData).toHaveBeenCalledWith(mockRequest.query.username);
    expect(mockResponse.json).toHaveBeenCalledWith(await getData(mockRequest.query.username));
    expect(mockResponse.send).not.toHaveBeenCalled();
    expect(mockResponse.setHeader).toHaveBeenCalledWith("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  });

  it("should handle request and generate SVG response", async () => {
    mockRequest.query.username = "FajarKim";
    mockRequest.query.format = "svg";

    await readmeStats(mockRequest, mockResponse);

    expect(getData).toHaveBeenCalledWith(mockRequest.query.username);
    expect(cardStyle).toHaveBeenCalledWith(await getData(mockRequest.query.username), expect.any(Object));
    expect(mockResponse.send).toHaveBeenCalled();
    expect(mockResponse.json).not.toHaveBeenCalled();
    expect(mockResponse.setHeader).toHaveBeenCalledWith("Content-Type", "image/svg+xml");
  });

  it.each(Object.keys(themes))("should handle request theme '%s' and generate SVG response", async (theme) => {
    mockRequest.query.username = "FajarKim";
    mockRequest.query.theme = theme;

    await readmeStats(mockRequest, mockResponse);

    expect(getData).toHaveBeenCalledWith(mockRequest.query.username);
    expect(cardStyle).toHaveBeenCalledWith(await getData(mockRequest.query.username), expect.any(Object));
    expect(mockResponse.send).toHaveBeenCalled();
    expect(mockResponse.json).not.toHaveBeenCalled();
    expect(mockResponse.setHeader).toHaveBeenCalledWith("Content-Type", "image/svg+xml");
  });

  it.each(Object.keys(locales))("should handle request locale '%s' and generate SVG response", async (locale) => {
    mockRequest.query.username = "FajarKim";
    mockRequest.query.locale = locale;

    await readmeStats(mockRequest, mockResponse);

    expect(getData).toHaveBeenCalledWith(mockRequest.query.username);
    expect(cardStyle).toHaveBeenCalledWith(await getData(mockRequest.query.username), expect.any(Object));
    expect(mockResponse.send).toHaveBeenCalled();
    expect(mockResponse.json).not.toHaveBeenCalled();
    expect(mockResponse.setHeader).toHaveBeenCalledWith("Content-Type", "image/svg+xml");
  });

  it("should handle request hide stats and generate SVG response", async () => {
    mockRequest.query.username = "FajarKim";
    mockRequest.query.hide = "repos,forks,prs_merged";

    await readmeStats(mockRequest, mockResponse);

    expect(getData).toHaveBeenCalledWith(mockRequest.query.username);
    expect(cardStyle).toHaveBeenCalledWith(await getData(mockRequest.query.username), expect.any(Object));
    expect(mockResponse.send).toHaveBeenCalled();
    expect(mockResponse.json).not.toHaveBeenCalled();
    expect(mockResponse.setHeader).toHaveBeenCalledWith("Content-Type", "image/svg+xml");
  });

  it("should handle request show stats and generate SVG response", async () => {
    mockRequest.query.username = "FajarKim";
    mockRequest.query.show = "reviews,issues_closed";

    await readmeStats(mockRequest, mockResponse);

    expect(getData).toHaveBeenCalledWith(mockRequest.query.username);
    expect(cardStyle).toHaveBeenCalledWith(await getData(mockRequest.query.username), expect.any(Object));
    expect(mockResponse.send).toHaveBeenCalled();
    expect(mockResponse.json).not.toHaveBeenCalled();
    expect(mockResponse.setHeader).toHaveBeenCalledWith("Content-Type", "image/svg+xml");
  });

  it("should handle invalid username and send error response", async () => {
    await readmeStats(mockRequest, mockResponse);

    expect(getData).not.toHaveBeenCalledWith();
    expect(cardStyle).not.toHaveBeenCalledWith();
    expect(mockResponse.send).toHaveBeenCalled();
    expect(mockResponse.json).not.toHaveBeenCalled();
    expect(mockResponse.setHeader).toHaveBeenCalledWith("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  });
});
