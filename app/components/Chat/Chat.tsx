"use client";

import { Login } from "../Login";
import { UserList } from "../User/UserList";
import { ChatForm } from "./ChatForm";
import { ChatList } from "./ChatList";
import styles from "./chat.module.css";
import {
  selectChats,
  selectReceiver,
  useDispatch,
  useSelector,
} from "@/lib/redux";

export const Chat = () => {
  const token = localStorage.getItem("user");

  const receiver = useSelector(selectReceiver);
  const dispatch = useDispatch();

  if (!token) {
    return <Login />;
  } else {
    return (
      <div className={styles.allChat}>
        <UserList />
        <div className={styles.chatBox}>
          <ChatList />
          <ChatForm />
        </div>
      </div>
    );
  }
};
