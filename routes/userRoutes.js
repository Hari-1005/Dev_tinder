import express, { Router } from "express"
import { changeUser, getAllUsers, getSingleUser } from "../controllers/userControllers.js";
import { userAuth } from "../middlewares/userAuth.js";
const router = express.Router();

router.get('/all-users', getAllUsers)
router.get('/get-single-user', userAuth, getSingleUser)
router.get('/change-user', userAuth, changeUser)

export default router;