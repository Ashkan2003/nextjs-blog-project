import { getAllBlogs } from "@/services/apiBlogs";
import { useQuery } from "@tanstack/react-query";

export const useBlogs = () => {
  const {
    isLoading: isLoadingBlogs,
    error,
    data: blogs,
  } = useQuery({
    queryFn: async () => await getAllBlogs(),
    queryKey: ["blogs"], // the queryKey is a unic key to identify the data in the cash
  });
  return { blogs, isLoadingBlogs, error };
};
