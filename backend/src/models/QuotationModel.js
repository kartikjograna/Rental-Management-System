import mongoose from "mongoose";

const quotationSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: Number,
        startDate: Date,
        endDate: Date,
        price: Number,
      },
    ],

    status: {
      type: String,
      enum: ["draft", "confirmed"],
      default: "draft",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quotation", quotationSchema);
