import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Star,
  Heart,
  Settings,
  Info,
  HelpCircle,
  FileText,
  LogOut,
  X,
} from "lucide-react";

const Sidebar = ({ isOpen, toggleMenu, isLoggedIn, user }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");

    // Optionally, clear user data (if needed)
    // Navigate to login or home page
    navigate("/login");
    // You can also call a parent state update function if needed
    toggleMenu(); // Close the menu after logout
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={toggleMenu}
    >
      <div
        className={`fixed right-0 top-0 w-64 lg:w-96 bg-base-100 h-full shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } rounded-tl-lg rounded-bl-lg`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="p-4 text-lg font-bold text-center border-b flex items-center justify-between">
          <span>Menu</span>
          <button
            onClick={toggleMenu}
            className="btn btn-ghost p-1 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-2 space-y-2">
          {isLoggedIn ? (
            <div className="flex flex-col items-center mb-2 space-y-2">
            </div>
          ) : (
            <div className="flex w-full mt-4 space-x-2 px-4 pt-2">
              <Link to="/login" className="btn btn-primary flex-1 btn-sm h-10">
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-neutral flex-1 btn-sm h-10"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Menu Items */}
        <ul className="menu py-4 space-y-2">
          <li>
            <Link to="/review">
              <Star className="mr-2" size={18} /> Reviews
            </Link>
          </li>
          <li>
            <Link to="/transactions">
              <FileText className="mr-2" size={18} /> Transactions
            </Link>
          </li>
          <li>
            <Link to="/wishlist">
              <Heart className="mr-2" size={18} /> Wishlist
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <Settings className="mr-2" size={18} /> Settings
            </Link>
          </li>
          <li>
            <Link to="/about">
              <Info className="mr-2" size={18} /> About
            </Link>
          </li>
          <li>
            <Link to="/help">
              <HelpCircle className="mr-2" size={18} /> Help
            </Link>
          </li>
          {isLoggedIn && (
            <li onClick={handleLogout} className="cursor-pointer">
              <span className="flex items-center">
                <LogOut className="mr-2" size={18} /> Logout
              </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
