import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  errors?: Array<{ field: string; message: string }>;
}

export class ApiResponseBuilder {
  static success<T>(
    data: T,
    message?: string,
    status: number = 200,
  ): NextResponse {
    const response: ApiResponse<T> = {
      success: true,
      data,
      ...(message && { message }),
    };

    return NextResponse.json(response, { status });
  }

  static created<T>(data: T, message?: string): NextResponse {
    return this.success(data, message || "Resource created successfully", 201);
  }

  static noContent(message?: string): NextResponse {
    const response: ApiResponse = {
      success: true,
      ...(message && { message }),
    };

    return NextResponse.json(response, { status: 204 });
  }

  static error(
    message: string,
    status: number = 500,
    errors?: Array<{ field: string; message: string }>,
  ): NextResponse {
    const response: ApiResponse = {
      success: false,
      error: message,
      ...(errors && { errors }),
    };

    return NextResponse.json(response, { status });
  }

  static badRequest(
    message: string,
    errors?: Array<{ field: string; message: string }>,
  ): NextResponse {
    return this.error(message, 400, errors);
  }

  static notFound(message: string = "Resource not found"): NextResponse {
    return this.error(message, 404);
  }

  static unauthorized(message: string = "Unauthorized"): NextResponse {
    return this.error(message, 401);
  }

  static forbidden(message: string = "Forbidden"): NextResponse {
    return this.error(message, 403);
  }
}
