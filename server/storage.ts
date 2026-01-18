import { db } from "./db";
import {
  subscribers,
  downloads,
  type InsertSubscriber,
  type InsertDownload,
  type Subscriber,
  type Download
} from "@shared/schema";
import { eq, sql } from "drizzle-orm";

export interface IStorage {
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  trackDownload(download: InsertDownload): Promise<void>;
  getDownloadStats(): Promise<Download[]>;
}

export class DatabaseStorage implements IStorage {
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const [subscriber] = await db.insert(subscribers).values(insertSubscriber).returning();
    return subscriber;
  }

  async trackDownload(insertDownload: InsertDownload): Promise<void> {
    // Upsert: increment count if version/platform exists, else insert
    // Simple implementation: check first
    const existing = await db.select().from(downloads).where(
      sql`${downloads.version} = ${insertDownload.version} AND ${downloads.platform} = ${insertDownload.platform}`
    );

    if (existing.length > 0) {
      await db.update(downloads)
        .set({ count: sql`${downloads.count} + 1` })
        .where(eq(downloads.id, existing[0].id));
    } else {
      await db.insert(downloads).values({ ...insertDownload, count: 1 });
    }
  }

  async getDownloadStats(): Promise<Download[]> {
    return await db.select().from(downloads);
  }
}

export const storage = new DatabaseStorage();
