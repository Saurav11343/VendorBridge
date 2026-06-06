import express from "express";
import {
  createVendor,
  getAllVendors,
  getVendorById,
  updateVendor,
  updateVendorStatus,
  deleteVendor,
  searchVendors
} from "../controllers/vendor.controller.js";
import {
  vendorSchema
} from "../validator/vendor.validator.js";
import { validate } from "../middleware/validate.middleware.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/createVendor",validate(vendorSchema),createVendor);
router.get("/getAllVendors", protect, getAllVendors);
router.get("/getVendor/:id", protect, getVendorById);
router.put("/updateVendor/:id", protect, updateVendor);
router.patch("/updateVendorStatus/:id", protect, updateVendorStatus);
router.delete("/deleteVendor/:id", protect, deleteVendor);
router.get("/search", protect, searchVendors);

export default router;