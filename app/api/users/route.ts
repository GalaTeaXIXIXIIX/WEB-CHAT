/* Core */
import { NextResponse } from "next/server";

import connectDB from "@/db";
import User from "@/models/User";

connectDB();

export async function GET(req: Request, res: Response) {
  console.log("sini");

  try {
    const users = await User.find({});
    return NextResponse.json({ data: users });
  } catch (error) {
    return NextResponse.json({ data: error });
  }
}

export async function POST(req: Request, res: Response) {
  console.log("masuk");

  try {
    const body = await req.json();
    console.log("ini body", body);

    const { username, password } = body;
    console.log(username, "ini username");

    const user = await User.create({ username, password });

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ data: error });
  }
}
