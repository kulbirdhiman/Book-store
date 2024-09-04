import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/connectDb.js";
import userRoutes from './routes/userRoutes.js'

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
connectDb();

//routes
app.use("/api/user",userRoutes)
const port = 5000;
app.listen(port, () => console.log(`server running on ${port}`));
