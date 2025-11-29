// frontend/src/components/QuickExit.jsx
import React, { useEffect } from "react";
import { LogOut } from "lucide-react";

const QuickExit = () => {
  const handleQuickExit = () => {
    // Clear any session data
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to a safe website (e.g., weather or news)
    window.location.replace("https://www.google.com/search?q=weather");
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleQuickExit();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <button
      onClick={handleQuickExit}
      className="fixed bottom-6 left-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all z-50 group"
      aria-label="Quick Exit - Press ESC to leave quickly"
      title="Quick Exit - Press ESC"
    >
      <LogOut className="w-5 h-5" />
      <span>Quick Exit</span>
      <span className="hidden group-hover:inline text-xs">(ESC)</span>
    </button>
  );
};

export default QuickExit;
