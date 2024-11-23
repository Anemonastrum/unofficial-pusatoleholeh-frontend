import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="hero h-full bg-base-200">
      <div className="hero-content pt-32 text-center">
        <div className="max-w-md">
          {/* Icon and Title */}
          <div className="flex justify-center mb-4">
            <AlertTriangle className="text-yellow-500 w-20 h-20" />
          </div>
          <h1 className="text-4xl font-bold">Page Not Found</h1>
          <p className="py-6 text-gray-600">
            Sorry, the page you are looking for doesn't exist or may have been moved.
          </p>

          {/* Navigation Buttons */}
          <div className="space-y-4">
            <Link to="/" className="btn btn-primary w-full">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
