/* Types */
declare type Message = {
  _id: string;
  content: string;
  sender: string;
  room: string;
};

declare type User = {
  _id: string;
  username: string;
};
