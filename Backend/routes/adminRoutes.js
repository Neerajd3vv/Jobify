import express from "express"
import {getAllApplication} from "../controllers/adminControllers.js"
import {deleteApplication} from "../controllers/adminControllers.js"
import {searchApplications} from "../controllers/adminControllers.js"
const router =  express.Router()
router.get("/applications" , getAllApplication)
router.delete("/deleteApplication/:id" , deleteApplication)
router.post("/finding" , searchApplications)

export default router