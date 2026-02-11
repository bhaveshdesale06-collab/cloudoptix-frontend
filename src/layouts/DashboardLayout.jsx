import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex">
        <Sidebar />

        <div className="flex-1">
          <Header />
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
