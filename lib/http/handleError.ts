import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { AppError, ValidationError } from "./errors";
import { fail } from "./response";

export function handleRouteError(err: unknown) {
  // JSON parsing errors
  if (err instanceof SyntaxError && err.message.includes("JSON")) {
    return NextResponse.json(
      fail("INVALID_JSON", "Invalid JSON in request body"),
      {
        status: 400,
      },
    );
  }

  // Zod errors
  if (err instanceof ZodError) {
    const ve = new ValidationError("Invalid request", err.issues);
    return NextResponse.json(fail(ve.code, ve.message, ve.details), {
      status: ve.status,
    });
  }

  // Our app errors
  if (err instanceof AppError) {
    return NextResponse.json(fail(err.code, err.message, err.details), {
      status: err.status,
    });
  }

  // Unknown
  console.error(err);
  return NextResponse.json(fail("INTERNAL_ERROR", "Something went wrong"), {
    status: 500,
  });
}
