import { dbConfig } from "@/config/dbConfig";
import bookSchema from "@/models/bookSchema";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConfig();

    const body = await bookSchema.find({ catogery: "Best collections" });
    return NextResponse.json({ body: body });
  } catch (error) {
    return NextResponse.json({ message: "Get wrong", error: error.message });
  }
};
