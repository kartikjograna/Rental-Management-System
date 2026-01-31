import DashboardLayout from "../layout/dashboardlayout";
import StatCard from "../components/statcard";

export default function CustomerDashboard() {
    return (
        <DashboardLayout role="customer">
            <div className="stats-grid">
                <StatCard title="My Rentals" value="3" />
                <StatCard title="Pending Returns" value="1" />
                <StatCard title="Total Spent" value="₹12,500" />
                <StatCard title="Invoices" value="5" />
            </div>
        </DashboardLayout>
    );
}
