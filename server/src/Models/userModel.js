import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"]
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 20
  },
  photo: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6
  },
  twoStepVerify: {
    type: Boolean,
    required: true,
    enum: [true, false],
    default: false
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  type: {
    type: String,
    enum: ["normalUser", "gmailUser"],
    default: "gmailUser"

  }
}, { timestamps: true });



const User = mongoose.model("User", UserSchema);
export default User;
