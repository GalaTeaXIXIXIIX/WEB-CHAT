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
    <div onClick={selectUser}>
      <div
        className="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer"
        style={
          username === receiver
            ? { backgroundColor: "rgb(218 231 238)" }
            : { backgroundColor: "" }
        }
      >
        <div>
          <img className="h-12 w-12 rounded-full" src="bussines-man.png" />
        </div>
        <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
          <div className="flex items-bottom justify-between">
            <div>
              <p className="text-grey-darkest">{username}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
