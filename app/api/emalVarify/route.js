import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    // const token  = body;
    // console.log("token==>", token);
    console.log("body==>", body);
    return NextResponse.json({ message: "POST Successfully working" });
  } catch (error) {
    return NextResponse.json({
      message: "Something wrong in POST",
      error: error,
    });
  }
};
