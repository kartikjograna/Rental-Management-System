// models/Payment.js
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    invoice: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Invoice",
      required: true,
    },

    amount: { type: Number, required: true },

    method: {
      type: String,
      enum: ["online", "cash", "upi"],
      default: "online",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
