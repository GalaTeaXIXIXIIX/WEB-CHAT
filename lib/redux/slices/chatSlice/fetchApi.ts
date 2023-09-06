import { request } from "../../../api";

export const fetchLoadChat = async () => {
  const { data } = await request.get("/chats");
  console.log(data, "yang ini");

  return data;
};

export const fetchAddChat = async (message: Message) => {
  const { data } = await request.post("/chats", message);

  return data;
};
