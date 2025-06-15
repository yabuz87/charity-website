import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // required for HTTPS in prod
    sameSite: "None", // ✅ must be None to allow cross-origin cookie
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  return token;
};
