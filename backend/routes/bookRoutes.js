import express from "express";
import {
  createBook,
  fetchAllBooks,
  deletebook,
  updateBook,
  findRecnetBook,
} from "../controllers/BookController.js";
import { authUser, authrizedAtAdmin } from "../middlewares/authHandler.js";
import upload from "../middlewares/multer.js";
const router = express.Router();
router
  .route("/")
  .post(authUser, authrizedAtAdmin, upload.single("image"), createBook)
  .get(fetchAllBooks);
router.route("/delete/:id").delete(deletebook);
router.route("/update/:id").put(updateBook);
router.route("/recent").get(authrizedAtAdmin, findRecnetBook);

export default router;
