import mongoose from "mongoose";

const approvalSchema = new mongoose.Schema(
  {
    quotationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quotation",
    },

    managerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    status: {
      type: String,
      enum: [
        "pending",
        "approved",
        "rejected",
      ],
      default: "pending",
    },

    remarks: String,
  },
  { timestamps: true }
);

export default mongoose.model(
  "Approval",
  approvalSchema
);