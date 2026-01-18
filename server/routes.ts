import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.subscribers.create.path, async (req, res) => {
    try {
      const input = api.subscribers.create.input.parse(req.body);
      const subscriber = await storage.createSubscriber(input);
      res.status(201).json(subscriber);
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      // Handle unique constraint violation
      if (err.code === '23505') {
         return res.status(409).json({ message: "Email already subscribed" });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post(api.downloads.track.path, async (req, res) => {
    try {
      const input = api.downloads.track.input.parse(req.body);
      await storage.trackDownload(input);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ message: "Failed to track download" });
    }
  });

  app.get(api.downloads.stats.path, async (req, res) => {
    const stats = await storage.getDownloadStats();
    res.json(stats);
  });

  app.get("/sitemap.xml", (req, res) => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://aawhatsapp.replit.app/</loc>
    <lastmod>${new_status_date}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
    res.header("Content-Type", "application/xml");
    res.send(sitemap);
  });

  return httpServer;
}
const new_status_date = new Date().toISOString().split('T')[0];
