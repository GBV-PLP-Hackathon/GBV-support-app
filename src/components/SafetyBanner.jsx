// frontend/src/components/SafetyBanner.jsx
import React from "react";
import { Shield } from "lucide-react";

const SafetyBanner = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-start gap-4">
          <Shield className="w-6 h-6 text-yellow-700 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-gray-900 mb-1">Your Safety & Privacy</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              This platform is secure and confidential. Use the Quick Exit
              button (ESC key) to leave instantly. Your browsing history is not
              stored.{" "}
              <span className="text-yellow-800">
                By MwaraMathias (Management)
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyBanner;
