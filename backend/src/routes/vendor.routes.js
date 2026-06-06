import express from "express";
import {
  createVendor,
  getAllVendors,
  getVendorById,
  updateVendor,
  updateVendorStatus,
  deleteVendor,
  searchVendors,
} from "../controllers/vendor.controller.js";
import { vendorSchema } from "../validator/vendor.validator.js";
import { validate } from "../middleware/validate.middleware.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createVendor", validate(vendorSchema), createVendor);
router.get("/getAllVendors", getAllVendors);
router.get("/getVendor/:id", validate(vendorSchema), getVendorById);
router.put("/updateVendor/:id", validate(vendorSchema), updateVendor);
router.patch(
  "/updateVendorStatus/:id",
  validate(vendorSchema),
  updateVendorStatus,
);
router.delete("/deleteVendor/:id", deleteVendor);
router.get("/search", validate(vendorSchema), searchVendors);

export default router;
