import { z } from 'zod';

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

// Simplified schemas since we no longer use a database for these
const insertSubscriberSchema = z.object({
  email: z.string().email(),
});

const insertDownloadSchema = z.object({
  appSlug: z.string(),
  platform: z.string().optional(),
});

export const api = {
  subscribers: {
    create: {
      method: 'POST' as const,
      path: '/api/subscribers',
      input: insertSubscriberSchema,
      responses: {
        201: z.object({ id: z.number(), email: z.string() }),
        400: errorSchemas.validation,
        409: z.object({ message: z.string() }),
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
        200: z.object({ total: z.number(), android: z.number(), ios: z.number() }),
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
