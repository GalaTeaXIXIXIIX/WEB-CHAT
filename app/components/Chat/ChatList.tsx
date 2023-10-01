"use client";

/* Instruments */
import { useSelector, selectChats } from "@/lib/redux";
import { ChatItem } from "./ChatItem";
import styles from "./chat.module.css";
import { useEffect, useRef } from "react";

export const ChatList = () => {
  const chats = useSelector(selectChats);

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  return (
    <div>
      {chats?.map((item) => (
        <ChatItem key={item._id} message={item} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};
