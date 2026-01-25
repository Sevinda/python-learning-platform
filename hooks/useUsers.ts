import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { getUserByUsername } from "@/services/user/userService";
import { UserResponse } from "@/services/user/User";

export const useGetUserByUsername = (): UseMutationResult<
  UserResponse,
  Error,
  string
> => {
  return useMutation({
    mutationFn: (username) => getUserByUsername(username),
  });
};
