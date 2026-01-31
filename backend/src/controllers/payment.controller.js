import Payment from "../models/Payment.js";

export const createPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    res.status(201).json(payment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getPayments = async (req, res) => {
  const payments = await Payment.find();
  res.json(payments);
};
