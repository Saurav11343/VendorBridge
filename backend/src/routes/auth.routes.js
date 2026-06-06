import express from "express";
import {
  changePassword,
  login,
  logout,
  me,
  signup,
} from "../controllers/auth.controller.js";
import {
  changePasswordSchema,
  loginSchema,
  signupSchema,
} from "../validator/auth.validator.js";
import { validate } from "../middleware/validate.middleware.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", validate(loginSchema), login);
router.post("/signup", validate(signupSchema), signup);
router.post("/logout", logout);
router.put(
  "/changePassword",
  protect,
  validate(changePasswordSchema),
  changePassword,
);
router.get("/me", protect,  me);

export default router;
