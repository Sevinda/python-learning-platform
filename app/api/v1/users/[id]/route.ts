import { handleRouteError } from "@/lib/http/handleError";
import { ok } from "@/lib/http/response";
import { UserController } from "@/modules/users/user.controller";
import { NextRequest, NextResponse } from "next/server";

const controller = new UserController();

export async function GET(
  _: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id: userId } = await context.params;
    const data = await controller.getUserById(userId);
    return NextResponse.json(ok(data), { status: 200 });
  } catch (error) {
    return handleRouteError(error);
  }
}
