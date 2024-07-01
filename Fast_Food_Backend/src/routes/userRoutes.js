import express from "express";
import { createUser } from "../controllers/UserControllers/userController.js"; // Adjust the path as needed

const router = express.Router();

// POST /api/users
router.post("/", createUser);

export default router;
