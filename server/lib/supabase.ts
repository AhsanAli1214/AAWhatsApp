import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const getEnv = (...keys: string[]) => {
  for (const key of keys) {
    const value = process.env[key];
    if (value && value.trim()) {
      return value.trim();
    }
  }

  return '';
};

const supabaseUrl = getEnv('SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_URL', 'VITE_SUPABASE_URL');
const supabaseServiceRoleKey = getEnv(
  'SUPABASE_SERVICE_ROLE_KEY',
  'SUPABASE_SERVICE_KEY',
  'SUPABASE_SECRET_KEY',
);

let supabaseClient: SupabaseClient | null = null;

if (supabaseUrl && supabaseServiceRoleKey) {
  supabaseClient = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
} else {
  console.error(
    '[supabase] Missing server env vars. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in Vercel (or aliases SUPABASE_SERVICE_KEY/SUPABASE_SECRET_KEY).',
  );
}

const getSupabaseClient = () => {
  if (!supabaseClient) {
    throw new Error(
      'Database is not configured. Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (service role key, not anon key) and redeploy.',
    );
  }

  return supabaseClient;
};

export const supabase = new Proxy(
  {},
  {
    get(_target, property) {
      return Reflect.get(getSupabaseClient(), property);
    },
  },
) as SupabaseClient;

export async function getApps() {
  const { data, error } = await getSupabaseClient().from('apps').select('*').order('name');

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

  const { data, error } = await getSupabaseClient()
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

  const { data, error } = await getSupabaseClient().from('apps').insert([payload]).select().single();

  if (error) throw error;
  return data;
}
