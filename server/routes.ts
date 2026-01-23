import type { Express } from "express";
import type { Server } from "http";
import { api } from "@shared/routes";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  const new_status_date = new Date().toISOString().split('T')[0];
  
  app.post("/api/report-bug", async (req, res) => {
    try {
      if (!resend) {
        console.error("Resend API Key is missing");
        return res.status(500).json({ error: "Email service not configured" });
      }
      const { type, email, message } = req.body;
      
      const { data, error } = await resend.emails.send({
        from: "AAWhatsApp <onboarding@resend.dev>",
        to: "a67515346@gmail.com",
        subject: `🚨 Bug Report: ${type}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f7f6; }
                .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid #e0e0e0; }
                .header { background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white; padding: 30px 20px; text-align: center; }
                .header h1 { margin: 0; font-size: 24px; letter-spacing: 1px; text-transform: uppercase; }
                .content { padding: 30px; }
                .item { margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0; }
                .item:last-child { border-bottom: none; }
                .label { font-weight: bold; color: #ef4444; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; display: block; }
                .value { font-size: 16px; color: #1a1a1a; word-break: break-word; }
                .badge { display: inline-block; padding: 4px 12px; background: #fee2e2; color: #ef4444; border-radius: 20px; font-size: 14px; font-weight: 600; }
                .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e0e0e0; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>New Bug Report</h1>
                </div>
                <div class="content">
                  <div class="item">
                    <span class="label">Priority Level</span>
                    <span class="badge">Attention Required</span>
                  </div>
                  <div class="item">
                    <span class="label">Issue Category</span>
                    <div class="value" style="font-weight: 600;">${type}</div>
                  </div>
                  <div class="item">
                    <span class="label">Reporter Details</span>
                    <div class="value">${email}</div>
                  </div>
                  <div class="item">
                    <span class="label">Technical Description</span>
                    <div class="value" style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; font-family: monospace;">${message}</div>
                  </div>
                </div>
                <div class="footer">
                  <p>Sent via AAWhatsApp Automated Support System</p>
                  <p>&copy; ${new Date().getFullYear()} AAWhatsApp. Technical Support Team.</p>
                </div>
              </div>
            </body>
          </html>
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
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://aawhatsapp.replit.app/</loc>
    <lastmod>${new_status_date}</lastmod>
    <changefreq>always</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://aawhatsapp.replit.app/#download</loc>
    <lastmod>${new_status_date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://aawhatsapp.replit.app/#features</loc>
    <lastmod>${new_status_date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://aawhatsapp.replit.app/#comparison</loc>
    <lastmod>${new_status_date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;
    res.header("Content-Type", "application/xml");
    res.status(200).send(sitemap);
  });

  return httpServer;
}
