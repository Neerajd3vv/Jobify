import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(403).json({ message: "No token provided." });
  }
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "No token provided." });
  }
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.adminId = verified.adminId; // Attach the decoded ID to the request object
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized! Invalid token." });
  }
}
