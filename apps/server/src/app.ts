import { Server, Socket } from "socket.io";
import { createServer } from "http";
import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const server = createServer(app);

// Express middleware
app.use(express.json());
app.use(
  cors({
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    origin: "*",
    credentials: true,
  })
);

// Websockets with Socket.io
const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

// Socket.io events
io.on("connection", async (socket: Socket) => {
  console.log("[CONNECTION]", socket.id);

  // await checkIfExistingUser(io, socket);

  // connectionSocketHandlers(io, socket);
  // roomSocketHandlers(io, socket);
  // gameSocketHandlers(io, socket);
  // generationSocketHandlers(io, socket);
  // voteSocketHandlers(io, socket);
});

// http routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong");
});
// userRoutes(app);
// roomRoutes(app);
// gameRoutes(app);
// generationRoutes(app);

// Error handlers