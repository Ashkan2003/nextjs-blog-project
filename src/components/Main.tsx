"use client";
import { useUser } from "@/react-query/auth/useUser";
import Link from "next/link";
import React from "react";

const Main = () => {
  const { user, isLoadingUser } = useUser();
  
  if (isLoadingUser) return null;

  return (
    <section className="grid place-content-center text-white place-items-center gap-11 text-center pt-24">
      <h1 className=" font-bold text-[50px]">Blog Project</h1>
      {user ? (
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

          <div className="flex items-center gap-3">
            <Link
              className=" rounded-xl border-2 border-blue-600  bg-blue-600 px-5 py-2 font-semibold text-white transition-all  hover:bg-indigo-600 "
              href="/login"
            >
              ورود
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Main;
