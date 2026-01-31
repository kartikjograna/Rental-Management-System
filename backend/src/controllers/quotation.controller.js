import Quotation from "../models/QuotationModel.js";

export const createQuotation = async (req, res) => {
  try {
    const quotation = await Quotation.create(req.body);
    res.status(201).json(quotation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getQuotations = async (req, res) => {
  const quotations = await Quotation.find();
  res.json(quotations);
};

