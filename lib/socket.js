import React, {useContext} from "react";
import { io } from "socket.io-client";

export const socket = io("http://localhost:8000");

const handleNewMessage = (canva) => {
  console.log(JSON.parse(canva));

};

export const sendNewPixel = ({x, y, color}) => {
  console.log({x, y, color});
  socket.emit(
    "pixelPainted",
    JSON.stringify({
      x: x,
      y: y,
      color: color.currentColor,
    })
  );
}


socket.on("canva", handleNewMessage);

