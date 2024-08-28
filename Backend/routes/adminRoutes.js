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
  verifyToken
} from "../controllers/adminControllers.js";
import { authmiddleware } from "../middlewares/authmiddleware.js";
const router = express.Router();
router.post("/create-admin",  createAdmin);
router.post("/admin-signin",  adminSignin);

router.get("/applications", getAllApplication);
router.delete("/deleteApplication/:id", authmiddleware, deleteApplication);
router.post("/finding", authmiddleware, searchApplications);
router.post("/bookmark", authmiddleware, savedApplications);
router.get("/savedApplications", authmiddleware, showSavedApplication);
router.delete("/deleteBookmark/:id", authmiddleware, deleteSavedApplication);
router.get("/admin/verify-token" , authmiddleware, verifyToken)

export default router;
