import Book from "../model/Book.js";
import expressAsyncHandler from "express-async-handler";
import uploadimage from "../utils/uploadClodnariy.js";
const createBook = expressAsyncHandler(async (req, res) => {
  const { name, des, price, category } = req.body;
  try {
    // Check if the book already exists
    const isExits = await Book.findOne({ name });
    if (isExits) {
      return res.status(400).json({
        message: "Book already exists",
      });
    }
    // Create the new book
    const image_path = req.file.path;
    const image = await uploadimage(image_path);
    const book = await Book.create({
      name,
      price,
      image: image.url,
      auther: req.user._id, // Author ID from req.user (ensure you have the auth middleware applied)
      descption: des,
      category,
    });
    const populatedBook = await Book.findById(book._id).populate("auther category");
    res.status(201).json(populatedBook);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

const fetchAllBooks = expressAsyncHandler(async (req, res) => {
  try {
    // Fetch all books and populate the author details
    const allBooks = await Book.find().populate("auther category"); // Ensure field matches in schema
    res.json(allBooks);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

const deletebook = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    let book = await Book.findByIdAndDelete(id);
    if (!book) {
      res.status(401).json({
        message: "book not found",
      });
    }
    res.status(203).json({
      message: "book delted successfully",
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});
const findBook = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) res.status(404).json({ message: "book not found" });
    res.json(book);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});
const findRecnetBook = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.find().limit(10).sort({ createdat: -1 });
    if (!book) res.status(404).json({ message: "book not found" });
    res.json(book);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});
const updateBook = expressAsyncHandler(async (req, res) => {
  const { image, name, des, price } = req.body;

  try {
    // Check if the book exists
    let isBookExists = await Book.findById(req.params.id);
    if (!isBookExists) {
      return res.status(404).json({ message: "Book not found" });
    }

    // If an image is provided in the request (e.g., via a file upload), handle it
    let imageUrl = isBookExists.image; // Default to existing image
    if (req.file && req.file.path) {
      const imagePath = req.file.path;
      imageUrl = await uploadimage(imagePath); // Upload the new image and get the URL
    }

    // Update the book with new or existing data
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        name: name || isBookExists.name,           // Update name if provided, otherwise keep the existing one
        image: imageUrl,                          // Use the new image or keep the existing one
        description: des || isBookExists.descption, // Fixed typo 'description'
        price: price || isBookExists.price,       // Update price if provided
      },
      { new: true }  // Return the updated document
    ).populate("category auther");

    // Send back the updated book in the response
    res.status(200).json({
      message: "Book updated successfully",
      book: updatedBook,
    });

  } catch (error) {
    // Catch any error and send an appropriate message
    console.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export { createBook, fetchAllBooks, deletebook, updateBook, findRecnetBook };
