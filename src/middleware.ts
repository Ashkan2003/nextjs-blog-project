import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

//put the route you want to protect and show only for the loggen-in users
const isProtectedRoute = createRouteMatcher(["/blogPosts","/blogPosts/:slug+"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

