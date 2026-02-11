import {
  LayoutDashboard,
  Settings,
  Cloud,
  BarChart3,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { getUserRole } from "../utils/auth";

const Sidebar = () => {
  const role = getUserRole();
  const isAdmin = role === "ROLE_ADMIN";

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-md transition-all
     ${
       isActive
         ? "bg-blue-600 text-white"
         : "text-gray-300 hover:bg-gray-800"
     }`;

  return (
    <aside className="w-64 bg-gray-900 text-gray-100 min-h-screen p-4">
      {/* LOGO */}
      <div className="flex items-center gap-2 mb-8">
        <Cloud className="h-6 w-6 text-blue-500" />
        <span className="text-xl font-bold">CloudOptix</span>
      </div>

      {/* NAV */}
      <nav className="space-y-2">
        <NavLink to="/" className={linkClass}>
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        {isAdmin && (
          <NavLink to="/admin/cloud-accounts" className={linkClass}>
            <Cloud size={18} />
            Cloud Accounts
          </NavLink>
        )}

        {isAdmin && (
          <NavLink to="/admin/analytics" className={linkClass}>
            <BarChart3 size={18} />
            Admin Analytics
          </NavLink>
        )}

        {isAdmin && (
          <NavLink to="/admin/users" className={linkClass}>
            <Users size={18} />
            Users
          </NavLink>
        )}

        <NavLink to="/settings" className={linkClass}>
          <Settings size={18} />
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
