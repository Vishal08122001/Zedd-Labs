import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket: Socket) => {
  console.log("A user connected.");

  socket.on("message", (data: any) => {
    console.log("Received message:", data);
    // Handle received message
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected.");
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
