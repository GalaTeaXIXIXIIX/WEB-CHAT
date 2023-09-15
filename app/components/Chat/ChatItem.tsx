"use client";

import styles from "./chat.module.css";

export const ChatItem = ({ message }: { message: Message }) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  return (
    <div
      className={
        message.sender === user.username
          ? styles.messageLeft
          : styles.messageRight
      }
    >
      <p>{message.content}</p>
    </div>
  );
};
