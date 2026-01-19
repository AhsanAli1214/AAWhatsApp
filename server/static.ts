import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(process.cwd(), "dist", "public");
  if (!fs.existsSync(distPath)) {
    // Check if we are in development and if we should just skip
    if (process.env.NODE_ENV !== "production") {
      return;
    }
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // Ensure index.html is served for all non-API/non-file routes
  app.get(/^(?!\/api).*/, (req, res, next) => {
    // Only serve index.html if it doesn't look like a direct file request
    // and specifically exclude common static asset extensions
    const assetExtensions = /\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|mp4|webm|apk)$/i;
    if (assetExtensions.test(req.path)) {
      return res.status(404).end();
    }
    res.sendFile(path.resolve(distPath, "index.html"), (err) => {
      if (err) {
        next(err);
      }
    });
  });
}
