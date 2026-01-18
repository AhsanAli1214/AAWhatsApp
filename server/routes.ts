import type { Express } from "express";
import type { Server } from "http";
import { api } from "@shared/routes";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/report-bug", async (req, res) => {
    try {
      if (!resend) {
        console.error("Resend API Key is missing");
        return res.status(500).json({ error: "Email service not configured" });
      }
      const { type, email, message } = req.body;
      
      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "contact.alvini.pro@gmail.com",
        subject: `AAWhatsApp Bug Report: ${type}`,
        html: `
          <h3>New Bug Report Received</h3>
          <p><strong>Type:</strong> ${type}</p>
          <p><strong>Reporter Email:</strong> ${email}</p>
          <p><strong>Details:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        console.error("Resend Error:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }

      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Server Error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post(api.subscribers.create.path, async (req, res) => {
    res.status(201).json({ id: 1, email: req.body.email });
  });

  app.post(api.downloads.track.path, async (req, res) => {
    res.status(200).json({ success: true });
  });

  app.get(api.downloads.stats.path, async (req, res) => {
    res.json({ total: 0, android: 0, ios: 0 });
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
