// pages/api/check-email.js
import { dbConfig } from "@/config/dbConfig";
import userModel from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConfig();
    const { email } = await req.json();
    console.log('email', email)

    // Validate email input
    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    // Check if user with this email already exists
    const existingUser = await userModel.findOne({ email });
    console.log('existingUser', existingUser)

    if (existingUser) {
      return NextResponse.json({ message: "Email already exists" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Email does not exist" }, { status: 200 });
    }
  } catch (error) {
    console.error("Error in POST /check-email", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
