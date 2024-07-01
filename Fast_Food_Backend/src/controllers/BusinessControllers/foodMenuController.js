// controllers/BusinessControllers/foodMenuController.js
import FoodMenu from "../../models/BusinessUserModels/foodMenu.model.js";
import Restaurant from "../../models/BusinessUserModels/resaurant.model.js";
import BusinessUser from "../../models/BusinessUserModels/businessUser.model.js";

export const createFoodItem = async (req, res) => {
  // return res.json({ status: 200, test: "test" });
  try {
    const {
      itemName,
      ingredients,
      foodCategory,
      foodImage,
      price,
      restaurantName, // Should be a valid Restaurant ID
      ownerName, // Should be a valid BusinessUser ID
    } = req.body;

    // Verify that the restaurantName (restaurant ID) exists
    const restaurant = await Restaurant.findById(restaurantName);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    // Verify that the ownerName (business user ID) exists
    const businessUser = await BusinessUser.findById(ownerName);
    if (!businessUser) {
      return res.status(404).json({ message: "BusinessUser not found" });
    }

    // Create new FoodMenu entry
    const newFoodItem = new FoodMenu({
      itemName,
      ingredients,
      foodCategory,
      foodImage,
      price,
      restaurantName, // Set the restaurantName to the ID of the Restaurant
      ownerName, // Set the ownerName to the ID of the BusinessUser
    });

    // Save to database
    const savedFoodItem = await newFoodItem.save();

    // Populate references in the response
    await savedFoodItem.populate("restaurantName", "restaurantName address");
    await savedFoodItem.populate("ownerName", "fullname email userName");

    res.status(201).json(savedFoodItem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating food item", error: error.message });
  }
};
