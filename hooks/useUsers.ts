import {
  useMutation,
  useQuery,
  UseMutationResult,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  createUser,
  getUserById,
  getUserByUsername,
  UserResponse,
} from "@/lib/api/userApi";

export const useGetUserById = (
  id: string,
): UseQueryResult<UserResponse, Error> => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  });
};

export const useCreateUser = (): UseMutationResult<
  UserResponse,
  Error,
  string
> => {
  return useMutation({
    mutationFn: (username) => createUser(username),
  });
};

export const useGetUserByUsername = (): UseMutationResult<
  UserResponse,
  Error,
  string
> => {
  return useMutation({
    mutationFn: (username) => getUserByUsername(username),
  });
};
