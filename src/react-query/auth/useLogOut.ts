/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

function useLogout() {
  const router = useRouter();
 
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: async () =>
      await axios({ method: "delete", url: "/api/auth/logout" }), // becuse of logoutApi that delete the data from catch we use useMutation
    onSuccess: () => {
      queryClient.removeQueries(); // this will delete the user-log-in information emiditly from the catch
      router.push("/register");
    },
  });

  return { logout, isPending };
}

export default useLogout;
