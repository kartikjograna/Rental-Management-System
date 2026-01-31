import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";

export default function DashboardLayout({ role, children }) {
    return (
        <div className="dashboard-layout">
            <Sidebar role={role} />

            <div className="dashboard-main">
                <Topbar role={role} />
                <div className="dashboard-content">{children}</div>
            </div>
        </div>
    );
}
