import { supabase } from '../server/lib/supabase';
import { appsData } from '../server/lib/apps-data';

async function migrate() {
  console.log('Starting migration...');
  for (const app of appsData) {
    const { data, error } = await supabase
      .from('apps')
      .upsert(app, { onConflict: 'slug' });
    
    if (error) {
      console.error(`Error migrating ${app.slug}:`, error);
    } else {
      console.log(`Successfully migrated ${app.slug}`);
    }
  }
  console.log('Migration finished.');
}

migrate();
