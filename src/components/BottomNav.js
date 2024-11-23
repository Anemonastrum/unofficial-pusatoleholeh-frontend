import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, FileText, Grid, Heart, User } from "lucide-react"; // Import icons from lucide-react

const BottomNav = () => {
  const location = useLocation(); // Get current location to check active route

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="z-40 fixed bottom-0 left-0 right-0 bg-base-100 sm:hidden shadow-lg rounded-tl-xl rounded-tr-xl px-6">
      <div className="flex justify-between items-center py-2">
        <Link
          to="/"
          className={`flex flex-col items-center text-[10px] ${
            isActive("/") ? "text-blue-500" : "text-gray-600"
          } hover:text-blue-500`}
        >
          <Home
            size={24}
            className={isActive("/") ? "text-blue-500" : "text-gray-600"}
          />
          <span className="mt-1">Home</span>
        </Link>

        <Link
          to="/article"
          className={`flex flex-col items-center text-[10px] ${
            isActive("/article") ? "text-blue-500" : "text-gray-600"
          } hover:text-blue-500`}
        >
          <FileText
            size={24}
            className={isActive("/article") ? "text-blue-500" : "text-gray-600"}
          />
          <span className="mt-1">Article</span>
        </Link>

        <Link
          to="/category"
          className={`flex flex-col items-center text-[10px] ${
            isActive("/category") ? "text-blue-500" : "text-gray-600"
          } hover:text-blue-500`}
        >
          <Grid
            size={24}
            className={
              isActive("/category") ? "text-blue-500" : "text-gray-600"
            }
          />
          <span className="mt-1">Categories</span>
        </Link>

        <Link
          to="/wishlist"
          className={`flex flex-col items-center text-[10px] ${
            isActive("/wishlist") ? "text-blue-500" : "text-gray-600"
          } hover:text-blue-500`}
        >
          <Heart
            size={24}
            className={
              isActive("/wishlist") ? "text-blue-500" : "text-gray-600"
            }
          />
          <span className="mt-1">Wishlist</span>
        </Link>

        <Link
          to="/profile"
          className={`flex flex-col items-center text-[10px] ${
            isActive("/profile") ? "text-blue-500" : "text-gray-600"
          } hover:text-blue-500`}
        >
          <User
            size={24}
            className={isActive("/profile") ? "text-blue-500" : "text-gray-600"}
          />
          <span className="mt-1">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
