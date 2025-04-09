import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // This app is a static landing page with no backend API routes needed

  const httpServer = createServer(app);
  
  return httpServer;
}
