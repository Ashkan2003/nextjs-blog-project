"use client";
import { createClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const supabase = createClient();

  const { isLoading: isLoadingUser, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: async () => await supabase.auth.getUser(),
  });
  return {
    isLoadingUser,
    user,
    // isAuthenticated: user?.role === "authenticated",
  };
}
