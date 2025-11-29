// frontend/src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SafetyBanner from "../components/SafetyBanner";
import {
  Phone,
  Shield,
  Book,
  Heart,
  Users,
  FileText,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <SafetyBanner />

      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-4xl text-gray-900 mb-3">
            Welcome Back, {user?.username}
          </h2>
          <p className="text-xl text-gray-600">
            Your safe space for support, resources, and healing
          </p>
          {user?.isAnonymous && (
            <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-blue-800">
                    <span className="font-semibold">Anonymous Mode:</span> You
                    have read-only access. Features like journal, community
                    posts, and safety planning are view-only.
                    <Link to="/register" className="underline ml-1">
                      Create an account
                    </Link>{" "}
                    for full access.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Access Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Link
            to="/emergency"
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
          >
            <div className="h-2 bg-gradient-to-r from-red-600 to-red-700"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">Emergency Help</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                24/7 crisis hotlines, panic button, and location-based emergency
                services. Immediate help when you need it most.
              </p>
              <div className="flex items-center gap-2 text-red-600 group-hover:gap-3 transition-all">
                <span className="text-sm uppercase tracking-wide">
                  Get Help Now
                </span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          <Link
            to="/safety-planning"
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
          >
            <div className="h-2 bg-gradient-to-r from-purple-600 to-purple-700"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">Safety Planning</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Create your personalized safety plan
              </p>
              <div className="flex items-center gap-2 text-purple-600 group-hover:gap-3 transition-all">
                <span className="text-sm uppercase tracking-wide">
                  Start Planning
                </span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          <Link
            to="/abuse-types"
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
          >
            <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-700"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Book className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">Learn About GBV</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Understanding different forms of violence
              </p>
              <div className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                <span className="text-sm uppercase tracking-wide">
                  Learn More
                </span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          <Link
            to="/resources"
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
          >
            <div className="h-2 bg-gradient-to-r from-green-600 to-green-700"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">Resources</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Find local and national support services
              </p>
              <div className="flex items-center gap-2 text-green-600 group-hover:gap-3 transition-all">
                <span className="text-sm uppercase tracking-wide">
                  Find Support
                </span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          <Link
            to="/support-community"
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
          >
            <div className="h-2 bg-gradient-to-r from-indigo-600 to-indigo-700"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Connect and share in a safe moderated space
              </p>
              <div className="flex items-center gap-2 text-indigo-600 group-hover:gap-3 transition-all">
                <span className="text-sm uppercase tracking-wide">
                  Join Now
                </span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          <Link
            to="/journal"
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
          >
            <div className="h-2 bg-gradient-to-r from-orange-600 to-orange-700"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">Journal</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Document your journey safely and privately
              </p>
              <div className="flex items-center gap-2 text-orange-600 group-hover:gap-3 transition-all">
                <span className="text-sm uppercase tracking-wide">
                  Start Writing
                </span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>

        {/* Activity & Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-gray-900">Safety Progress</h4>
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-4xl text-purple-700 mb-2">67%</div>
            <p className="text-gray-600 text-sm">
              8 of 12 checklist items completed
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-gray-900">Journal Entries</h4>
              <FileText className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-4xl text-orange-700 mb-2">4</div>
            <p className="text-gray-600 text-sm">Keep tracking your journey</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 border border-indigo-200">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-gray-900">Community Posts</h4>
              <Users className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="text-4xl text-indigo-700 mb-2">2</div>
            <p className="text-gray-600 text-sm">Connections made safely</p>
          </div>
        </div>

        {/* Recent Activity & Tips */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl text-gray-900 mb-6">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-900">Safety Planning Updated</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-900">New Journal Entry</p>
                  <p className="text-sm text-gray-600">1 day ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <p className="text-gray-900">Viewed Resources</p>
                  <p className="text-sm text-gray-600">2 days ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl text-gray-900 mb-6">Safety Tips</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  Use secure passwords and enable 2FA
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  Clear browser history regularly
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  Have emergency contacts memorized
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  Trust your instincts always
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
