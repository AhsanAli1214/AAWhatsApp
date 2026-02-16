import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { appSchema } from "@/lib/validation";
import { assertCsrf } from "@/lib/csrf";
import { verifyAdminSession } from "@/lib/auth";
import { db, getApps } from "@/lib/db";
import { sanitizeTextArray, escapeHtml } from "@/lib/sanitize";

export async function GET(request: Request) {
  const session = await verifyAdminSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const items = await getApps({
    search: searchParams.get("search") ?? undefined,
    category: searchParams.get("category") ?? undefined,
  });
  return NextResponse.json({ items });
}

export async function POST(request: Request) {
  const session = await verifyAdminSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  try {
    assertCsrf();
  } catch {
    return NextResponse.json({ message: "Invalid CSRF token" }, { status: 403 });
  }

  const parse = appSchema.safeParse(await request.json());
  if (!parse.success) return NextResponse.json({ message: parse.error.issues[0]?.message ?? "Invalid payload" }, { status: 400 });
  const payload = parse.data;
  const now = new Date().toISOString();
  const toInsert = {
    ...payload,
    description: escapeHtml(payload.description),
    changelog: escapeHtml(payload.changelog),
    features: sanitizeTextArray(payload.features),
    tags: sanitizeTextArray(payload.tags),
    categories: sanitizeTextArray(payload.categories),
    downloads: 0,
    createdAt: now,
    updatedAt: now,
  };

  const { data, error } = await db.from("apps").insert(toInsert).select("*").single();
  if (error) return NextResponse.json({ message: error.message }, { status: 400 });

  revalidatePath("/");
  revalidatePath(`/apps/${payload.slug}`);
  revalidateTag("apps");
  return NextResponse.json({ item: data }, { status: 201 });
}
