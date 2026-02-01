import axios from "axios";
import { ApiResponse } from "./api.types";

export type UserData = {
  id: string;
  username: string;
  createdAt: string;
  updatedAt: string;
};

export type UserResponse = ApiResponse<UserData>;
export type UsersResponse = ApiResponse<UserData[]>;

export const createUser = async (username: string): Promise<UserResponse> => {
  const response = await axios.post<UserResponse>("/api/v1/users", {
    username,
  });
  return response.data;
};

export const getAllUsers = async (): Promise<UsersResponse> => {
  const response = await axios.get<UsersResponse>("/api/v1/users");
  return response.data;
};

export const getUserById = async (id: string): Promise<UserResponse> => {
  const response = await axios.get<UserResponse>(`/api/v1/users/${id}`);
  return response.data;
};

export const getUserByUsername = async (
  username: string,
): Promise<UserResponse> => {
  const response = await axios.get<UserResponse>("/api/v1/users", {
    params: { username },
  });
  return response.data;
};
