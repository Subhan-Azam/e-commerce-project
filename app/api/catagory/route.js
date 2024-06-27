// import { dbConfig } from "@/config/dbConfig";
// import bookSchema from "@/models/bookSchema";
// import { NextResponse } from "next/server";

// export const GET = async () => {
//   try {
//     await dbConfig();

//     const body = bookSchema.find({ catogery: "Fiction" });
//     return NextResponse.json({ message: "Get Catagory", body: body });
//   } catch (error) {
//     return NextResponse.json({ message: "Get wrong", error: error });
//   }
// };



import { dbConfig } from "@/config/dbConfig";
import bookSchema from "@/models/bookSchema";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConfig();

    // Assuming 'category' is the field you want to filter by
    const category = "yourCategory"; // Replace 'yourCategory' with the actual category value or retrieve it from the request

    const body = await bookSchema.find({ category: category });
    return NextResponse.json({ message: "Get Category", body: body });
  } catch (error) {
    return NextResponse.json({ message: "Get wrong", error: error.message });
  }
};
