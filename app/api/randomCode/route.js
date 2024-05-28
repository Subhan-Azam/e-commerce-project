import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const email = body.email;

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    console.log("body", body);
    console.log("email", email);

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    console.log("transporter Random Code==>", transporter);

    const generateCode = () => {
      return Math.floor(1000 + Math.random() * 9000).toString();
    };

    const code = generateCode();
    console.log("Generated Code", code);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Verification Code",
      html: `<p>Your verification code is: <strong>${code}</strong></p>`,
    };

    console.log("mailOptions Random Code==>", mailOptions);

    const sendMail = await transporter.sendMail(mailOptions);
    console.log("sendMail Random Code==>", sendMail);

    return NextResponse.json(
      { message: "Code sent successfully", code },
      { status: 200 }
    ); // Note: Don't send the code in a real application
  } catch (error) {
    console.log("error Random Code==>", error);
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
};

// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export const POST = async (req) => {
//   try {
//     const body = await req.json();
//     const email = body.email;
//     console.log("body", body);
//     console.log("email", email);

//     if (!email) {
//       return NextResponse.json(
//         { message: "Email is required" },
//         { status: 400 }
//       );
//     }

//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: process.env.EMAIL_PORT,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });
//     console.log("transporter Random Code==>", transporter);

//     const generateCode = () => {
//       return Math.floor(1000 + Math.random() * 9000).toString();
//     };

//     const code = generateCode();
//     console.log("Generated Code", code);

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: "Login Code",
//       html: `<p>Your verification code is: <strong>${code}</strong></p>`,
//     };
//     console.log("mailOptions", mailOptions);

//     const sendMail = await transporter.sendMail(mailOptions);

//     return NextResponse.json({ message: "POST Working" });
//   } catch (error) {
//     return NextResponse.json({ message: error.message });
//   }
// };
