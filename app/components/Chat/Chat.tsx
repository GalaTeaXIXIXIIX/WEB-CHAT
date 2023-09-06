import { ChatForm } from "./ChatForm";
import { ChatList } from "./ChatList";
import styles from "./chat.module.css";

export const Chat = () => {
  return (
    <div>
      <ChatList />
      <ChatForm />
    </div>
  );
};
