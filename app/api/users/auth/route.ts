/* Core */
import { NextResponse } from "next/server";

import connectDB from "@/db";
import User from "@/models/User";

import jwt from "jsonwebtoken";

connectDB();

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { username, password } = body;

    let user = await User.findOne({ username });

    if (user) {
      if (user.authenticate(password)) {
        return NextResponse.json({
          username: user.username,
          token: jwt.sign({ userid: user._id }, "rubicamp"),
          newUser: false,
        });
      } else {
        return NextResponse.json({ message: "Invalid email or password" });
      }
    } else {
      user = await User.create({ username, password });
      return NextResponse.json({
        username: user.username,
        token: jwt.sign({ userid: user._id }, "rubicamp"),
        newUser: true,
      });
    }
  } catch (error) {
    return NextResponse.json({ data: error });
  }
}
