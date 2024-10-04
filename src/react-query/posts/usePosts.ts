import { PostCardType } from "@/types/postType";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// fetch all posts from db
export const usePosts = () => {
  const {
    isLoading: isLoadingPosts,
    error,
    data: posts,
  } = useQuery<PostCardType[]>({
    queryFn: async () =>
      await axios({ method: "get", url: "/api/postsApi" }).then(
        (res) => res.data
      ),
    queryKey: ["posts"],
  });
  return { posts, isLoadingPosts, error };
};
