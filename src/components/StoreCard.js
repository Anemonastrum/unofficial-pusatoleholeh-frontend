import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react"; // Importing Star icon from lucide-react

const StoreCard = ({ store }) => {
  const {
    _id,
    name = "Unknown Store",
    description = "No description provided.",
    username,
    address,
    score = null,
    shopImage,
  } = store;

  // Extract city from address
  const city = address?.city || "Unknown City";

  // Format rating score
  const formatRating = (rating) => (rating ? rating.toFixed(1) : "No rating");

  return (
    <Link
      to={`/store/${username}`} className="card w-full bg-base-100 shadow-xl roundness-sm">
      {/* Store Banner */}
      <figure className="relative w-full h-32 overflow-hidden rounded-t-lg">
        <img
          src={shopImage || "https://via.placeholder.com/600x200?text=Shop+Banner"}
          alt={name}
          className="object-cover w-full h-full"
        />
      </figure>

      {/* Store Profile Image */}
      <div className="absolute top-24 left-4">
        <img
          src={shopImage || "https://via.placeholder.com/100?text=Profile"}
          alt={name}
          className="w-24 h-24 rounded-full border-4 border-white"
        />
      </div>

      <div className="card-body pt-24"> {/* Added padding-top to avoid overlap */}
        {/* Store Name */}
        <h2 className="card-title text-xl font-semibold">{name}</h2>

        {/* Store Description */}
        <p className="text-sm text-gray-500">{description}</p>

        {/* Store Location */}
        <p className="text-sm text-gray-500">{city}</p>

        {/* Rating */}
        <p className="text-sm text-yellow-500 flex items-center">
          {score ? (
            <>
              <Star size={14} className="me-1" /> {formatRating(score)}
            </>
          ) : (
            <span className="text-gray-400">No rating</span>
          )}
        </p>

        <div className="card-actions justify-end mt-4">
          <Link to={`/store/${username}`} className="btn btn-primary text-white">
            Visit Store
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default StoreCard;
