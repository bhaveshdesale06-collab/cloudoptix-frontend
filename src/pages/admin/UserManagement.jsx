import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

const UserManagement = () => {
  const [showAddUser, setShowAddUser] = useState(false);

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
      name: "Cloud Analyst",
      email: "user@company.com",
      role: "USER",
      status: "ACTIVE",
    },
  ];

  return (
    <DashboardLayout>
      <div className="animate-in fade-in duration-500">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">User Management</h1>
            <p className="text-sm text-gray-400">
              Users are provisioned and managed by administrators
            </p>
          </div>

          <Button onClick={() => setShowAddUser(true)}>
            ➕ Add User
          </Button>
        </div>

        {/* USERS TABLE */}
        <Card className="p-0 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 dark:bg-gray-900">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr
                  key={u.id}
                  className="border-b last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <td className="px-4 py-3">{u.name}</td>
                  <td className="px-4 py-3">{u.email}</td>
                  <td className="px-4 py-3 font-medium">{u.role}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                      {u.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* ADD USER MODAL (UI ONLY) */}
        {showAddUser && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Add New User</h2>
                <button onClick={() => setShowAddUser(false)}>
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Name</Label>
                  <Input placeholder="Full name" />
                </div>

                <div>
                  <Label>Email</Label>
                  <Input type="email" placeholder="user@company.com" />
                </div>

                <div>
                  <Label>Role</Label>
                  <select className="w-full h-10 rounded-md border bg-transparent px-3 text-sm">
                    <option>USER</option>
                    <option>ADMIN</option>
                  </select>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setShowAddUser(false)}
                  >
                    Cancel
                  </Button>
                  <Button>Save User</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default UserManagement;
