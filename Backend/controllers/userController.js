import User from "../models/userdbSchema.js";
import z from "zod";

// Zod Schema
const userRegisterSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  linkedin: z.string(),
});

export async function registerUser(res, req) {
  const result = userRegisterSchema.safeParse(req.body);
  if (!result.success) {
    res.status(411).json({ msg: "Zod validation failed" });
  } else {
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

      res.status(200).json({ msg: "Successfully registered!" });
    } else {
      res.status(411).json({ msg: "User with such credentials already! " });
    }
  }
}
