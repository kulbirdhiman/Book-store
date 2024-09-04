import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  deleteUserById,
  getUserById,
  updateUserById,
} from "../controllers/userController.js";
import {authUser} from '../middlewares/authHandler.js'
import express from "express";

const router = express.Router();
router.route("/").post(createUser).get(getAllUsers)
router.route("/login").post(loginUser)
router.route("/logut").post(logoutCurrentUser)
router.route("/profile").get(authUser, getCurrentUserProfile)
router.route("/update").put(updateCurrentUserProfile)

export default router;
