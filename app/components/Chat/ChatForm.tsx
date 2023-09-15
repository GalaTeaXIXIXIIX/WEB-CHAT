"use client";

/* Core */
import { useCallback, useState } from "react";

/* Instruments */
import {
  useDispatch,
  addChatAsync,
  chatSlice,
  useSelector,
  selectReceiver,
} from "@/lib/redux";
import styles from "./chat.module.css";

export const ChatForm = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const receiver = useSelector(selectReceiver);

  const [content, setContent] = useState("");

  const send = useCallback(
    (event: any) => {
      event.preventDefault();
      const _id = Date.now().toString();
      const message: Message = {
        _id,
        content,
        sender: user.username,
        receiver,
      };
      dispatch(chatSlice.actions.add(message)); //adding to interface
      dispatch(addChatAsync(message)); // adding to database
      setContent("");
    },
    [content]
  );

  return (
    <form onSubmit={send}>
      <div className={styles.divForm}>
        <input
          type="text"
          name="chat"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          send
        </button>
      </div>
    </form>
  );
};
