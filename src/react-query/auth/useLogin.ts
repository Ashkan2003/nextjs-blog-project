import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoginDTOType } from "@/types/authTypes";
import { createClient } from "@/utils/supabase/client";

export function useLogin() {
  const supabase = createClient();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: (data: LoginDTOType) =>
      supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      }),
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { login, isPending };
}
