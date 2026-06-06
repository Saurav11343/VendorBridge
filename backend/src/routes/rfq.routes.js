import express from "express";
import { createRFQ } from "../controllers/rfq.controller.js";
import { createRFQSchema } from "../validator/rfq.validator.js";
import { validate } from "../middleware/validate.middleware.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createRFQ", validate(createRFQSchema),createRFQ);

export default router;