export default function Sidebar({ role }) {
    return (
        <div className="sidebar">
            <h2 className="logo">Rental ERP</h2>

            {role === "admin" && (
                <>
                    <p>Dashboard</p>
                    <p>Users</p>
                    <p>Vendors</p>
                    <p>Reports</p>
                    <p>Settings</p>
                </>
            )}

            {role === "vendor" && (
                <>
                    <p>Dashboard</p>
                    <p>Products</p>
                    <p>Rental Orders</p>
                    <p>Invoices</p>
                    <p>Returns</p>
                </>
            )}

            {role === "customer" && (
                <>
                    <p>Dashboard</p>
                    <p>Browse Products</p>
                    <p>My Rentals</p>
                    <p>Invoices</p>
                    <p>Profile</p>
                </>
            )}
        </div>
    );
}
