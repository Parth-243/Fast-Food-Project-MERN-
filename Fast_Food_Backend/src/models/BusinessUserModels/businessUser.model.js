import mongoose from "mongoose";
import bcrypt from "bcrypt";

const businessUserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      // required: [true, 'Full name is required'],
      trim: true,
      minlength: [3, "Full name must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Invalid email format"],
    },
    userName: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
      minlength: [3, "Username must be at least 3 characters long"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    phoneNo: {
      type: String,
      // required: [true, 'Phone number is required'],
      unique: true,
      trim: true,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
    userImage: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      // required: [true, 'Gender is required'],
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
businessUserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password for login
businessUserSchema.methods.comparePassword = async function (
  candidatePassword
) {
  return bcrypt.compare(candidatePassword, this.password);
};

const BusinessUser = mongoose.model("BusinessUser", businessUserSchema);

export default BusinessUser;
