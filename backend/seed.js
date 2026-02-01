// backend/seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./src/models/User.js";
import Product from "./src/models/Product.js";

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    
    // Create users
    const hashedPassword = await bcrypt.hash("password123", 10);
    
    const admin = await User.create({
      name: "Admin User",
      email: "admin@test.com",
      password: hashedPassword,
      role: "admin",
    });
    
    const vendor = await User.create({
      name: "Vendor User",
      email: "vendor@test.com",
      password: hashedPassword,
      role: "vendor",
      companyName: "Test Rentals Inc",
    });
    
    const customer = await User.create({
      name: "Customer User",
      email: "customer@test.com",
      password: hashedPassword,
      role: "customer",
    });
    
    // Create products
    await Product.create([
      {
        name: "Canon Camera",
        description: "Professional DSLR camera",
        category: "Electronics",
        pricePerDay: 50,
        availableQuantity: 5,
        vendor: vendor._id,
      },
      {
        name: "Wedding Tent",
        description: "Large outdoor tent for events",
        category: "Events",
        pricePerDay: 200,
        availableQuantity: 3,
        vendor: vendor._id,
      },
      {
        name: "Projector",
        description: "HD projector for presentations",
        category: "Electronics",
        pricePerDay: 75,
        availableQuantity: 10,
        vendor: vendor._id,
      },
    ]);
    
    console.log("✅ Seed data created successfully");
    console.log("Login credentials:");
    console.log("Admin: admin@test.com / password123");
    console.log("Vendor: vendor@test.com / password123");
    console.log("Customer: customer@test.com / password123");
    
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
};

seedData();