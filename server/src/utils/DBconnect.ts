import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URL = process.env.MONGO_URI || "";

export  const DBconnect = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database connected");
  } catch (error) {
    console.error("Error in DB connection:", error);
  }
};

export default DBconnect;
