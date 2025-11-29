// frontend/src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";
import { Moon, Eye, EyeOff, Shield, Lock } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login, googleLogin, anonymousLogin } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(formData.email, formData.password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    setError("");
    setLoading(true);

    try {
      await googleLogin(credentialResponse);
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.error || "Google login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleError = () => {
    setError("Google login failed. Please try again or use email/password.");
  };

  const handleAnonymousLogin = () => {
    anonymousLogin();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-5">
          <Link to="/" className="flex items-center gap-3">
            <Moon className="w-8 h-8 text-purple-700" />
            <div>
              <h1 className="text-xl text-gray-900 tracking-tight">
                2koSafe Haven
              </h1>
              <p className="text-xs text-gray-600">Secure Access Portal</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-md">
        {/* Safety Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 rounded-r-lg">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-yellow-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-800">
                <span className="font-semibold">Privacy Protected:</span> All
                data is encrypted and secure. Press ESC to exit quickly at any
                time.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-2xl text-center mb-2">
              Welcome to Your Safe Space
            </h2>
            <p className="text-center text-purple-100 text-sm">
              Access confidential support and resources
            </p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 m-6 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="p-8">
            <div className="space-y-5 mb-6">
              <div>
                <label className="block text-gray-700 mb-2 text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 text-sm">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all pr-12"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-4 rounded-lg transition-all shadow-lg hover:shadow-xl uppercase tracking-wide disabled:bg-gray-400"
            >
              {loading ? "Signing In..." : "Sign In Securely"}
            </button>

            {/* Anonymous Login Button */}
            <button
              type="button"
              onClick={handleAnonymousLogin}
              className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-lg transition-all border-2 border-gray-300 hover:border-gray-400 uppercase tracking-wide flex items-center justify-center gap-2"
            >
              <Shield className="w-5 h-5" />
              Browse Anonymously (Read-Only)
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Sign-In */}
            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                theme="outline"
                size="large"
                text="continue_with"
                shape="rectangular"
                width="100%"
              />
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-2">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-purple-600 hover:text-purple-700 font-semibold"
                >
                  Register here
                </Link>
              </p>
              <Link
                to="/"
                className="text-purple-600 hover:text-purple-700 text-sm"
              >
                ← Back to Home
              </Link>
            </div>
          </form>
        </div>

        <div className="mt-6 pt-6">
          <p className="text-sm text-gray-600 text-center">
            Need immediate help?{" "}
            <Link
              to="/emergency"
              className="text-red-600 hover:text-red-700 font-semibold"
            >
              Emergency Resources
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
