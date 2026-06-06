import mongoose from "mongoose";

const rfqItemSchema = new mongoose.Schema(
  {
    rfqId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RFQ",
    },

    itemName: String,
    quantity: Number,
    unit: String,
    specification: String,
  },
  { timestamps: true },
);

const RFQItem = mongoose.model("RFQItem", rfqItemSchema);
export default RFQItem;
