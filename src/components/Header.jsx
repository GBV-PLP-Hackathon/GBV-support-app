// frontend/src/components/Header.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, LogOut, Menu } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
  };

  if (!user) return null;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4 border-b border-gray-100">
          <Link to="/dashboard" className="flex items-center gap-3">
            <Moon className="w-8 h-8 text-purple-700" />
            <div>
              <h1 className="text-xl text-gray-900 tracking-tight">
                2koSafe Haven
              </h1>
              <p className="text-xs text-gray-600">Welcome, {user?.username}</p>
            </div>
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors px-4 py-2 rounded-lg hover:bg-red-50"
            aria-label="Logout"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="py-3">
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/dashboard"
              className={`py-2 px-3 rounded-lg transition-colors uppercase tracking-wide text-sm ${
                isActive("/dashboard")
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-700 hover:text-purple-700 hover:bg-gray-50"
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/support-community"
              className={`py-2 px-3 rounded-lg transition-colors uppercase tracking-wide text-sm ${
                isActive("/support-community")
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-700 hover:text-purple-700 hover:bg-gray-50"
              }`}
            >
              Community
            </Link>
            <Link
              to="/safety-planning"
              className={`py-2 px-3 rounded-lg transition-colors uppercase tracking-wide text-sm ${
                isActive("/safety-planning")
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-700 hover:text-purple-700 hover:bg-gray-50"
              }`}
            >
              Safety Planning
            </Link>
            <Link
              to="/abuse-types"
              className={`py-2 px-3 rounded-lg transition-colors uppercase tracking-wide text-sm ${
                isActive("/abuse-types")
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-700 hover:text-purple-700 hover:bg-gray-50"
              }`}
            >
              GBV Info
            </Link>
            <Link
              to="/resources"
              className={`py-2 px-3 rounded-lg transition-colors uppercase tracking-wide text-sm ${
                isActive("/resources")
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-700 hover:text-purple-700 hover:bg-gray-50"
              }`}
            >
              Resources
            </Link>
            <Link
              to="/journal"
              className={`py-2 px-3 rounded-lg transition-colors uppercase tracking-wide text-sm ${
                isActive("/journal")
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-700 hover:text-purple-700 hover:bg-gray-50"
              }`}
            >
              Journal
            </Link>
            <Link
              to="/history"
              className={`py-2 px-3 rounded-lg transition-colors uppercase tracking-wide text-sm ${
                isActive("/history")
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-700 hover:text-purple-700 hover:bg-gray-50"
              }`}
            >
              History
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-2">
              <Link
                to="/dashboard"
                className={`block py-2 px-3 rounded-lg ${
                  isActive("/dashboard")
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/support-community"
                className={`block py-2 px-3 rounded-lg ${
                  isActive("/support-community")
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                to="/safety-planning"
                className={`block py-2 px-3 rounded-lg ${
                  isActive("/safety-planning")
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Safety Planning
              </Link>
              <Link
                to="/abuse-types"
                className={`block py-2 px-3 rounded-lg ${
                  isActive("/abuse-types")
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                GBV Info
              </Link>
              <Link
                to="/resources"
                className={`block py-2 px-3 rounded-lg ${
                  isActive("/resources")
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/journal"
                className={`block py-2 px-3 rounded-lg ${
                  isActive("/journal")
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Journal
              </Link>
              <Link
                to="/history"
                className={`block py-2 px-3 rounded-lg ${
                  isActive("/history")
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                History
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
