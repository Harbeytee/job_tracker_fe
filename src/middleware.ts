import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const publicRoutes = ["/sign-in", "/sign-up"];

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|public|favicon.ico|assets|locales|static).*)"],
};
