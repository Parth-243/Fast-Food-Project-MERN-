import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js"; // Import user routes
import businessUserRoutes from "./routes/businessUserRoutes.js"; // Import business user routes
import restaurantRoutes from "./routes/restaurantRoutes.js"; // Import restaurant routes,
import foodMenuRoutes from "./routes/foodMenuRoutes.js"; // Import the food menu routes
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Use user routes
app.use("/api/users", userRoutes); // Register user routes
app.use("/api/business-users", businessUserRoutes); // Register business user routes
app.use("/api/restaurants", restaurantRoutes); // Register restaurant routes
app.use("/api/food-menu", foodMenuRoutes); // Register the food menu routes
export { app };
