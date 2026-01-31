import Invoice from "../models/Invoice.js";

export const createInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);
    res.status(201).json(invoice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getInvoices = async (req, res) => {
  const invoices = await Invoice.find();
  res.json(invoices);
};
