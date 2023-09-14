/* Core */
import { NextResponse } from "next/server";

import connectDB from "@/db";
import Chat from "@/models/Chat";
import User from "@/models/User";

export async function GET(req: Request, res: Response) {
  // simulate IO latency
  await new Promise((r) => setTimeout(r, 500));

  return NextResponse.json({ data: [] });
}

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { content, sender, room } = body;

    const user = User.findOne({ username: sender });
    const chat = new Chat({
      content,
      sender: user,
      room,
    });

    await chat.save();

    return NextResponse.json({ chat });
  } catch (e) {
    return NextResponse.json({ data: e });
  }
}
