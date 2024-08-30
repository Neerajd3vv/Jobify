import User from "../models/userdbSchema.js";

export async function registerUser(req, res) {
  try {
    // Check if user with such info. already exists
    const checkUser = await User.findOne({
      $or: [
        { phone: req.body.phone },
        { email: req.body.email },
        { linkedin: req.body.linkedin },
      ],
    });

    if (checkUser) {
      return res
        .status(409)
        .json({ msg: "User with such credentials already exists in db!" });
    }

    await User.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      linkedin: req.body.linkedin,
      resume: req.file.filename,
    });

    return res.status(201).json({ msg: "Successfully registered!" });
  } catch (error) {
    console.error("Error in registerUser:", error);
    return res
      .status(500)
      .json({ msg: "Internal Server Error", error: error.message });
  }
}
