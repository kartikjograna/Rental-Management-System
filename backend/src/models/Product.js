import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    description: String,

    isRentable: { type: Boolean, default: true },

    pricePerHour: Number,
    pricePerDay: Number,
    pricePerWeek: Number,

    totalQuantity: { type: Number, required: true },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // vendor
      required: true,
    },

    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
