const { default: mongoose } = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    maxLength: [200, "Too much length"],
    trim: true,
  },
  userid: {
    type: mongoose.Schema.ObjectId,
    ref: "logins",
    required: [true, "user is required"],
  },
  author: {
    type: String,
    maxLength: [200, "Too much length"],
    trim: true,
    required: [true, "Author name is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    max: [100000, "Too much price"],
    trim: true,
  },
  catogery: {
    type: String,
    required: [true, "Please select catogery"],
    maxLength: [200, "Too much length"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please write description of book"],
    maxLength: [200000, "Too much length"],
    trim: true,
  },
  imgs_url: {
    type: Array,
    default: [],
    required: [true, "Please add images"],
  },
});

export default mongoose.models.userBook ||
  mongoose.model("userBook", bookSchema);
