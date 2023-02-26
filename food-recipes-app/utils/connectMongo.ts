import mongoose from "mongoose";

mongoose.set('strictQuery', false);
const connectMongo = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/myapp");
};

export default connectMongo;
