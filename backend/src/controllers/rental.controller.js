import RentalOrder from "../models/RentalOrder.js";

export const createRentalOrder = async (req, res) => {
  try {
    const order = await RentalOrder.create(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getRentalOrders = async (req, res) => {
  const orders = await RentalOrder.find();
  res.json(orders);
};
