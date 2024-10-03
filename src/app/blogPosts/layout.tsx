import Navbar from "@/components/NavBar";
import React from "react";

export default function BlogPostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
