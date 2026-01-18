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

  // fall through to index.html if the file doesn't exist
  app.get(/^\/(?!api).*/, (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
