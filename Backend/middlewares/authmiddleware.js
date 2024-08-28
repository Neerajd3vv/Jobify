import jwt from "jsonwebtoken";
export function authmiddleware(req, res, next) {
  const token = req.cookies.token_Jobify;
  if (!token) {
    return res.status(401).json({ Message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.adminToken = decoded;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(401).json({ Message: "Invalid or Expired Token" });
  }
}

