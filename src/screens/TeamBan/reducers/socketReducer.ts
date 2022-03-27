import { Socket } from "socket.io-client";

export type socketAction = {
  type: string;
  payload?: any;
};

export const socketReducer = (sock: Socket, action: socketAction) => {
  switch (action.type) {
    case "gamecode":
      sock.emit(action.type, action.payload);
      return sock;
    case "done":
      sock.emit(action.type, action.payload);
      return sock;
    case "ready":
      sock.emit(action.type, action.payload);
      return sock;
    case "select":
      sock.emit(action.type, action.payload);
      return sock;
  }
};
