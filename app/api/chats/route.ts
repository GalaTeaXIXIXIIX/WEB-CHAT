/* Core */
import { NextRequest, NextResponse } from "next/server";

import connectDB from "@/db";
import Chat from "@/models/Chat";
import User from "@/models/User";

connectDB();

export async function GET(req: NextRequest, res: Response) {
  try {
    const sender = req.nextUrl.searchParams.get("sender");
    const receiver = req.nextUrl.searchParams.get("receiver");
    const chats = await Chat.find({
      $or: [
        { sender: sender, receiver: receiver },
        { sender: receiver, receiver: sender },
      ],
    }).sort({ createdAt: 1 });
    return NextResponse.json({ data: chats });
  } catch (e) {
    return NextResponse.json({ data: e });
  }
}

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { content, sender, receiver } = body;

    const chat = new Chat({
      content,
      sender,
      receiver,
    });

    await chat.save();

    return NextResponse.json({ chat });
  } catch (e) {
    return NextResponse.json({ data: e });
  }
}
