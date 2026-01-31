import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
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
