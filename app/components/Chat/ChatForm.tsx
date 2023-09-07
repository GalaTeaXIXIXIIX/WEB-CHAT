"use client";

/* Core */
import { useCallback, useState } from "react";

/* Instruments */
import { useDispatch, addChat, addChatAsync, chatSlice } from "@/lib/redux";
import styles from "./chat.module.css";

export const ChatForm = () => {
  const dispatch = useDispatch();

  const [chat, setChat] = useState("");

  const send = useCallback(
    (event: any) => {
      event.preventDefault();
      const id = Date.now().toString();
      const message: Message = { id, chat };
      dispatch(chatSlice.actions.add(message)); //adding to interface
      dispatch(addChatAsync(message)); // adding to database
      setChat("");
    },
    [chat]
  );

  return (
    <form onSubmit={send}>
      <div className={styles.divForm}>
        <input
          type="text"
          name="chat"
          value={chat}
          onChange={(event) => setChat(event.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          send
        </button>
      </div>
    </form>
  );
};
