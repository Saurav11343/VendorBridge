import jwt from "jsonwebtoken";
import { ENV } from "../utils/env.js";
import { success } from "zod";

export const protect = (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(token, ENV.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    console.error("Error: auth.middleware - protect");
    return res.status(401).json({
      success: false,
      message: "unauthorized",
    });
  }
};
