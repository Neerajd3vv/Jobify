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

const allowedOrigins = ["https://jobify-ecru.vercel.app" , "http://localhost:5173"];

app.use(
  cors({
    origin: allowedOrigins,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",

  })
);
// to serve static thing
app.use("/resume", express.static("resume"));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// connected to mongodb
connectionToMongodb();

app.use("/user/v1", router);
app.use("/admin", adminRouter);

// PORT where this express app is litening
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
