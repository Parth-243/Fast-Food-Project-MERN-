import User from "../../models/UserModels/user.model.js"; // Adjust the import path as needed

// Create a new user
export const createUser = async (req, res) => {
  const {
    fullName,
    email,
    phoneNo,
    userName,
    password,
    gender,
    address,
    state,
    district,
    pincode,
  } = req.body;

  // Validate required fields
  if (
    !fullName ||
    !email ||
    !phoneNo ||
    !userName ||
    !password ||
    !gender ||
    !address ||
    !state ||
    !district ||
    !pincode
  ) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Create a new user instance
    const newUser = new User({
      fullName,
      email,
      phoneNo,
      userName,
      password,
      gender,
      address,
      state,
      district,
      pincode,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Respond with the created user (excluding password)
    res.status(201).json({
      id: savedUser._id,
      fullName: savedUser.fullName,
      email: savedUser.email,
      phoneNo: savedUser.phoneNo,
      userName: savedUser.userName,
      gender: savedUser.gender,
      address: savedUser.address,
      state: savedUser.state,
      district: savedUser.district,
      pincode: savedUser.pincode,
    });
  } catch (error) {
    // Handle errors (e.g., validation, duplicate email/username)
    if (error.code === 11000) {
      // Duplicate key error (email or username already exists)
      const field = Object.keys(error.keyValue)[0];
      res.status(409).json({ message: `The ${field} is already in use.` });
    } else {
      res
        .status(500)
        .json({
          message: "Server error. Please try again later.",
          error: error.message,
        });
    }
  }
};
