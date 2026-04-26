import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define protected routes
const isProtectedRoute = createRouteMatcher(["/password(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // Only protect selected routes
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    /*
      This matcher ignores:
      - _next (Next.js internals)
      - static files (images, css, js, etc.)
    */
    "/((?!_next|.*\\..*).*)",

    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
