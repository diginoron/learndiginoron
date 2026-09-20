import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const nonDefaultLocales = ["fa", "ar"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static assets, next internals, api, and files with extensions
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes(".") // e.g. favicon.ico, logo.png, robots.txt, sitemap.xml
  ) {
    return NextResponse.next();
  }

  // If user visits /en or /en/..., permanently 301 redirect to / or /... (canonical English URL)
  if (pathname === "/en") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url, { status: 301 });
  }

  if (pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, "");
    return NextResponse.redirect(url, { status: 301 });
  }

  // Check if pathname starts with a non-default locale: /fa or /ar
  const isNonDefaultLocale = nonDefaultLocales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (isNonDefaultLocale) {
    return NextResponse.next();
  }

  // For default English locale (unprefixed: /, /about, /services, ...),
  // rewrite internally to /en/... so that app/[locale] handles it
  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - /api routes
     * - /_next (Next.js internals)
     * - /images and static assets
     * - files with extensions (e.g. .ico, .png, .jpg, .svg, .txt, .xml)
     */
    "/((?!api|_next/static|_next/image|images|favicon.ico|icon.png|apple-icon.png|logo.png|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
