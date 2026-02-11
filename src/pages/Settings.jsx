import DashboardLayout from "../layouts/DashboardLayout";
import { getUserRole, getUserEmail, logout } from "../utils/auth";
import ThemeToggle from "../components/ThemeToggle";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="animate-in fade-in duration-500 max-w-3xl space-y-10">

        {/* USER INFO */}
        <section className="rounded-xl border p-6 bg-white dark:bg-gray-800">
          <h2 className="text-lg font-semibold mb-4">Account</h2>
          <p><b>Email:</b> {getUserEmail()}</p>
          <p><b>Role:</b> {getUserRole()}</p>
        </section>

        {/* HOW CLOUDOPTIX WORKS */}
        <section className="rounded-xl border p-6 bg-white dark:bg-gray-800">
          <h2 className="text-lg font-semibold mb-4">
            How CloudOptix Works
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            CloudOptix does not store real cloud credentials.
            Cloud accounts are onboarded in a read-only, simulated mode.
            The backend generates realistic utilization metrics and applies
            waste detection and optimization logic without using paid cloud APIs.
          </p>
        </section>

        {/* PREFERENCES */}
        <section className="rounded-xl border p-6 bg-white dark:bg-gray-800 flex items-center justify-between">
          <span className="font-medium">Theme</span>
          <ThemeToggle />
        </section>

        {/* LOGOUT */}
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="text-red-600 hover:underline"
        >
          Logout
        </button>

      </div>
    </DashboardLayout>
  );
};

export default Settings;
