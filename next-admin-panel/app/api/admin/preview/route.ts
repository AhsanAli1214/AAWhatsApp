import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/auth";

export async function GET(request: Request) {
  const session = await verifyAdminSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const id = new URL(request.url).searchParams.get("id");
  if (!id) return NextResponse.json({ message: "Missing id" }, { status: 400 });

  const previewToken = Buffer.from(`${id}:${Date.now()}`).toString("base64url");
  return NextResponse.json({ previewUrl: `/apps/preview/${id}?token=${previewToken}` });
}
