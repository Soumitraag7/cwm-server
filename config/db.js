import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI)
    console.log(`Connected to DB ${conn.connection.host} `);
  } catch (error) {
    console.log(`Error in DB ${error}`);
  }
}

export default connectDB;