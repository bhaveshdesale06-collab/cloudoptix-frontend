import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, X } from "lucide-react";

const Users = () => {
  const [showModal, setShowModal] = useState(false);

  // UI-only dummy users
  const users = [
    {
      id: 1,
      name: "Admin User",
      email: "admin@cloudoptix.com",
      role: "ADMIN",
      status: "ACTIVE",
    },
    {
      id: 2,
      name: "Demo User",
      email: "user@cloudoptix.com",
      role: "USER",
      status: "ACTIVE",
    },
  ];

  return (
    <DashboardLayout>
      <div className="animate-in fade-in duration-500">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">User Management</h1>

          <Button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2"
          >
            <Plus size={16} />
            Add User
          </Button>
        </div>

        {/* USERS TABLE */}
        <div className="rounded-xl border bg-white dark:bg-gray-800 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900 border-b">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b last:border-0 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  <td className="px-4 py-3 font-medium">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ADD USER MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-xl bg-white dark:bg-gray-800 shadow-xl animate-in zoom-in duration-300">
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
              <h2 className="text-lg font-semibold">Add New User</h2>
              <button onClick={() => setShowModal(false)}>
                <X className="h-5 w-5 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" />
              </button>
            </div>

            {/* MODAL BODY */}
            <div className="p-4 space-y-4">
              <div className="space-y-1">
                <Label>Name</Label>
                <Input placeholder="Enter full name" />
              </div>

              <div className="space-y-1">
                <Label>Email</Label>
                <Input type="email" placeholder="Enter email address" />
              </div>

              <div className="space-y-1">
                <Label>Password</Label>
                <Input type="password" placeholder="Temporary password" />
              </div>

              <div className="space-y-1">
                <Label>Role</Label>
                <select className="w-full rounded-md border px-3 py-2 text-sm bg-white dark:bg-gray-900 dark:border-gray-700">
                  <option>USER</option>
                  <option>ADMIN</option>
                </select>
              </div>
            </div>

            {/* MODAL FOOTER */}
            <div className="flex justify-end gap-2 p-4 border-t dark:border-gray-700">
              <Button
                variant="ghost"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>
              <Button>Add User</Button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Users;
