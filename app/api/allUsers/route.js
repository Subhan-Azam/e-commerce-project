import userModel from "@/models/userModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    let body = await userModel.find();
    return NextResponse.json({ body });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ message: "wrong in get" });
  }
};
