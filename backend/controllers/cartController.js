import expressAsyncHandler from "express-async-handler";
import Book from "../model/Book.js";
import Cart from "../model/Cart.js";

const addToCart = expressAsyncHandler(async (req, res) => {
  const { quantity } = req.body;
  const { id } = req.params; // Book ID

  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    let cart = await Cart.findOne({ userId: req.user._id, item: id });
    let totalPrice = quantity * book.price;

    if (cart) {
      cart.quantity += quantity;
      cart.totalPrice = cart.quantity * book.price;
    } else {
      cart = await Cart.create({
        userId: req.user._id,
        item: id,
        quantity,
        totalPrice,
      });
    }
    res.status(201).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong: " + error.message });
  }
});
const removeToCart = expressAsyncHandler(async(req,res)=>{
  const {id} = req.params
  try {
    const cart = await Cart.findByIdAndDelete(id);
    res.json({
      message : "book removed successfuly"
    })
  } catch (error) {
    throw new Error("cart not found")
  }
});
const getcart = expressAsyncHandler(async (req, res) => {
  try {
    const userCart = await Cart.find({ userId: req.user._id });
    if (!userCart) throw new Error("something going wrong");
    res.json(userCart);
  } catch (error) {
    res.status(401).json({
      error: error,
    });
  }
});

export { addToCart, removeToCart ,getcart};
