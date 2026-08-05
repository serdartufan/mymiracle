import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Canonicaliseer naar https://mymiracle.nl:
//  - www.mymiracle.nl  -> mymiracle.nl  (voorkomt dubbele indexering; canonical is non-www)
//  - http              -> https         (protocol uit Cloudflare's CF-Visitor-header)
// Alle 4 URL-varianten leiden zo naar één canonieke versie (301).
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? '';
  const isWww = host.startsWith('www.');

  // Cloudflare stuurt CF-Visitor: {"scheme":"https"} of {"scheme":"http"} naar de origin.
  let scheme = '';
  try {
    scheme = JSON.parse(request.headers.get('cf-visitor') ?? '{}').scheme ?? '';
  } catch {
    scheme = '';
  }
  const isHttp = scheme === 'http';

  if (isWww || isHttp) {
    const canonicalHost = isWww ? host.slice(4) : host;
    const { pathname, search } = request.nextUrl;
    return NextResponse.redirect(`https://${canonicalHost}${pathname}${search}`, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Draai op alle routes behalve Next-interne assets.
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
