import React, { useEffect } from "react";
import { io } from "socket.io-client";

const SocketIoComp: React.FC = () => {
  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("connect", () => {
      console.log("Connected to server.");

      socket.emit("message", "Hello, server!");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server.");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // Rest of the component code
  return (
    <div
      className="border"
      style={{
        display: "flex",
        height: "400px",
        justifyContent: "space-around",
        backgroundColor: "GREEN",
      }}
    >
      <h2
        className="mx-3 border"
        style={{
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          width: "40%",
          justifyContent: "center",
          alignContent: "space-evenly",
          backgroundColor: "red",
        }}
      >
        This is the Implementation of socket IO
      </h2>
    </div>
  );
};

export default SocketIoComp;
