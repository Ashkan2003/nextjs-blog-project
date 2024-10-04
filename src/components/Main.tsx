"use client";
import Link from "next/link";
import React from "react";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import FullPageSpinner from "./ui/FullPageSpinner";
const Main = () => {
  // this useUser is a hook provided by clerk for client components to get the user authState
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <FullPageSpinner />;
  }

  return (
    <section className="grid place-content-center text-white place-items-center gap-11 text-center pt-24">
      <h1 className=" font-bold text-[50px]">Blog Project</h1>
      {isSignedIn ? (
        <div className="flex items-center gap-3">
          <Link
            className=" rounded-xl border-2 border-blue-600  bg-blue-600 px-5 py-2 font-semibold text-white transition-all  hover:bg-indigo-600 "
            href="/blogPosts"
          >
            BlogPostsPage
          </Link>
        </div>
      ) : (
        <>
          <p className="max-w-3xl text-white">
            لطفا برای دیدن صفحه بلاگ ها وارد حساب کاربری خود شوید
          </p>
        </>
      )}
    </section>
  );
};

export default Main;
