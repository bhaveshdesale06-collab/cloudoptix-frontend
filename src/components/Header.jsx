import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header
      className="
        h-16 px-6 flex items-center justify-between
        bg-white dark:bg-gray-900
        border-b border-gray-200 dark:border-gray-700
        text-gray-900 dark:text-gray-100
      "
    >
      <h2 className="text-lg font-semibold">Overview</h2>

      <div className="flex items-center gap-4">
        {/* 🌙 / ☀️ Theme Toggle */}
        <ThemeToggle />

        {/* 🚪 Single Logout Button */}
        <button
          onClick={handleLogout}
          className="text-sm text-red-500 hover:underline"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
