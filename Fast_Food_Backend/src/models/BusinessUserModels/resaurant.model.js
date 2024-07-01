import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    restaurantName: {
      type: String,
      required: [true, "Restaurant name is required"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
    },
    phoneNo: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
    restaurantLicense: {
      type: String,
      required: [true, "Restaurant license file is required"],
    },
    restaurantImage: {
      type: String,
      default: "",
    },
    ownerName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusinessUser", // Reference to the BusinessUser model,
      required: true,
    },
    openingTime: {
      type: String,
      required: [true, "Opening time is required"],
    },
    closingTime: {
      type: String,
      required: [true, "Closing time is required"],
    },
    state: {
      type: String,
      required: [true, "State is required"],
      trim: true,
    },
    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
    },
    pincode: {
      type: String,
      required: [true, "Pincode is required"],
      trim: true,
      match: [/^\d{6}$/, "Pincode must be 6 digits"],
    },
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
