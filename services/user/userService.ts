import axios from "axios";
import { UserResponse } from "./User";

export const getUserByUsername = async (
  username: string,
): Promise<UserResponse> => {
  const response = await axios.post<UserResponse>(
    process.env.NEXT_PUBLIC_BASE_URL_DEV + "/api/v1/users/by-username",
    { username },
  );
  return response.data;
};
