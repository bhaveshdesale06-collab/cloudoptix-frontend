import DashboardLayout from "../layouts/DashboardLayout";

const Admin = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <p className="text-gray-600">
        Cloud account management and admin-only operations.
      </p>
    </DashboardLayout>
  );
};

export default Admin;
