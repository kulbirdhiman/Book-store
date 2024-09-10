import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();
const config = cloudinary.config({
  cloud_name: "dysmaq1jb",
  api_key: process.env.APIKEY,
  api_secret: process.env.API_SERCRET,
});

const uploadimage = async (localPath) => {
  const upload = await cloudinary.uploader.upload(localPath);
  fs.unlinkSync(localPath);
  return upload;
};

export default uploadimage;
