import { useEffect, useState } from "react";

export const ChatItem = ({ message }: { message: Message }) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const time = message.createdAt;
  const clock: string = new Date(time).toDateString();
  const today = new Date().toDateString();

  const [lastRenderedDate, setLastRenderedDate]: any = useState([]);

  useEffect(() => {
    // if (clock !== lastRenderedDate) {
    //   console.log("masuk");
    //   contoh(clock);
    // }
    // contoh(clock);
    // setLastRenderedDate((prevDates: any) => {
    //   return [...prevDates, clock];
    // });
  }, [clock]);

  const contoh = (clock: any) => {
    console.log(lastRenderedDate, "ini mana");

    // setLastRenderedDate(clock);
  };

  // const shouldRenderDateHeader = clock !== lastRenderedDate;

  // if (shouldRenderDateHeader) {
  //   setLastRenderedDate(clock);
  //   console.log(lastRenderedDate, "ini");
  // }

  // console.log(
  //   lastRenderedDate,
  //   // shouldRenderDateHeader,
  //   clock
  // );

  return (
    <div>
      {/* {shouldRenderDateHeader && (
        <div className="flex justify-center mb-2">
          <div
            className="rounded py-2 px-4"
            style={{ backgroundColor: "#ddecf2" }}
          >
            <p className="text-sm uppercase">{clock}</p>
          </div>
        </div>
      )} */}
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
              ? new Date(time).toLocaleTimeString()
              : new Date(Date.now()).toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
};
