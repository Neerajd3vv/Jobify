import mongoose from "mongoose";

const admin = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const adminsaveApplications = new mongoose.Schema({
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
});

export const Admin = mongoose.model("Admin", admin);
export const SavedApplications = mongoose.model(
  "SavedApplications",
  adminsaveApplications
);
