import React from "react";
import { Star } from "lucide-react"; // Importing Star icon from lucide-react

const FeaturedProduct = () => {
  // Sample data for featured products (16 products)
  const products = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    title: `Product ${index + 1}`,
    price: Math.floor(Math.random() * 1000000) + 100000, // Random price between 100000 and 1100000 IDR
    image: "https://placehold.co/400", // Placeholder image
    location: `City ${index + 1}, Indonesia`,
    rating: Math.random() * 5, // Random rating between 0 and 5
    itemsSold: Math.floor(Math.random() * 1000), // Random items sold between 0 and 1000
  }));

  // Function to format price in IDR
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  };

  return (
    <section className="py-5 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold">Featured Products</h2>
          <button className="btn btn-link text-sm">See More</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {products.map((product) => (
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
      </div>
    </section>
  );
};

export default FeaturedProduct;
