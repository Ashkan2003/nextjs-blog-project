import { PostCardType } from "@/types/postType";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
  });
  return { currentPost, isLoadingPost, error };
};
