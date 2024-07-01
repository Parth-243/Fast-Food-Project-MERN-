import BusinessUser from "../../models/BusinessUserModels/businessUser.model.js";

// Create a new business user
export const createBusinessUser = async (req, res) => {
  const { fullname, email, userName, password, phoneNo, userImage, gender } =
    req.body;

  // Validate required fields
  if (!fullname || !email || !userName || !password || !phoneNo || !gender) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Create a new business user instance
  const newBusinessUser = new BusinessUser({
    fullname,
    email,
    userName,
    password,
    phoneNo,
    userImage: userImage || "", // Set default value if userImage is not provided,
    gender,
  });

  try {
    // Save the business user to the database
    const savedBusinessUser = await newBusinessUser.save();
    // Respond with the created business user (excluding password)
    res.status(201).json({
      id: savedBusinessUser._id,
      fullname: savedBusinessUser.fullname,
      email: savedBusinessUser.email,
      userName: savedBusinessUser.userName,
      phoneNo: savedBusinessUser.phoneNo,
      userImage: savedBusinessUser.userImage,
      gender: savedBusinessUser.gender,
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
        .json({ message: "Server error. Please try again later." });
    }
  }
};
