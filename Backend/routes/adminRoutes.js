import express from "express";
import { getAllApplication } from "../controllers/adminControllers.js";
import {
  searchApplications,
  savedApplications,
  deleteApplication,
  showSavedApplication,
  deleteSavedApplication,
  createAdmin,
  adminSignin,
  istokenSend,
  searcSavedhApplications
} from "../controllers/adminControllers.js";
import { verifyToken } from "../middlewares/authmiddleware.js";
const router = express.Router();
router.post("/create-admin",  createAdmin);
router.post("/login",  adminSignin);

router.get("/applications", verifyToken, getAllApplication);
router.delete("/deleteApplication/:id",  deleteApplication);
router.post("/finding",  searchApplications);
router.post("/searchBookmark",  searcSavedhApplications);
router.post("/bookmark",  savedApplications);
router.get("/savedApplications",  showSavedApplication);
router.delete("/deleteBookmark/:id",  deleteSavedApplication);
router.get("/istokensend" , verifyToken , istokenSend)

export default router;
