import React, { useState, useEffect } from "react";
import Header from "../../components/Header"; // Import Header component
import HomePageContent from "../../components/HomePageContent"; // Import content component
import LoginRegisterAlert from "../../components/LoginRegisterAlert"; // Import alert component
import BottomNav from "../../components/BottomNav"; // Import BottomNav component
import Footer from "../../components/Footer";
import { Routes, Route } from "react-router-dom";

import Article from "./Article";
import Category from "./Category";
import Wishlist from "./Wishlist";
import Profile from "./Profile"; // Import Profile component
import ProductDetail from "./ProductDetail";
import Search from "./Search";
import Store from "./Store";

import NotFound from "../NotFound";
import dummyProduct from "./dummy/dummyProduct";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
  const [userData, setUserData] = useState(null); // State to store user profile data

  useEffect(() => {
    // Check if a token exists in localStorage to determine if the user is logged in
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      // Fetch the user profile data
      fetch(`${process.env.REACT_APP_API_URL}/user/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUserData(data); // Store the fetched user data in state
        })
        .catch((error) => console.error("Error fetching user data:", error));
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-base-200">
      <Header isLoggedIn={isLoggedIn}/>
      {!isLoggedIn && <LoginRegisterAlert />}

      <Routes>
        {/* Home Page Content */}
        <Route path="/" element={<HomePageContent />} />

        <Route path="/article" element={<Article />} />
        <Route path="/category" element={<Category />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route
          path="/profile"
          element={<Profile userData={userData} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />
        <Route path="/search" element={<Search />} />
        <Route
          path="/store/:shopName"
          element={<Store />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Home;
