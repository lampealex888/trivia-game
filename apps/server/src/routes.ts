import type { Express } from "express";

// room routes

// create a room
export function userRoutes(app: Express) {
  app.post("create-room", async (req, res) => {
    try {
      const { nickname } = req.body;
    } catch (error) {
      console.error((error as Error).message);
    }
  });
}

// game routes

// user routes

// answer routes
