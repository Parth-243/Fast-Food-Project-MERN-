// models/BusinessUserModels/foodMenu.model.js
import mongoose from "mongoose";

const foodMenuSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: [true, "Item name is required"],
      trim: true,
    },
    ingredients: [
      {
        type: String,
        required: [true, "At least one ingredient is required"],
        trim: true,
      },
    ],
    foodCategory: {
      type: String,
      required: [true, "Food category is required"],
      enum: [
        "Pizza",
        "Burger",
        "Noodles",
        "Desserts",
        "Ice cream",
        "French fries",
        "Soft drinks",
      ],
    },
    foodImage: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    restaurantName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    ownerName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusinessUser",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const FoodMenu = mongoose.model("FoodMenu", foodMenuSchema);

export default FoodMenu;
