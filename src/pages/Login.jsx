import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cloud, Mail, Lock } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
  setError("");
  setLoading(true);

  try {
    const data = await login(email, password);

    console.log("LOGIN RESPONSE:", data);

    // ✅ Save JWT token
    localStorage.setItem("token", data.token);

    // ✅ Decode JWT to extract role
    const payload = JSON.parse(
      atob(data.token.split(".")[1])
    );

    console.log("DECODED TOKEN:", payload);

    // 🔥 Save role from token
    localStorage.setItem("role", payload.role);

    // Optional: save email
    localStorage.setItem("email", payload.sub);

    // Redirect
    navigate("/");

  } catch (err) {
    console.error(err);
    setError("Invalid email or password");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-gray-100 to-gray-200
      dark:from-gray-900 dark:to-gray-950
      animate-in fade-in duration-500"
    >
      <Card className="w-full max-w-md shadow-xl
        transition-all duration-300 hover:shadow-2xl"
      >
        <CardHeader className="space-y-3 text-center">
          <div className="flex justify-center">
            <div className="h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
              <Cloud className="text-white h-7 w-7" />
            </div>
          </div>

          <CardTitle className="text-2xl font-bold">
            CloudOptix
          </CardTitle>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Cloud cost optimization dashboard
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-1">
            <Label>Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                className="pl-9"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label>Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                className="pl-9"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}

          <Button
            className="w-full h-11"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
