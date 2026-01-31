export default function Login({ switchToSignup }) {
    return (
        <div className="auth-card">
            <h1>Rental Management<br />System</h1>
            <p className="subtitle">Welcome to our rental platform</p>

            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" />

            <button className="primary-btn">Login</button>

            <p className="link" onClick={switchToSignup}>
                Create an account
            </p>
        </div>
    );
}
