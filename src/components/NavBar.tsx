import Link from "next/link";

import { createClient } from "@/utils/supabase/server";
import React from "react";
import { GoHomeFill } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import LogOut from "./LogOut";

const Navbar = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="w-full text-white bg-indigo-900">
      <div className="container p-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <GoHomeFill fontSize={30} />
        </Link>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <LogOut />
              <FaUserCircle fontSize={30} />
              <span>{user.user_metadata.userName}</span>
            </>
          ) : (
            <>
              <Link
                href="/register"
                className=" rounded-xl border-2 border-blue-600  bg-blue-600 px-5 py-2 font-semibold text-white transition-all  hover:bg-indigo-600 "
              >
                ثبت نام
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
