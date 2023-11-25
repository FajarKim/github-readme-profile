import readmeStats, { UiConfig } from '../api/index';
import escapeHTML from 'escape-html';
import svg2img from '@fajarkim/svg2img';
import getData from '../src/getData';
import cardStyle from '../src/card';
import { themes, Themes } from '../themes/index';
import { isValidHexColor, isValidGradient, parseBoolean } from '../src/common/utils';

jest.mock('@fajarkim/svg2img');
jest.mock('../src/getData');
jest.mock('../src/card');
jest.mock('express');

describe('Test GitHub Readme Profile API', () => {
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

  it('should handle request and generate JSON response', async () => {
    mockRequest.query.username = 'FajarKim';
    mockRequest.query.format = 'json';

    await readmeStats(mockRequest, mockResponse);

    expect(getData).toHaveBeenCalledWith(mockRequest.query.username);
    expect(mockResponse.json).toHaveBeenCalledWith(getData(mockRequest.query.username));
    expect(mockResponse.send).not.toHaveBeenCalled();
    expect(mockResponse.setHeader).toHaveBeenCalledWith('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  });
});
