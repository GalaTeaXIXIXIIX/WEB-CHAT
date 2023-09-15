"use client";

import {
  chatSlice,
  loadChatAsync,
  selectReceiver,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import styles from "./user.module.css";

export const UserItem = ({
  username,
  sender,
}: {
  username: string;
  sender: string;
}) => {
  const dispatch = useDispatch();
  const receiver = useSelector(selectReceiver);
  const selectUser = () => {
    dispatch(chatSlice.actions.receiver(username));
    dispatch(loadChatAsync({ sender, receiver: username }));
  };

  return (
    <div
      className={username === receiver ? styles.userSelected : styles.user}
      onClick={selectUser}
    >
      <p>{username}</p>
    </div>
  );
};
