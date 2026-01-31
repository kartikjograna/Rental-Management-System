import { useState } from "react";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div className="auth-bg">
      {page === "login" ? (
        <Login switchToSignup={() => setPage("signup")} />
      ) : (
        <Signup switchToLogin={() => setPage("login")} />
      )}
    </div>
  );
}

export default App;
