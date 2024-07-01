import express from "express";
import { createBusinessUser } from "../controllers/BusinessControllers/businessUserController.js"; // Import the createBusinessUser controller

const router = express.Router();

router.post("/", createBusinessUser); // POST /api/business-users

export default router;
