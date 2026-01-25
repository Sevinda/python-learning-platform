import { NextRequest } from "next/server";
import { z } from "zod";

export async function validateRequestBody<T>(
  request: NextRequest,
  schema: z.ZodSchema<T>,
): Promise<T> {
  try {
    const body = await request.json();
    return schema.parse(body);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw error;
    }
    throw new Error("Invalid JSON in request body");
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validateParams<T extends Record<string, any>>(
  params: T,
  schema: z.ZodSchema<T>,
): T {
  return schema.parse(params);
}

// Middleware to log requests
export function logRequest(request: NextRequest) {
  console.log(
    `${new Date().toISOString()} - ${request.method} ${
      request.nextUrl.pathname
    }`,
  );
}
