import mongoose from "mongoose";

const quotationItemSchema = new mongoose.Schema(
  {
    quotationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quotation",
    },

    itemName: String,
    quantity: Number,
    unitPrice: Number,
    subtotal: Number,
  },
  { timestamps: true }
);

export default mongoose.model(
  "QuotationItem",
  quotationItemSchema
);