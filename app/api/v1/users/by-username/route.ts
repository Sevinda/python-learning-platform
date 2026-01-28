import { NextRequest, NextResponse } from "next/server";

import { handleRouteError } from "@/lib/http/handleError";
import { ok } from "@/lib/http/response";
import { UserController } from "@/modules/users/user.controller";
import { GetUserByUsernameSchema } from "@/modules/users/user.dto";

const controller = new UserController();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username } = GetUserByUsernameSchema.parse(body);
    const data = await controller.getUserByUsername(username);
    return NextResponse.json(ok(data), { status: 200 });
  } catch (error) {
    return handleRouteError(error);
  }
}
