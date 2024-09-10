import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/connectDb.js";
// import routes
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import cartRoutes from "./routes/cartRoute.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
connectDb();

//routes
app.use("/api/user", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/cart",cartRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on ${port}`));
