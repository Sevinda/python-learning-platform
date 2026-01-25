import axios from "axios";
import { UserResponse } from "./User";

export const getUserByUsername = async (
  username: string,
): Promise<UserResponse> => {
  const response = await axios.post<UserResponse>("/api/v1/users/by-username", {
    username,
  });
  return response.data;
};
