import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_KEY ||
  '';

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error(
    '[supabase] Missing SUPABASE_URL and/or SUPABASE_SERVICE_ROLE_KEY. Admin writes will fail until they are configured.',
  );
}

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export async function getApps() {
  const { data, error } = await supabase.from('apps').select('*').order('name');

  if (error) throw error;
  return data;
}

function mapAppPayload(input: Record<string, any>) {
  const payload: Record<string, any> = { ...input };

  const map: Record<string, string> = {
    iconImage: 'icon_image',
    seoTitle: 'seo_title',
    seoDescription: 'seo_description',
    seoKeywords: 'seo_keywords',
    directDownloadLink: 'direct_download_link',
    baseVersion: 'base_version',
    shortDescription: 'short_description',
    longDescription: 'long_description',
    whatsNew: 'whats_new',
  };

  for (const [camel, snake] of Object.entries(map)) {
    if (Object.prototype.hasOwnProperty.call(input, camel)) {
      payload[snake] = input[camel];
      delete payload[camel];
    }
  }

  return payload;
}

export async function updateApp(slug: string, updates: Record<string, any>) {
  const payload = mapAppPayload(updates);

  const { data, error } = await supabase
    .from('apps')
    .update(payload)
    .eq('slug', slug)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function createApp(app: Record<string, any>) {
  const payload = mapAppPayload(app);

  const { data, error } = await supabase.from('apps').insert([payload]).select().single();

  if (error) throw error;
  return data;
}
