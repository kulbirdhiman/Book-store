import express from "express";
import {
  addToCart,
  getcart,
  removeToCart,
} from "../controllers/cartController.js";
import { authUser } from "../middlewares/authHandler.js";
const router = express.Router();
router.route("/:id").post(authUser, addToCart);
router.route("/").get(authUser, getcart);
router.route("/delete/:id").delete(removeToCart);
export default router;
