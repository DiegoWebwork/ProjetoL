const mongoose = require("mongoose");

const BookDetailSchema = new mongoose.Schema(
  {
    name: String,
    image:String,
    author:String
  },
  {
    collection: "BookInfo",
  }
);
mongoose.model("BookInfo", BookDetailSchema);
