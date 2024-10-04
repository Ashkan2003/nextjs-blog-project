"use client";
import PostCard from "@/app/blogPosts/PostCard";
import FullPageSpinner from "@/components/ui/FullPageSpinner";
import { usePosts } from "@/react-query/posts/usePosts";
import { PostCardType } from "@/types/postType";
import React from "react";
import toast from "react-hot-toast";


const Posts = () => {
  const { posts, isLoadingPosts, error } = usePosts();

  if (isLoadingPosts) return <FullPageSpinner />;

  if (error) {
    toast.error("لطفا اتصال اینترنتی خود را چک کنید.");
  }

  return (
    <div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11 p-5">
      {posts?.map((post: PostCardType) => (
        <PostCard postCard={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
