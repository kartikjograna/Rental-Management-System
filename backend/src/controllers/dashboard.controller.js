import RentalOrder from "../models/RentalOrder.js";
import Payment from "../models/Payment.js";

export const overview = async (req, res) => {
  const totalRentals = await RentalOrder.countDocuments();
  const totalPayments = await Payment.countDocuments();

  res.json({ totalRentals, totalPayments });
};

