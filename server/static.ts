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

  // Ensure index.html is served ONLY for page requests
  app.get(/^(?!\/api).*/, (req, res, next) => {
    // API and files with extensions (like .xml, .txt, .js, .css) should not return index.html
    if (req.path.endsWith(".xml") || req.path.endsWith(".txt") || req.path.includes(".")) {
      return next();
    }
    
    res.setHeader("Content-Type", "text/html");
    res.sendFile(path.resolve(distPath, "index.html"), (err) => {
      if (err) {
        next(err);
      }
    });
  });
}
