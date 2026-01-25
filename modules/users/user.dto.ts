import { z } from "zod";

export const UserIdSchema = z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid id");
export const CreateUserSchema = z.object({
  username: z.string().min(3).max(30),
});
export const GetUserByUsernameSchema = z.object({
  username: z.string().min(3).max(30),
});
export type CreateUserInput = z.infer<typeof CreateUserSchema>;
export type GetUserByUsernameInput = z.infer<typeof GetUserByUsernameSchema>;
