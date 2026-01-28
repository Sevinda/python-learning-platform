import { z } from "zod";

// Validation schemas
export const CreateUserSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be at most 30 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores",
    )
    .transform((val) => val.toLowerCase()),
});

export const GetUserByUsernameSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be at most 30 characters")
    .transform((val) => val.toLowerCase()),
});

// Type exports
export type CreateUserInput = z.infer<typeof CreateUserSchema>;
export type GetUserByUsernameInput = z.infer<typeof GetUserByUsernameSchema>;
