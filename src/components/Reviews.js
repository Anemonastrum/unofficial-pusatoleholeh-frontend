import React from "react";
import { Star } from "lucide-react";

const Reviews = ({ reviews }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>

      {reviews && reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="card bg-base-100 shadow-md mb-6">
            <div className="card-body p-4">
              {/* User Profile */}
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={review.userPicture || "https://via.placeholder.com/50"}
                  alt={review.username}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{review.username}</h4>
                  <div className="flex items-center">
                    <Star className="text-yellow-500" size={18} />
                    <span className="ml-2">{review.rating} / 5</span>
                  </div>
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-700">{review.comment}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="card bg-base-100 shadow-md p-6">
          <p className="text-gray-500 text-center">No reviews yet. Be the first to review this product!</p>
        </div>
      )}
    </div>
  );
};

export default Reviews;
