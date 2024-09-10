import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  descption: { type: String, required: true },
  auther: { type: String, required: true, ref: "User" },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  category : { type : mongoose.Schema.Types.ObjectId,
    ref : "Category"
  }
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
