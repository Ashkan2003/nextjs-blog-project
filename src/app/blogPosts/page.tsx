import React from "react";
import Posts from "./Posts";
import { Metadata } from "next";

const BlogPostsPage = () => {
  return <Posts />;
};

export const metadata: Metadata = {
  title: "IblogProject - postList",
  description: "View all project posts",
};

export default BlogPostsPage;
