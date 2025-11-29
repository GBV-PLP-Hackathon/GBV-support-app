// frontend/src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    const isAnonymous = localStorage.getItem("isAnonymous");

    if (userData) {
      setUser(JSON.parse(userData));

      // Only set auth header if user has a token (not anonymous)
      if (token && !isAnonymous) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await api.post("/auth/login", { email, password });
    const { token, user } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUser(user);
    return user;
  };

  const googleLogin = async (credentialResponse) => {
    const response = await api.post("/auth/google", {
      credential: credentialResponse.credential,
    });
    const { token, user } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUser(user);
    return user;
  };

  const register = async (userData) => {
    const response = await api.post("/auth/register", userData);
    const { token, user } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUser(user);
    return user;
  };

  const anonymousLogin = () => {
    const anonymousUser = {
      username: "Anonymous User",
      email: "anonymous@safehaven.local",
      isAnonymous: true,
      readOnly: true,
    };

    localStorage.setItem("user", JSON.stringify(anonymousUser));
    localStorage.setItem("isAnonymous", "true");
    setUser(anonymousUser);
    return anonymousUser;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isAnonymous");
    delete api.defaults.headers.common["Authorization"];
    setUser(null);
  };

  const value = {
    user,
    login,
    googleLogin,
    anonymousLogin,
    register,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
