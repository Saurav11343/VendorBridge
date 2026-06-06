import mongoose from "mongoose";

const purchaseOrderSchema = new mongoose.Schema(
  {
    poNumber: {
      type: String,
      unique: true,
    },

    quotationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quotation",
    },

    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
    },

    amount: Number,

    status: {
      type: String,
      enum: [
        "draft",
        "issued",
        "completed",
        "cancelled",
      ],
      default: "issued",
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "PurchaseOrder",
  purchaseOrderSchema
);