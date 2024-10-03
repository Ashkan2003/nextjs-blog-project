"use client";
import Link from "next/link";

import React from "react";
import { GoHomeFill } from "react-icons/go";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
const Navbar = () => {
  // this useUser is a hook provided by clerk for client components to get the user authState
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <header className="w-full text-white bg-indigo-900">
      <div className="container p-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <GoHomeFill fontSize={30} />
        </Link>

        <div className="flex items-center gap-3">
          {!isLoaded ? (
            <div role="status" className="max-w-sm animate-pulse">
              <div className="h-7 bg-gray-200 rounded-md dark:bg-gray-700 w-24"></div>
              <span className="sr-only">Loading...</span>
            </div>
          ) : isSignedIn ? (
            <UserButton />
          ) : (
            <button className=" rounded-md border-2 border-blue-600  bg-blue-600 px-5 py-2 font-semibold text-white transition-all  hover:bg-indigo-600 ">
              <SignInButton mode="modal">
                <p className="cursor-pointer">ورود/ثبت نام</p>
              </SignInButton>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
