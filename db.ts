import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/chatdb");
    console.log("Connected to mongoDB");
  } catch (e) {
    console.log(e);
  }
};

export default connectDB;
