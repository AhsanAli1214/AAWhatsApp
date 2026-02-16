import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { appSchema } from "@/lib/validation";
import { assertCsrf } from "@/lib/csrf";
import { verifyAdminSession } from "@/lib/auth";
import { db } from "@/lib/db";

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const session = await verifyAdminSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  try {
    assertCsrf();
  } catch {
    return NextResponse.json({ message: "Invalid CSRF token" }, { status: 403 });
  }

  const parse = appSchema.partial().safeParse(await request.json());
  if (!parse.success) return NextResponse.json({ message: parse.error.issues[0]?.message ?? "Invalid payload" }, { status: 400 });
  const payload = parse.data;
  const { data, error } = await db
    .from("apps")
    .update({ ...payload, updatedAt: new Date().toISOString() })
    .eq("id", params.id)
    .select("*")
    .single();

  if (error) return NextResponse.json({ message: error.message }, { status: 400 });
  revalidatePath("/");
  if (data?.slug) revalidatePath(`/apps/${data.slug}`);
  revalidateTag("apps");
  return NextResponse.json({ item: data });
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const session = await verifyAdminSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  try {
    assertCsrf();
  } catch {
    return NextResponse.json({ message: "Invalid CSRF token" }, { status: 403 });
  }

  const { data, error } = await db.from("apps").delete().eq("id", params.id).select("slug").single();
  if (error) return NextResponse.json({ message: error.message }, { status: 400 });

  revalidatePath("/");
  if (data?.slug) revalidatePath(`/apps/${data.slug}`);
  revalidateTag("apps");
  return NextResponse.json({ ok: true });
}
