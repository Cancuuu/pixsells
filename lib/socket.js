import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export const handleSubmitNewPixel = (e) => {
  socket.emit(
    "pixelPainted",
    JSON.stringify({
      x: 1,
      y: 5,
      color: "#test2",
    })
  );
};

const handleNewMessage = (canva) => {
  console.log(JSON.parse(canva));
};


socket.on("pixel", handleNewMessage);
socket.on("canva", handleNewMessage);

