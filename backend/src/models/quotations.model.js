import mongoose from "mongoose";

const quotationSchema = new mongoose.Schema(
  {
    rfqId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RFQ",
    },

    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
    },

    totalAmount: Number,
    deliveryDays: Number,
    notes: String,

    status: {
      type: String,
      enum: [
        "submitted",
        "approved",
        "rejected",
      ],
      default: "submitted",
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "Quotation",
  quotationSchema
);