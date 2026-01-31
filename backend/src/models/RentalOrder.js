import mongoose from "mongoose";

const rentalOrderSchema = new mongoose.Schema(
  {
    quotation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quotation",
    },

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    vendor: {
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
      enum: ["confirmed", "picked", "returned", "cancelled"],
      default: "confirmed",
    },

    totalAmount: Number,
  },
  { timestamps: true }
);

export default mongoose.model("RentalOrder", rentalOrderSchema);
