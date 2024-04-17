import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connect To MongoDB Database ${conn.connection.host} `.bgMagenta.white);
  } catch (error) {
    console.log(`Error in mongoDB ${error}`);
  }
};

export default connectDB;
