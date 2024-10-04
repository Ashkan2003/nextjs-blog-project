import { PostCardType } from "@/types/postType";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

// fethc a single post by its slug
export const usePostById = (postSlug: string) => {
  const {
    isLoading: isLoadingPost,
    error,
    data: currentPost,
  } = useQuery<PostCardType>({
    queryFn: async () =>
      await axios({
        method: "get",
        url: `/api/singlePostApi/${postSlug}`,
      }).then((res) => res.data),
    queryKey: ["post", postSlug],
    retry: 2,
  });
  return { currentPost, isLoadingPost, error };
};
