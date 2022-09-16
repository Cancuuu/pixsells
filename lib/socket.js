import { io } from "socket.io-client";


const socket = io("http://localhost:3000");

console.log(socket);

export const handleSubmitNewPixel = (e) => {
  socket.emit("pixel", { data: "Hola" });

  socket.on("pixel", handleNewMessage);
};

const handleNewMessage = (pixel) => {
  console.log(pixel);
};
