import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    invoiceNumber: {
      type: String,
      unique: true,
    },

    poId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PurchaseOrder",
    },

    subtotal: Number,
    gst: Number,
    totalAmount: Number,

    status: {
      type: String,
      enum: [
        "pending",
        "paid",
        "cancelled",
      ],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "Invoice",
  invoiceSchema
);