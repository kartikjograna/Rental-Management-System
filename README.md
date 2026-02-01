# 🏠 Rental Management System

A full-stack **Rental Management System** built using **MERN stack** that allows users to rent products, manage rentals, generate invoices, and view dashboards.  
This project was designed with **real-world business workflows** in mind and follows a clean **backend + frontend architecture**.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- User login & registration
- JWT-based authentication
- Protected routes
- Role-based access (Admin / User)

### 📦 Product Management
- View rentable products
- Pricing per day
- Product availability tracking

### 🔄 Rental Workflow
- Create quotations
- Convert quotations to rentals
- Track rental status (active, returned, overdue)

### 🧾 Invoice & Payments
- Invoice generation
- Rental billing
- Payment tracking

### 📊 Dashboard
- Revenue overview
- Rental statistics
- Inventory utilization

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Axios
- Context API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- CORS configuration

---

## 📂 Project Structure

Rental-Management-System/
│
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ ├── package.json
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── api/
│ │ ├── auth/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── package.json
│ └── vite.config.js
│
└── README.md
---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173

---

## ▶️ How to Run the Project

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/rental-management-system.git
cd rental-management-system

### 2️⃣ Start Backend

cd backend
npm install
npm run dev

Backend runs on:

http://localhost:5000

### 3️⃣ Start Frontend

cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173

# Contributors

Arshad Khoja
Kartik Jograna
Yagnik Bhadiyadra
Dev Lad