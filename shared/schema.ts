import { z } from "zod";

export const insertSubscriberSchema = z.object({
  email: z.string().email(),
});

export const insertDownloadSchema = z.object({
  version: z.string(),
  platform: z.string(),
});

export interface Subscriber {
  id: number;
  email: string;
  createdAt: Date | null;
}

export interface Download {
  id: number;
  version: string;
  platform: string;
  count: number | null;
}
