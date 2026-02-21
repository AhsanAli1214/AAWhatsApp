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
  // Map camelCase to snake_case for Supabase if needed, or handle both
  const { iconImage, seoTitle, seoDescription, seoKeywords, directDownloadLink, baseVersion, shortDescription, longDescription, whatsNew, ...rest } = updates;
  
  const payload = {
    ...rest,
    ...(iconImage && { icon_image: iconImage }),
    ...(seoTitle && { seo_title: seoTitle }),
    ...(seoDescription && { seo_description: seoDescription }),
    ...(seoKeywords && { seo_keywords: seoKeywords }),
    ...(directDownloadLink && { direct_download_link: directDownloadLink }),
    ...(baseVersion && { base_version: baseVersion }),
    ...(shortDescription && { short_description: shortDescription }),
    ...(longDescription && { long_description: longDescription }),
    ...(whatsNew && { whats_new: whatsNew }),
  };

  const { data, error } = await supabase
    .from('apps')
    .update(payload)
    .eq('slug', slug)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function createApp(app: any) {
  const { iconImage, seoTitle, seoDescription, seoKeywords, directDownloadLink, baseVersion, shortDescription, longDescription, whatsNew, ...rest } = app;
  
  const payload = {
    ...rest,
    icon_image: iconImage || app.icon_image,
    seo_title: seoTitle || app.seo_title,
    seo_description: seoDescription || app.seo_description,
    seo_keywords: seoKeywords || app.seo_keywords,
    direct_download_link: directDownloadLink || app.direct_download_link,
    base_version: baseVersion || app.base_version,
    short_description: shortDescription || app.short_description,
    long_description: longDescription || app.long_description,
    whats_new: whatsNew || app.whats_new,
  };

  const { data, error } = await supabase
    .from('apps')
    .insert([payload])
    .select()
    .single();
  
  if (error) throw error;
  return data;
}
