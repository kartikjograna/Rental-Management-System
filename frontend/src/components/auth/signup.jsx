export default function Signup({ switchToLogin }) {
    return (
        <div className="auth-card">
            <h1>Create Account</h1>
            <p className="subtitle">Join our rental platform</p>

            <label>Full Name</label>
            <input type="text" />

            <label>Email Address</label>
            <input type="email" />

            <label>Company Name</label>
            <input type="text" />

            <label>GSTIN</label>
            <input type="text" />

            <label>Password</label>
            <input type="password" />

            <label>Confirm Password</label>
            <input type="password" />

            <button className="primary-btn">Create Account</button>

            <p className="link" onClick={switchToLogin}>
                Already have an account?
            </p>
        </div>
    );
}
