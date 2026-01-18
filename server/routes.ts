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

  return httpServer;
}
