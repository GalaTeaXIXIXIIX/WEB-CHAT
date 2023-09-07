/* Core */
import { NextResponse } from "next/server";

import connectDB from "@/db";
import Chat from "@/models/Chat";

export async function GET(req: Request, res: Response) {
  // simulate IO latency
  await new Promise((r) => setTimeout(r, 500));

  return NextResponse.json({ data: [] });
}

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { id = "0", chat = "" } = body;

  // ChatList.push({ id, chat });
  // simulate IO latency
  await new Promise((r) => setTimeout(r, 500));

  return NextResponse.json({ id, chat });
}
