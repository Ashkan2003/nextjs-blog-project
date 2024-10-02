/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createClient } from "@/utils/supabase/client";

export function useSignup() {
 
  const supabase = createClient();

  const queryClient = useQueryClient();

  const { mutate: singup, isPending } = useMutation({
    mutationFn: (data: { email: string; password: string; userName: string }) =>
      supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            userName: data.userName,
          },
        },
      }),
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { singup, isPending };
}
