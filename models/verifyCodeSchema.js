// models/VerificationCode.js
import mongoose from "mongoose";

const verificationCodeSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  code: { type: String, required: true },
  createdAt: { type: Date, expires: "10m", default: Date.now },
});

const VerificationCode =
  mongoose.models.VerificationCode ||
  mongoose.model("VerificationCode", verificationCodeSchema);

export default VerificationCode;
