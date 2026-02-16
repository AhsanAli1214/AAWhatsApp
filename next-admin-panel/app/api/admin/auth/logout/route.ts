import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { clearAdminSession } from "@/lib/auth";

export async function POST() {
  clearAdminSession();
  cookies().set("aa_admin_csrf", "", { maxAge: 0, path: "/" });
  return NextResponse.json({ ok: true });
}
