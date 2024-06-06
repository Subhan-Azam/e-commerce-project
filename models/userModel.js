import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide user name"],
  },
  email: {
    type: String,
    require: [true, "Please provide email"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please provide password"],
  },
  reset_token: {
    type: String,
  },
  reset_token_expiration: {
    type: Date,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verifyToken: String,
  verifyTokenExpiry: Date,
  // isAdmin: {
  //   type: Boolean,
  //   default: false,
  // },
});

export default mongoose.models.login || mongoose.model("login", userSchema);
