import mongoose from "mongoose";

const rfqVendorSchema = new mongoose.Schema(
  {
    rfqId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RFQ",
    },

    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
    },

    invitationStatus: {
      type: String,
      enum: ["pending", "accepted", "declined"],
      default: "pending",
    },
  },
  { timestamps: true },
);

const RFQVendor = mongoose.model("RFQVendor", rfqVendorSchema);
export default RFQVendor;
