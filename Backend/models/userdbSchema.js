import mongoose from "mongoose";
const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", user)

export default User