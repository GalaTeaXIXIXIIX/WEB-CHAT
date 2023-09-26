"use client";

import styles from "./chat.module.css";

export const ChatItem = ({
  message,
  receiver,
}: {
  message: Message;
  receiver: string;
}) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  return (
    <>
      <div
        className={
          message.sender === user.username
            ? "flex justify-end mb-2"
            : "flex mb-2"
        }
      >
        <div
          className="rounded py-2 px-3"
          style={
            message.sender === user.username
              ? { backgroundColor: "#BBFAA8" }
              : { backgroundColor: "#f2f2f2" }
          }
        >
          <p className="text-sm mt-1">{message.content}</p>
          <p className="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
        </div>
      </div>
      {/* <div
        className={
          message.sender === user.username
            ? styles.messageLeft
            : styles.messageRight
            backgroundColor: "#f2f2f2"
        }
      >
        <p>{message.content}</p>
      </div> */}
    </>
  );
};
