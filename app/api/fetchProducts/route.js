import { dbConfig } from "@/config/dbConfig";
import bookSchema from "@/models/bookSchema";
import { NextResponse } from "next/server";

export const GET = async () => {
  await dbConfig();
  try {
    const fetchData = await bookSchema.find();
    console.log("fetchData==>", fetchData);

    return NextResponse.json({ message: "GET working", fetchData });
  } catch (error) {
    return NextResponse.json({ message: "Wrong in get", error: error });
  }
};
