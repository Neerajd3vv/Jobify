import express from "express"
import { registerUser,  } from "../controllers/userController.js"
const router =  express.Router()
import upload from "../config/multerConfig.js"

router.post("/register", upload.single('resume') ,  registerUser)

export default router