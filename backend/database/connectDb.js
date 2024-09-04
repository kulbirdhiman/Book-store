import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATA_BASE_URL);
    console.log(`database connected successfully ✔`)
  } catch (error) {
    console.log(error)
  }
};

export default connectDb;
