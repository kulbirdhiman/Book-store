import { Router } from "express";
import {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategory,
} from "../controllers/categoryController.js";

const router = Router();

router.route("/").post(createCategory).get(getAllCategory);
router.route("/update/:id").put(updateCategory);
router.route("/delete/:id").delete(deleteCategory);

export default router;
