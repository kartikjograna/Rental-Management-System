import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error("MONGO_URI is not defined. Set it in your .env file.");
    throw new Error("MONGO_URI is not defined");
  }

  try {
    await mongoose.connect(uri);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    throw err;
  }
};

export default connectDB;
