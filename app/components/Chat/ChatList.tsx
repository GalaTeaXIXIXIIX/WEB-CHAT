"use client";

/* Instruments */
import { useSelector, selectChats } from "@/lib/redux";
import { ChatItem } from "./ChatItem";

export const ChatList = () => {
  const chats = useSelector(selectChats);

  return (
    <div>
      {chats?.map((item) => (
        <ChatItem key={item._id} message={item} />
      ))}
    </div>
  );
};
