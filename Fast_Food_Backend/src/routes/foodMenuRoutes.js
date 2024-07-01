import express from "express";
import { createFoodItem } from "../controllers/BusinessControllers/foodMenuController.js";

const router = express.Router();

// Route to create a food item
router.post("/", createFoodItem);

export default router;
