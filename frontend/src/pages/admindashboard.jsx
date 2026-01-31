import DashboardLayout from "../layout/dashboardlayout";
import StatCard from "../components/statcard";

export default function AdminDashboard() {
    return (
        <DashboardLayout role="admin">
            <div className="stats-grid">
                <StatCard title="Total Users" value="120" />
                <StatCard title="Vendors" value="35" />
                <StatCard title="Total Revenue" value="₹2,40,000" />
                <StatCard title="Active Rentals" value="58" />
            </div>
        </DashboardLayout>
    );
}
