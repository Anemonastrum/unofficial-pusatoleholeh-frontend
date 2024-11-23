import React from "react";
import { Link } from "react-router-dom"; // Importing Link for navigation
import { Star } from "lucide-react"; // Importing Star icon from lucide-react

const StoreProductCard = ({ product }) => {
  const {
    _id,
    name = "Unknown Product",
    description = "No description provided.",
    price = 0,
    productCover,
    rating,
  } = product;

  // Normalize the productCover URL to ensure the correct format
  const normalizeUrl = (url) => {
    if (!url) return "https://via.placeholder.com/600x200?text=Product+Image";
    // Ensure correct URL format by replacing backslashes and fixing double slashes
    return url.replace(/\\/g, "/").replace(/^http:/, "http://").replace(/^https:/, "https://");
  };

  // Format price to IDR
  const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    return formatter.format(price);
  };

  // Format rating score (assuming there's a rating system for products as well)
  const formatRating = (rating) => (rating ? rating.toFixed(1) : "No rating");

  return (
    <Link
      to={`/product/${_id}`} // Navigating to the product details page
      className="card w-full bg-base-100 shadow-xl rounded-sm hover:bg-blue-500 transition duration-300"
    >
      {/* Product Cover Image */}
      <figure className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <img
          src={normalizeUrl(productCover) || "https://via.placeholder.com/600x200?text=Product+Image"}
          alt={name}
          className="object-cover w-full h-full"
        />
      </figure>

      <div className="card-body">
        {/* Product Name */}
        <h2 className="card-title text-xl font-semibold">{name}</h2>

        {/* Product Description */}
        <p className="text-sm text-gray-500">{description}</p>

        {/* Product Price */}
        <p className="text-sm text-gray-600">{formatPrice(price)}</p>

        {/* Product Rating */}
        <p className="text-sm text-yellow-500 flex items-center">
          {rating ? (
            <>
              <Star size={14} className="me-1" /> {formatRating(rating)}
            </>
          ) : (
            <span className="text-gray-400">No rating</span>
          )}
        </p>
      </div>
    </Link>
  );
};

export default StoreProductCard;
