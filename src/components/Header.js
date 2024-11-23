import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bell, Mail, ShoppingCart, Menu, Search } from "lucide-react";
import Sidebar from "./Sidebar";
import Cart from "./Cart"; // Import Cart component
import Notification from "./Notification"; // Import Notification component
import Message from "./Message";

const Header = ({ isLoggedIn, user, cartItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); // State to control cart visibility
  const [notificationOpen, setNotificationOpen] = useState(false); // State to control notification visibility
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const placeholders = [
    "Search for products",
    "Search for shops",
    "Search for categories",
  ];

  const notifications = [
    { message: "New message from Admin", time: "5 minutes ago" },
    { message: "Sale starts tomorrow!", time: "1 hour ago" },
    // Add more notifications here as needed
  ];

  const [messageOpen, setMessageOpen] = useState(false); // State to control message visibility

  const messages = [
    { sender: "John Doe", text: "Hello! How are you?", time: "2 minutes ago", profilePicture: "/Hydro.svg" },
    { sender: "Jane Smith", text: "Are you free this weekend?", time: "5 minutes ago", profilePicture: "/Hydro.svg" },
    { sender: "John Doe", text: "Let's catch up soon.", time: "10 minutes ago", profilePicture: "/Hydro.svg" },
    { sender: "Jane Smith", text: "I got your message.", time: "15 minutes ago", profilePicture: "/Hydro.svg" },
    // Add more messages as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 10000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleSearch = () => {
    if (searchText.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchText)}`); // Navigate to /search
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(); // Trigger search on Enter key
    }
  };


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCartMenu = () => {
    setCartOpen(!cartOpen); // Toggle cart visibility
  };

  const toggleMessageMenu = () => {
    setMessageOpen(!messageOpen); // Toggle message visibility
  };

  const toggleNotificationMenu = () => {
    setNotificationOpen(!notificationOpen); // Toggle notification visibility
  };

  return (
    <header className="bg-base-100 shadow-md sticky top-0 z-50 lg:pb-1 pb-4">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/Hydro.svg" alt="Logo" className="h-8" />
          <span className="md:block text-xl font-bold text-primary">
            anemona.shop
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4 hidden md:block relative">
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={handleKeyPress} // Handle Enter key
            placeholder={placeholders[placeholderIndex]}
            className="input input-bordered w-full pl-10"
          />
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleNotificationMenu}
            className="btn btn-ghost p-1"
          >
            <Bell size={20} />
          </button>
          <button onClick={toggleMessageMenu} className="btn btn-ghost p-1">
            <Mail size={20} />
          </button>
          <button onClick={toggleCartMenu} className="btn btn-ghost p-1">
            <ShoppingCart size={20} />
          </button>

          {/* Menu Button */}
          <button onClick={toggleMenu} className="btn btn-ghost p-1">
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="block md:hidden px-4 bg-base-100 relative">
        <Search
          size={20}
          className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholders[placeholderIndex]}
          className="input input-bordered w-full pl-11"
        />
      </div>

      {/* Sidebar */}
      <Sidebar
        isOpen={menuOpen}
        toggleMenu={toggleMenu}
        isLoggedIn={isLoggedIn}
        user={user}
      />

      {/* Cart Sidebar */}
      <Cart
        isOpen={cartOpen}
        toggleMenu={toggleCartMenu}
        cartItems={cartItems || []}
        isLoggedIn={isLoggedIn}
      />

      {/* Notification Sidebar */}
      <Notification
        isOpen={notificationOpen}
        toggleMenu={toggleNotificationMenu}
        notifications={notifications}
      />

      <Message
        isOpen={messageOpen}
        toggleMenu={toggleMessageMenu}
        messages={messages}
      />
    </header>
  );
};

export default Header;
