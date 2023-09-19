"use client";

import {
  chatSlice,
  loadChatAsync,
  selectReceiver,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import styles from "./user.module.css";
import { useContext } from "react";
import { SocketContext } from "../Chat/Chat";

export const UserItem = ({
  username,
  sender,
}: {
  username: string;
  sender: string;
}) => {
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();
  const receiver = useSelector(selectReceiver);
  const selectUser = () => {
    dispatch(chatSlice.actions.receiver(username));
    dispatch(loadChatAsync({ sender, receiver: username }));
    socket.emit("join", `${sender}-${username}`, username);
  };

  return (
    <div
      className={username === receiver ? styles.userSelected : styles.user}
      onClick={selectUser}
    >
      <p>{username}</p>
    </div>
  );
};
