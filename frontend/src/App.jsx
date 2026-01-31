import { useState } from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/admindashboard";
import VendorDashboard from "./pages/vendordashboard";
import CustomerDashboard from "./pages/customerdashboard";
function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      <Routes>
        <Route path="/" element={


          <div className="auth-bg">
            {page === "login" ? (
              <Login switchToSignup={() => setPage("signup")} />
            ) : (
              <Signup switchToLogin={() => setPage("login")} />
            )}
          </div>
        } />



          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/vendor" element={<VendorDashboard />} />
          <Route path="/customer" element={<CustomerDashboard />} />
      </Routes>
    </>
  );
}

export default App;

