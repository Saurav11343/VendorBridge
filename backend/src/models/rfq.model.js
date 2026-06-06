import mongoose from "mongoose";

const rfqSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    deadline: Date,
    attachment: String,

    status: {
      type: String,
      enum: [
        "draft",
        "published",
        "closed",
        "cancelled",
      ],
      default: "draft",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("RFQ", rfqSchema);