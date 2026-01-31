import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/client";

export default function Login({ switchToSignup }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
            try {
            const res = await api.post("/auth/login", { email, password });
            const token = res.data?.token || res.data?.accessToken || res.data?.data?.token;
            if (token) {
                localStorage.setItem("token", token);
                api.defaults.headers.common.Authorization = `Bearer ${token}`;
            }
            navigate("/admin");
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="auth-card" onSubmit={handleSubmit}>
            <h1>Rental Management<br />System</h1>
            <p className="subtitle">Welcome to our rental platform</p>

            <label>Email Address</label>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <label>Password</label>
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            {error && <p className="error">{error}</p>}

            <button className="primary-btn" type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
            </button>

            <p className="link" onClick={switchToSignup}>
                Create an account
            </p>
        </form>
    );
}
