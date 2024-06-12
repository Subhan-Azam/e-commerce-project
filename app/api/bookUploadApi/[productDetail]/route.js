import { dbConfig } from "@/config/dbConfig";
import bookSchema from "@/models/bookSchema";
import { NextResponse } from "next/server";

export const GET = async (params, content) => {
  await dbConfig();
  try {
    const params = content.params.productDetail;
    const product = await bookSchema.find({ _id: params });
    console.log("product==>", product);

    return NextResponse.json({ productApi: product });
  } catch (error) {
    return NextResponse.json({ message: "Wrong in book Detail", error: error });
  }
};
