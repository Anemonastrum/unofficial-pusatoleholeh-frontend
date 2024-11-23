import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react"; // Importing Star icon from lucide-react

const ProductCard = ({ product }) => {
  const { _id, name, price, productCover, shopId, score } = product;

  // Use the product cover image if available, otherwise fallback to a placeholder image
  const productImage = productCover || "https://via.placeholder.com/150";

  // Function to format price in IDR
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  return (
    <Link
      to={`/product/${_id}`} className="card bg-base-100 hover:bg-blue-700 shadow-md w-full max-w-xs mx-auto roundness-sm">
      {/* Product image at the top */}
      <figure className="relative w-full" style={{ paddingTop: "100%" }}>
        <img
          src={productCover}
          alt={name}
          className="object-cover absolute top-0 left-0 w-full h-full rounded-sm"
        />
      </figure>

      <div className="card-body p-2">
        {/* Product Title */}
        <h2 className="card-title line-clamp-2 text-xs font-normal">{name}</h2>

        {/* Price in IDR format */}
        <p className="text-xs font-bold">{formatPrice(price)}</p>

        {/* Store name */}
        <p className="text-xs text-gray-500">{shopId?.name || "Unknown Store"} | {shopId?.address.city || "Unknown Location"}</p>
        

        {/* Rating */}
        <p className="text-xs text-yellow-500 flex items-center">
          {score ? (
            <>
              <Star size={14} className="mr-1" /> {score.toFixed(1) || "Not rated"}
            </>
          ) : (
            <span className="text-gray-400">Unrated</span>
          )}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
