import { NextApiRequest } from "next";
import { Server as ServerIO } from "socket.io";
import { Server as HttpServer } from "http";
// create new type response
import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";

export type NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: ServerIO;
    };
  };
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET(req: NextApiRequest, res: NextApiResponseServerIO) {
  if (!res.socket?.server?.io) {
    console.log("New Socket.io server...");
    // adapt Next's net Server to http Server
    const httpServer: HttpServer = res.socket?.server as any;
    const io = new ServerIO(httpServer, {
      path: "/api/socketio",
    });
    // append SocketIO server to Next.js socket server response
    //res.socket.server.io = io;
  }
  res.end();
}
