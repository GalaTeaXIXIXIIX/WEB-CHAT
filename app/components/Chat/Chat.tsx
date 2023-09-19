"use client";

import { Login } from "../Login";
import { UserList } from "../User/UserList";
import { ChatForm } from "./ChatForm";
import { ChatList } from "./ChatList";
import styles from "./chat.module.css";
import { io } from "socket.io-client";
import {
  loadChatAsync,
  selectChats,
  selectReceiver,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import { createContext, useEffect } from "react";

const socket = io("http://localhost:3001", {
  // path: "/api/socketio",
});

export const SocketContext = createContext(socket);

export const Chat = () => {
  const token = localStorage.getItem("user");

  const receiver = useSelector(selectReceiver);
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const dispatch = useDispatch();

  useEffect((): any => {
    // connect to socket server

    // log socket connection
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket.id);
    });

    // update chat on new message dispatched
    socket.on("invite", (room: string, receiver: string) => {
      if (receiver == user.username) socket.emit("join", room, "");
    });

    socket.on("messageReceived", (sender: string, receiver: string) => {
      if (user.username === receiver)
        dispatch(loadChatAsync({ sender, receiver: user.username }));
    });
    // socket disconnet onUnmount if exists
    //if (socket) return () => socket.disconnect();
  }, [user, receiver]);

  if (user?.username) {
    return (
      <SocketContext.Provider value={socket}>
        <div className={styles.allChat}>
          <UserList />
          <div className={styles.chatBox}>
            <ChatList />
            <ChatForm />
          </div>
        </div>
      </SocketContext.Provider>
    );
  } else {
    return <Login />;
  }
};
