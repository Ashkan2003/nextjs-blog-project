"use client";
import useLogout from "@/react-query/auth/useLogOut";
import React from "react";

const LogOut = () => {
  const { isPending, logout } = useLogout();

  const handleLogOut = () => {
    logout();
  };

  return (
    <button
      onClick={handleLogOut}
      disabled={isPending}
      className=" rounded-xl border-2 border-blue-600  bg-blue-600 px-5 py-2 font-semibold text-white transition-all  hover:bg-indigo-600 "
    >
      خروج
    </button>
  );
};

export default LogOut;
