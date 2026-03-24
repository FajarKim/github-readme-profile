// Configuration for Vercel Edge Middleware (same as original)
export const config = {
  // Matcher: all paths except those starting with '/api', '/themes', and '/i18n'
  matcher: ['/((?!api/|themes/|i18n/).*)'],
};

export default async function middleware(request: Request): Promise<Response | void> {
  const url = new URL(request.url);
  const { pathname, search } = url;

  // Excludes paths that should be taken from the API project (not rewritten)
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/themes/') ||
    pathname.startsWith('/i18n/')
  ) {
    return; // let the request proceed to the serverless function
  }

  // Build the target generator URL while preserving the path and query
  const generatorUrl = new URL(pathname + search, 'https://gh-readme-profile-generator.vercel.app');

  // Prepare headers to forward
  const headers = new Headers();
  headers.set('User-Agent', request.headers.get('User-Agent') || '');
  headers.set('Accept', request.headers.get('Accept') || '*/*');
  // Do not forward the 'host' header to avoid interference

  try {
    const response = await fetch(generatorUrl, {
      method: request.method,
      headers: headers,
    });

    // Copy headers from the generator response, except for some unnecessary ones
    const responseHeaders = new Headers(response.headers);
    // Remove headers related to connection or original server if needed
    responseHeaders.delete('content-encoding');
    responseHeaders.delete('transfer-encoding');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    // Handle errors by returning a 500 response or fallback
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response('Proxy error: ' + errorMessage, { status: 500 });
  }
}
