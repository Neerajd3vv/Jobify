import express from "express";
import cors from "cors";
import connectionToMongodb from "./config/db.js";
import dotenv from "dotenv";
import router from "./routes/userRoutes.js";
import adminRouter from "./routes/adminRoutes.js";

//Secure way to access environment variable
dotenv.config();

// initializing express
const app = new express();
app.use(cors());
app.use(express.json());


// connected to mongodb
connectionToMongodb();

app.use("/user/v1", router);
app.use("/admin", adminRouter);

// PORT where this express app is litening
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
