import User from "../models/userdbSchema.js";
import z from "zod";

// Zod Schema
const userRegisterSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  linkedin: z.string(),
});

export async function registerUser(req, res) {
  const result = userRegisterSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ msg: "Zod validation failed" , error: result.error.errors });
  } else {
    try {
      // check if user with such info. already exists
      const checkUser = await User.findOne({
        $or: [
          { phone: req.body.phone },
          { email: req.body.email },
          { linkedin: req.body.linkedin },
        ],
      });
      if (!checkUser) {
        await User.create({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          linkedin: req.body.linkedin,
        });

        return res.status(201).json({ msg: "Successfully registered!" });
      } else {
        return res
          .status(409)
          .json({ msg: "User with such credentials already exists in db!" });
      }
    } catch (error) {
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  }
}
