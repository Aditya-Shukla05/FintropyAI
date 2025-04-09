import { createServer } from "http";

export async function registerRoutes(app) {
  // This app is a static landing page with no backend API routes needed

  const httpServer = createServer(app);
  
  return httpServer;
}