export default function Topbar({ role }) {
    return (
        <div className="topbar">
            <span className="role-title">
                {role.toUpperCase()} DASHBOARD
            </span>

            <div className="topbar-right">
                <span>🔔</span>
                <span>👤</span>
            </div>
        </div>
    );
}
