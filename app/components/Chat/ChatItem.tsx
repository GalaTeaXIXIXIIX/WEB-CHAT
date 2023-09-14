import styles from "./chat.module.css";

export const ChatItem = ({ message }: { message: Message }) => {
  return (
    <div className={styles.message}>
      <p>{message.content}</p>
    </div>
  );
};
