import User from "../models/userdbSchema.js";
import { Admin, SavedApplications } from "../models/adminSchema.js";
import z from "zod";

export async function getAllApplication(req, res) {
  try {
    const allApplications = await User.find();
    if (allApplications.length > 0) {
      return res
        .status(200)
        .json({ Message: "Fetched all application!", Data: allApplications });
    } else {
      return res.status(404).json({ Message: "Application not found" });
    }
  } catch (error) {
    return res.status(500).json({ Message: "Internal server error" });
  }
}

export async function deleteApplication(req, res) {
  const { id } = req.params;
  try {
    const result = await User.findByIdAndDelete(id);
    if (result) {
      return res.status(200).json({ Message: "Deleted successfully!" });
    } else {
      return res.status(404).json({ Message: "Application not found" });
    }
  } catch (err) {
    return res.status(500).json({ Message: "Internal server error" });
  }
}

export async function searchApplications(req, res) {
  try {
    const searchKeys = new RegExp(req.body.searchKeyWord, "i"); // i to make it case-insensitive
    const findSearchApplications = await User.find({
      $or: [{ name: searchKeys }, { email: searchKeys }, { phone: searchKeys }],
    });
    if (findSearchApplications.length > 0) {
      return res.status(200).json({
        Message: "Found the searched Application",
        Result: findSearchApplications,
      });
    } else {
      return res
        .status(404)
        .json({ Message: "No Application with such input found" });
    }
  } catch (err) {
    return res.status(500).json({ Message: "Internal server error" });
  }
}

// Zod validation for application coming to saved
const savedZod = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  linkedin: z.string(),
});

export async function savedApplications(req, res) {
  const result = savedZod.safeParse(req.body);
  const { name, email, phone, linkedin, resume } = req.body;
  if (!result.success) {
    return res
      .status(400)
      .json({ msg: "Zod validation failed", error: result.error.errors });
  } else {
    try {
      const alreadySaved = await SavedApplications.findOne({
        $or: [{ name: name }, { email: email }, { phone: phone }],
      });
      if (!alreadySaved) {
        const saved = await SavedApplications.create({
          name,
          email,
          phone,
          linkedin,
          resume
        });
        return res.status(200).json({
          GoodMessage: "Application saved successfully!",
          Saved: saved,
        });
      } else {
        return res
          .status(201)
          .json({ BadMessage: "This Application is already Saved!" });
      }
    } catch (error) {
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  }
}

export async function showSavedApplication(req, res) {
  try {
    const saveApplications = await SavedApplications.find();
    if (saveApplications.length > 0) {
      return res.status(200).json({
        Message: "Fetched saved applications successfully!",
        Saved: saveApplications,
      });
    } else {
      return res.status(404).json({ Message: "No saved application" });
    }
  } catch (error) {
    return res.status(500).json({ Message: "Internal server error" });
  }
}

export async function deleteSavedApplication(req, res) {
  const { id } = req.params;
  try {
    const result = await SavedApplications.findByIdAndDelete(id);
    if (result) {
      return res.status(200).json({ Message: "Deleted!" });
    } else {
      return res.status(404).json({ Message: "Application not found" });
    }
  } catch (error) {
    return res.status(500).json({ Message: "Internal server error" });
  }
}

// admin creation

export async function createAdmin(req, res) {
  try {
    const newAdmin = await Admin.create({
      name: req.body.name,
      password: req.body.password,
    });
    if (newAdmin) {
      return res.status(200).json({ Message: "Admin created!" });
    } else {
      return res.status(409).json({ Message: "Could not create Admin!" });
    }
  } catch (error) {
    return res.status(500).json({ Message: "Internal server error" });
  }
}

// admin login
import jwt from "jsonwebtoken";
export async function adminSignin(req, res) {
  try {
    const admin = await Admin.findOne({
      password: req.body.password,
    });
    if (admin) {
      const adminId = admin._id;
      const token = jwt.sign({ adminId }, process.env.JWT_SECRET);
      return res.status(200).json({ Admin_Token: token });
    } else {
      return res.status(400).json({ Message: "Invalid credentials" });
    }
  } catch (error) {
    return res.status(500).json({ Message: "Internal server error" });
  }
}

export function istokenSend (req,res) {
 return res.status(200).json({Message: "Valid token"})
}