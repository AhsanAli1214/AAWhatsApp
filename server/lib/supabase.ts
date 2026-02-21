import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getApps() {
  const { data, error } = await supabase
    .from('apps')
    .select('*')
    .order('name');
  
  if (error) throw error;
  return data;
}

export async function updateApp(slug: string, updates: any) {
  const { data, error } = await supabase
    .from('apps')
    .update(updates)
    .eq('slug', slug)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function createApp(app: any) {
  const { data, error } = await supabase
    .from('apps')
    .insert([app])
    .select()
    .single();
  
  if (error) throw error;
  return data;
}
