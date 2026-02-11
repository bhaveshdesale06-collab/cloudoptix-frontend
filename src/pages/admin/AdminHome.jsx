import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, BarChart3, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in duration-500">
      <h1 className="text-2xl font-bold mb-2">Admin Control Center</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        Manage CloudOptix system resources and analytics
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          className="cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl"
          onClick={() => navigate("/admin/cloud-accounts")}
        >
          <CardHeader>
            <Cloud className="h-6 w-6 text-blue-500" />
            <CardTitle>Cloud Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            Manage connected cloud providers (read-only)
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl"
          onClick={() => navigate("/admin/analytics")}
        >
          <CardHeader>
            <BarChart3 className="h-6 w-6 text-green-500" />
            <CardTitle>Admin Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            Organization-wide optimization insights
          </CardContent>
        </Card>

        <Card className="opacity-80">
          <CardHeader>
            <Users className="h-6 w-6 text-purple-500" />
            <CardTitle>User Management</CardTitle>
          </CardHeader>
          <CardContent>
            Users are provisioned by administrators
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminHome;
