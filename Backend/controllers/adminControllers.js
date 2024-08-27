import User from "../models/userdbSchema.js";

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
