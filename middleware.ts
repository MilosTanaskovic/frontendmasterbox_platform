import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher([
//   "/",
//   "/api/webhook",
//   "/questions/:id",
//   "/tags",
//   "/tags/:id",
//   "/profile/:id",
//   "/community",
//   "/jobs",
// ]);

const isProtectedRoute = createRouteMatcher(["/api/webhook", "/api/chatgpt"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
