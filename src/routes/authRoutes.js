import express from "express";
import { register } from "../controllers/authcontrol.js";

const router = express.Router();

router.post("/register", register);

export default router;