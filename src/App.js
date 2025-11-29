// frontend/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/AuthContext";
import Header from "./components/Header";
import QuickExit from "./components/QuickExit";
import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SupportCommunity from "./pages/SupportCommunity";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AbuseTypes from "./pages/AbuseTypes";
import SafetyPlanning from "./pages/SafetyPlanning";
import Resources from "./pages/Resources";
import EmergencyContacts from "./pages/EmergencyContacts";
import Journal from "./pages/Journal";
import ChatIcon from "./components/ChatIcon";
import GBVHistory from "./components/GBVHistory";
import "./index.css";

// Small wrapper to access auth inside App
const AppWithAuth = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <QuickExit />
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/support-community"
          element={
            <ProtectedRoute>
              <SupportCommunity />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/abuse-types"
          element={
            <ProtectedRoute>
              <AbuseTypes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/safety-planning"
          element={
            <ProtectedRoute>
              <SafetyPlanning />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resources"
          element={
            <ProtectedRoute>
              <Resources />
            </ProtectedRoute>
          }
        />
        <Route path="/emergency" element={<EmergencyContacts />} />
        <Route
          path="/journal"
          element={
            <ProtectedRoute>
              <Journal />
            </ProtectedRoute>
          }
        />

        {/* GBV History Page */}
        <Route path="/history" element={<GBVHistory />} />
      </Routes>

      {/* Chat icon visible for everyone */}
      <ChatIcon />
    </div>
  );
};

function App() {
  return (
    <GoogleOAuthProvider
      clientId={
        process.env.REACT_APP_GOOGLE_CLIENT_ID || "YOUR_GOOGLE_CLIENT_ID"
      }
    >
      <AuthProvider>
        <Router>
          <AppWithAuth />
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
