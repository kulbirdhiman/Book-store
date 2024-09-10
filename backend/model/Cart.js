import mongoose from "mongoose";


const cartSchema = new mongoose.Schema(
  {
    item : {type : mongoose.Schema.Types.ObjectId,
      ref : "Book"
    },
    quantity : { type : Number , default : 1 , required : true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    totalPrice : { type : Number , default : 0 , required : true}
  },
  { timestamps: true }
);
const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
