// // import { dbConfig } from "@/config/dbConfig";
// import { NextResponse } from "next/server";

// let verificationCodes = {}; // Should be the same in-memory storage or database

// export const POST = async (req) => {
//   try {
//     // await dbConfig();
//     const body = await req.json();
//     const userCode = body.code
//     const { email, code } = body;
//     console.log("body==>", code);
//     console.log("email==>", email);
//     console.log("code==>", code);

//     if (!email || !code) {
//       return NextResponse.json(
//         { message: "Email and code are required" },
//         { status: 400 }
//       );
//     }

//     const storedCode = verificationCodes[email];

//     console.log("storedCode", storedCode);

//     if (storedCode && storedCode === code) {
//       // Optionally, you could remove the code after verification
//       // delete verificationCodes[email];
//       return NextResponse.json({ message: "Code verified successfully" });
//     } else {
//       return NextResponse.json({ message: "Invalid code" }, { status: 400 });
//     }
//   } catch (error) {
//     console.error("Error verifying code:", error);
//     return NextResponse.json(
//       { message: "Failed to verify code", error: error.message },
//       { status: 500 }
//     );
//   }
// };
