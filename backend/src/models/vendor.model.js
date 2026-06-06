import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema(
  {
    companyName: String,
    contactPerson: String,

    email: {
      type: String,
      unique: true,
    },

    phone: String,
    gstNumber: String,
    category: String,
    address: String,

    rating: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["active", "inactive", "blocked"],
      default: "active",
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Vendor = mongoose.model("Vendor", vendorSchema);
export default Vendor;
