import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StoreProductCard from "../../components/StoreProductCard"; // Assuming you have a ProductCard component
import { Star } from "lucide-react"; // Importing Star icon from lucide-react
import { ThreeDots } from 'react-loader-spinner'; // Importing the ThreeDots spinner

const Store = () => {
  const { shopName } = useParams(); // Extracting shopName from URL params
  const [store, setStore] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const placeholderBanner = "https://via.placeholder.com/1200x800?text=Store+Banner";
  const placeholderProfileImage = "https://via.placeholder.com/100?text=Profile+Image";

  useEffect(() => {
    // Fetching store data
    fetchStoreData(shopName);
  }, [shopName]);

  const normalizeUrl = (url) => {
    if (!url) return "";
    // Ensure correct URL format by replacing backslashes and fixing double slashes
    return url.replace(/\\/g, "/").replace(/^http:/, "http://").replace(/^https:/, "https://");
  };

  const fetchStoreData = async (shopName) => {
    try {
      // Fetch shop data using shopName
      const response = await fetch(`${process.env.REACT_APP_API_URL}/shop/name/${shopName}`);
      const data = await response.json();

      if (data.message === "Shop found!") {
        const shopData = data.shop;
        const shopImageUrl = normalizeUrl(data.image.length > 0 ? data.image[0].url : placeholderProfileImage);
        const bannerImageUrl = normalizeUrl(data.banner.length > 0 ? data.banner[0].url : placeholderBanner);

        // Fetch products using the shopId from the shop data
        fetchProducts(shopData._id);

        setStore({
          id: shopData._id,
          name: shopData.name,
          location: `${shopData.address.city}, ${shopData.address.province}`,
          rating: 4.2, // Hardcoded or from your API if available
          description: shopData.description,
          bannerImage: bannerImageUrl,
          profileImage: shopImageUrl, // Assuming the first image in the `image` array is the profile image
        });
      } else {
        console.error("Shop not found:", data.message);
        setError(data.message);
        setLoading(false); // Stop loading if shop not found
      }
    } catch (error) {
      console.error("Error fetching store data:", error);
      setError("Error fetching store data");
      setLoading(false);
    }
  };

  const fetchProducts = async (shopId) => {
    try {
      // Fetch products using shopId
      const response = await fetch(`${process.env.REACT_APP_API_URL}/product/shop/${shopId}`);
      const data = await response.json();
      setProducts(data || []); // Ensure the product data is set correctly
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Error fetching products");
      setLoading(false);
    }
  };

  const formatRating = (rating) => {
    return rating ? rating.toFixed(1) : "No rating";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ThreeDots color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Store Banner as Background */}
      <div
        className="relative rounded-lg bg-cover bg-center p-6 text-white"
        style={{
          backgroundImage: `url(${store.bannerImage || placeholderBanner})`,
          backgroundColor: "#00000080", // Fallback for dark overlay
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Store Info */}
        <div className="flex flex-col items-center pt-24">
          <img
            src={store.profileImage || placeholderProfileImage}
            alt={store.name}
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4"
          />
          <h1 className="text-3xl font-semibold">{store.name}</h1>
          <p className="text-sm text-gray-200">{store.location}</p>
          {/* Rating */}
          <p className="text-sm flex justify-center items-center mt-2">
            {store.rating ? (
              <>
                <Star size={14} className="mr-1" />
                {formatRating(store.rating)}
              </>
            ) : (
              <span className="text-gray-400">No rating</span>
            )}
          </p>
          {/* Store Description */}
          <p className="mt-4 text-sm text-gray-300 text-center">{store.description}</p>
        </div>
      </div>

      {/* Store Products */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Products from {store.name}</h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <StoreProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <p>No products available in this store.</p>
        )}
      </div>
    </div>
  );
};

export default Store;
