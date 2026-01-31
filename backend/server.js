import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./src/routes/auth.routes.js";
import dashboardRoutes from "./src/routes/dashboard.routes.js";
import inventoryRoutes from "./src/routes/reservation.routes.js";
import invoiceRoutes from "./src/routes/invoice.routes.js";
import paymentRoutes from "./src/routes/payment.routes.js";
import productRoutes from "./src/routes/product.routes.js";
import quotationRoutes from "./src/routes/quotation.routes.js";
import rentalRoutes from "./src/routes/rental.routes.js";
import userRoutes from "./src/routes/user.routes.js";

dotenv.config();

const start = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
};
start();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/products", productRoutes);
app.use("/api/quotations", quotationRoutes);
app.use("/api/rentals", rentalRoutes);
app.use("/api/users", userRoutes);


app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
