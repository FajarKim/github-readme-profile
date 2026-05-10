import { Handler, HandlerEvent, HandlerResponse } from "@netlify/functions";
import readmeStats from "../../api/index";

export const handler: Handler = async (
  event: HandlerEvent
): Promise<HandlerResponse> => {
  // Create a mock Express request object
  const mockReq = {
    query: event.queryStringParameters || {},
    headers: event.headers || {},
  };

  // Create a mock Express response object
  let responseBody = "";
  let statusCode = 200;
  const responseHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const mockRes = {
    status: (code: number) => {
      statusCode = code;
      return mockRes;
    },
    send: (data: any) => {
      responseBody = typeof data === "string" ? data : JSON.stringify(data);
      return mockRes;
    },
    json: (data: any) => {
      responseBody = JSON.stringify(data);
      responseHeaders["Content-Type"] = "application/json";
      return mockRes;
    },
    setHeader: (key: string, value: string) => {
      responseHeaders[key] = value;
      return mockRes;
    },
  };

  // Call the readmeStats function
  await readmeStats(mockReq, mockRes);

  return {
    statusCode,
    headers: responseHeaders,
    body: responseBody,
  };
};

