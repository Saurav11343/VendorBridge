import jwt from "jsonwebtoken";
import { ENV } from "./env.js";

const { JWT_SECRET, NODE_ENV } = ENV;

const cookieOptions = {
  httpOnly: true,
  secure: NODE_ENV === "production",
  sameSite: NODE_ENV === "production" ? "none" : "lax",
};

export const generateToken = (userId, res) => {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not set");
  }

  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    ...cookieOptions,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};

export const clearToken = (res) => {
  res.clearCookie("jwt", cookieOptions);
};
