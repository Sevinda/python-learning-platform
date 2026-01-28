import { NextRequest, NextResponse } from "next/server";

import { handleRouteError } from "@/lib/http/handleError";
import { ok } from "@/lib/http/response";
import { UserController } from "@/modules/users/user.controller";
import { CreateUserSchema } from "@/modules/users/user.dto";

const controller = new UserController();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const input = CreateUserSchema.parse(body);
    const data = await controller.createUser(input);
    return NextResponse.json(ok(data), { status: 201 });
  } catch (error) {
    return handleRouteError(error);
  }
}

export async function GET() {
  try {
    const data = await controller.getAllUsers();
    return NextResponse.json(ok(data), { status: 200 });
  } catch (error) {
    return handleRouteError(error);
  }
}
