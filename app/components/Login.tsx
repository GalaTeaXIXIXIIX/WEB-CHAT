"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const Login = () => {
  const { push } = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/users/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
        push("/chat");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ width: "50%" }}>
      <form onSubmit={submit}>
        <input
          placeholder="username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">masuk</button>
      </form>
    </div>
  );
};
