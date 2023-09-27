"use client";

export const ChatItem = ({ message }: { message: Message }) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const time = message.createdAt;
  const clock: Date = new Date(time);

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
              ? { backgroundColor: "rgb(197 242 184)" }
              : { backgroundColor: "#f2f2f2" }
          }
        >
          <p className="text-sm mt-1">{message.content}</p>
          <p className="text-right text-xs text-grey-dark mt-1">
            {time
              ? clock.toString().slice(15, 21)
              : new Date(Date.now()).toString().slice(15, 21)}
          </p>
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
