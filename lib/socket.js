import { io } from "socket.io-client";

export const socket = io("http://localhost:3000");

export const pixelPainted = ({ x, y, color }) => {
  socket.emit(
    "pixelPainted",
    JSON.stringify({
      x,
      y,
      color: color,
    })
  );
};

export const handleNewMessage = (context) => {
  console.log(context);
};

// socket.on("canva", handleNewMessage);
