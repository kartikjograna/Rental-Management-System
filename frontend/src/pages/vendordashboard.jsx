import DashboardLayout from "../layout/dashboardlayout";
import StatCard from "../components/statcard";

export default function VendorDashboard() {
    return (
        <DashboardLayout role="vendor">
            <div className="stats-grid">
                <StatCard title="My Products" value="18" />
                <StatCard title="Active Rentals" value="9" />
                <StatCard title="Monthly Revenue" value="₹48,000" />
                <StatCard title="Late Returns" value="2" />
            </div>
        </DashboardLayout>
    );
}
