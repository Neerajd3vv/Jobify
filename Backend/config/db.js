import mongoose from "mongoose";

export default async function connectionToMongodb() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
   });
    console.log("MonogDB connected successfully!");
  } catch (error) {
    console.error("Error while connecting to MonogDb", error);
    process.exit(1);
  }
}
