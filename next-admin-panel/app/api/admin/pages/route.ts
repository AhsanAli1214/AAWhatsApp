import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { verifyAdminSession } from "@/lib/auth";
import { assertCsrf } from "@/lib/csrf";

const pageSchema = z.object({
  key: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(2).max(160),
  body: z.string().max(100000),
  status: z.enum(["draft", "published"]),
});

export async function GET() {
  const session = await verifyAdminSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const { data, error } = await db.from("pages").select("*").order("updatedAt", { ascending: false });
  if (error) return NextResponse.json({ message: error.message }, { status: 400 });
  return NextResponse.json({ items: data });
}

export async function POST(request: Request) {
  const session = await verifyAdminSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  try {
    assertCsrf();
  } catch {
    return NextResponse.json({ message: "Invalid CSRF token" }, { status: 403 });
  }

  const payload = pageSchema.parse(await request.json());
  const now = new Date().toISOString();
  const { data, error } = await db.from("pages").insert({ ...payload, createdAt: now, updatedAt: now }).select("*").single();
  if (error) return NextResponse.json({ message: error.message }, { status: 400 });

  revalidatePath("/");
  return NextResponse.json({ item: data }, { status: 201 });
}

export async function PATCH(request: Request) {
  const session = await verifyAdminSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  try {
    assertCsrf();
  } catch {
    return NextResponse.json({ message: "Invalid CSRF token" }, { status: 403 });
  }

  const payload = (await request.json()) as { id: string } & z.infer<typeof pageSchema>;
  const validated = pageSchema.parse(payload);
  const { data, error } = await db
    .from("pages")
    .update({ ...validated, updatedAt: new Date().toISOString() })
    .eq("id", payload.id)
    .select("*")
    .single();

  if (error) return NextResponse.json({ message: error.message }, { status: 400 });
  revalidatePath("/");
  return NextResponse.json({ item: data });
}

export async function DELETE(request: Request) {
  const session = await verifyAdminSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  try {
    assertCsrf();
  } catch {
    return NextResponse.json({ message: "Invalid CSRF token" }, { status: 403 });
  }

  const id = new URL(request.url).searchParams.get("id");
  if (!id) return NextResponse.json({ message: "Missing id" }, { status: 400 });

  const { error } = await db.from("pages").delete().eq("id", id);
  if (error) return NextResponse.json({ message: error.message }, { status: 400 });

  revalidatePath("/");
  return NextResponse.json({ ok: true });
}
