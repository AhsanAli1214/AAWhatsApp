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
    const assetExtensions = /\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|mp4|webm|apk|map)$/i;
    if (assetExtensions.test(req.path)) {
      return next();
    }
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
