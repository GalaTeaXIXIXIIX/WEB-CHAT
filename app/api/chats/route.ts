/* Core */
import { NextResponse } from "next/server";

const ChatList: Message[] = [
  {
    id: "1",
    chat: "ngoding dulu",
  },
  {
    id: "2",
    chat: "futsal dulu",
  },
  {
    id: "3",
    chat: "makan dulu",
  },
];

export async function GET(req: Request, res: Response) {
  // simulate IO latency
  await new Promise((r) => setTimeout(r, 500));

  return NextResponse.json({ data: ChatList });
}

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { id = "0", chat = "" } = body;

  ChatList.push({ id, chat });
  // simulate IO latency
  await new Promise((r) => setTimeout(r, 500));

  return NextResponse.json({ id, chat });
}
