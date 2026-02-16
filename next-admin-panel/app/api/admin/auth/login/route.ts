import { NextResponse } from "next/server";
import { createAdminSession } from "@/lib/auth";
import { issueCsrfToken } from "@/lib/csrf";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await createAdminSession(username);
  const csrfToken = issueCsrfToken();
  return NextResponse.json({ ok: true, csrfToken });
}
