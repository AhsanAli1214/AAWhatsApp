import { z } from 'zod';
import { insertSubscriberSchema, insertDownloadSchema, subscribers, downloads } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  subscribers: {
    create: {
      method: 'POST' as const,
      path: '/api/subscribers',
      input: insertSubscriberSchema,
      responses: {
        201: z.custom<typeof subscribers.$inferSelect>(),
        400: errorSchemas.validation,
        409: z.object({ message: z.string() }), // Conflict
      },
    },
  },
  downloads: {
    track: {
      method: 'POST' as const,
      path: '/api/downloads/track',
      input: insertDownloadSchema,
      responses: {
        200: z.object({ success: z.boolean() }),
      },
    },
    stats: {
      method: 'GET' as const,
      path: '/api/downloads/stats',
      responses: {
        200: z.array(z.custom<typeof downloads.$inferSelect>()),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
