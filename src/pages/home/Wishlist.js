import React, { useState, useEffect } from "react";
import { Star } from "lucide-react"; // Importing Star icon from lucide-react

// Sample data for products in the wishlist
const sampleWishlist = [
  {
    id: 1,
    title: "Wireless Earbuds",
    price: 50000,
    image: "https://placehold.co/400",
    location: "City 1, Indonesia",
    rating: 4.2,
    itemsSold: 300,
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 199000,
    image: "https://placehold.co/400",
    location: "City 2, Indonesia",
    rating: 4.5,
    itemsSold: 150,
  },
  {
    id: 3,
    title: "Laptop Sleeve",
    price: 30000,
    image: "https://placehold.co/400",
    location: "City 3, Indonesia",
    rating: 4.0,
    itemsSold: 120,
  },
];

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(sampleWishlist);

  // This effect simulates fetching the wishlist data from an API
  useEffect(() => {
    // Replace this with an actual API call if needed
    // Example: fetchWishlist();
  }, []);

  // Function to format price in IDR
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  };

  return (
    <section className="py-4 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">Your Wishlist</h2>

        {/* If wishlist is empty */}
        {wishlist.length === 0 ? (
          <div className="text-center text-xl">Your wishlist is empty.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {wishlist.map((product) => (
              <div key={product.id} className="card hover:bg-blue-700 bg-base-100 shadow-md w-full max-w-xs mx-auto roundness-sm">
                {/* Product image at the top */}
                <figure className="relative w-full" style={{ paddingTop: "100%" }}>
                  {/* 1:1 aspect ratio for the image */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover absolute top-0 left-0 w-full h-full" // Ensures the image is always 1:1
                  />
                </figure>
                <div className="card-body p-2">
                  {/* Product Title */}
                  <h2 className="card-title line-clamp-2 text-xs font-normal">{product.title}</h2>

                  {/* Price in IDR format */}
                  <p className="text-xs font-bold">{formatPrice(product.price)}</p>

                  {/* Store location */}
                  <p className="text-xs text-gray-500">{product.location}</p>

                  {/* Rating */}
                  <p className="text-xs text-yellow-500 flex items-center">
                    {product.rating ? (
                      <>
                        <Star size={14} className="me-1" /> {product.rating.toFixed(1)}
                      </>
                    ) : (
                      <span className="text-gray-400 ps-2">Unrated</span>
                    )}
                  </p>

                  {/* Items sold */}
                  <p className="text-xs text-gray-500">{product.itemsSold} items sold</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
