"use client";

/* Core */
import { useEffect, useState } from "react";

import styles from "./user.module.css";
import { UserItem } from "./UserItem";
import { useDispatch, selectReceiver } from "@/lib/redux";

export const UserList = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const [users, setUsers] = useState([] as User[]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data.data);
      setUsers(data.data);
    }
  };
  return (
    <div className={styles.list}>
      {users
        .filter((item) => item.username !== user.username)
        .map((item) => (
          <UserItem
            key={item._id}
            username={item.username}
            sender={user.username}
          />
        ))}
    </div>
  );
};
