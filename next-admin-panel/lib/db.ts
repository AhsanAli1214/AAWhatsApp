import { createClient } from "@supabase/supabase-js";
import type { AppRecord } from "@/types/app";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const db = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});

export async function getApps(params?: { search?: string; category?: string }) {
  let query = db.from("apps").select("*").order("updatedAt", { ascending: false });

  if (params?.search) query = query.ilike("appName", `%${params.search}%`);
  if (params?.category) query = query.contains("categories", [params.category]);

  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []) as AppRecord[];
}
