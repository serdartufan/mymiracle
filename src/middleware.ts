import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Canonicaliseer host: www.mymiracle.nl -> mymiracle.nl (301, https afgedwongen).
// Voorkomt dubbele indexering; canonical tags wijzen al naar non-www.
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? '';

  if (host.startsWith('www.')) {
    const canonicalHost = host.slice(4);
    const { pathname, search } = request.nextUrl;
    return NextResponse.redirect(`https://${canonicalHost}${pathname}${search}`, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Draai op alle routes behalve Next-interne assets.
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
