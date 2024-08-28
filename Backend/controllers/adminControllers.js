import User from "../models/userdbSchema.js";
import { SavedApplications } from "../models/adminSchema.js";
import z from "zod";

export async function getAllApplication(req, res) {
  try {
    const allApplications = await User.find();
    return res
      .status(200)
      .json({ Message: "Fetched all application!", Data: allApplications });
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
  try {
    const { name, email, phone, linkedin } = req.body;
    const result = savedZod.safeParse(req.body);
    if (!result.success) {
      return res
        .status(400)
        .json({ msg: "Zod validation failed", error: result.error.errors });
    } else {
      const alreadySaved = await SavedApplications.findOne({
        $or: [{ name: name }, { email: email }, { phone: phone }],
      });
      if (!alreadySaved) {
        await SavedApplications.create({
          name,
          email,
          phone,
          linkedin,
        });
      } else {
        return res
          .status(201)
          .json({ msg: "User with such credentials already exists in db!" });
      }
    }
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}
