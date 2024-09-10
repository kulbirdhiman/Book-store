import Category from "../model/Category.js";
import expressAsyncHandler from "express-async-handler";

const createCategory = expressAsyncHandler(async (req, res) => {
  const { name } = req.body;
  try {
    const isAreadyExits = await Category.findOne({ name });
    // console.log(isAreadyExits)
    if (isAreadyExits) {
      res.status(401).json({
        message: "category already exits",
      });
    } else {
      const createBook = await Category.create({ name });
      res.json(createBook);
    }
  } catch (error) {
    res.json(500).json({
      message: "server error",
    });
  }
});

const updateCategory = expressAsyncHandler(async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  try {
    const checkCategory = await Category.find({ name });
    if (!checkCategory) {
      res.json({
        message: "category not found",
      });
    }
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(201).json({
      message: "updated successfully",
    });
  } catch (error) {
    res.json(500).json({
      message: "server error",
    });
  }
});

const deleteCategory = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Category.findByIdAndDelete(id);
    res.status(201).json({
      message: "deleted successfully",
    });
  } catch (error) {
    res.json(500).json({
      message: "server error",
    });
  }
});
const getAllCategory = expressAsyncHandler(async (req, res) => {
  try {
    const allCategory = await Category.find();
    res.json(allCategory);
  } catch (error) {
    res.json(500).json({
      message: "server error",
    });
  }
});
export { createCategory, updateCategory, deleteCategory, getAllCategory };
