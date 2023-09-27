/* Types */
declare type Message = {
  _id: string;
  content: string;
  sender: string;
  receiver: string;
  createdAt: Date;
};

declare type User = {
  _id: string;
  username: string;
};
