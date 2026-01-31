import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RentalOrder",
    },

    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },

    quantity: { type: Number, required: true },

    status: {
      type: String,
      enum: ["reserved", "picked", "returned"],
      default: "reserved",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reservation", reservationSchema);
