import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getCloudAccounts } from "../../api/cloudAccounts";

const CloudAccounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCloudAccounts()
      .then(setAccounts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <DashboardLayout>
      <div className="animate-in fade-in duration-500">
        <h1 className="text-2xl font-bold mb-2">Cloud Accounts</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Read-only cloud accounts used for cost analysis
        </p>

        {loading ? (
          <p className="text-gray-500">Loading cloud accounts...</p>
        ) : accounts.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            ☁️ No cloud accounts onboarded yet.
            <p className="text-sm mt-2">
              Cloud accounts are added in read-only mode for analysis.
            </p>
          </div>
        ) : (
          <div className="rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b">
                <tr>
                  <th className="px-4 py-3 text-left">Provider</th>
                  <th className="px-4 py-3 text-left">Account</th>
                  <th className="px-4 py-3 text-left">Region</th>
                  <th className="px-4 py-3 text-left">Access</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((acc) => (
                  <tr
                    key={acc.id}
                    className="border-b last:border-0
                      hover:bg-gray-50 dark:hover:bg-gray-900
                      transition-colors"
                  >
                    <td className="px-4 py-3">{acc.provider}</td>
                    <td className="px-4 py-3 font-medium">
                      {acc.accountName}
                    </td>
                    <td className="px-4 py-3">{acc.region}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 rounded-full text-xs
                        bg-blue-100 text-blue-700
                        dark:bg-blue-900 dark:text-blue-300"
                      >
                        {acc.accessType}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CloudAccounts;
