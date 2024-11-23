import React from "react";

// Sample category data with dynamic backgrounds and descriptions
const categories = [
  {
    id: 1,
    name: "Technology",
    description: "Latest trends in tech, gadgets, and innovations.",
    background: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", // Example background image
  },
  {
    id: 2,
    name: "Health",
    description: "Articles about health, wellness, and fitness.",
    background: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", // Example background image
  },
  {
    id: 3,
    name: "Business",
    description: "Business news, strategies, and entrepreneurship.",
    background: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", // Example background image
  },
  {
    id: 4,
    name: "Education",
    description: "Education articles, resources, and learning tips.",
    background: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", // Example background image
  },
  {
    id: 5,
    name: "Entertainment",
    description: "Trending entertainment news, movies, and music.",
    background: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", // Example background image
  },
];

const CategoryPage = () => {
  return (
    <div className="min-h-screen bg-base-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Prodcut Categories</h2>

      {/* Category List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="card bg-base-100 image-full shadow-xl"
            style={{
              backgroundImage: `url(${category.background})`, // Set dynamic background image
              backgroundSize: "cover", // Ensure the background image covers the whole card
              backgroundPosition: "center",
              width: "auto", // Set width to auto
            }}
          >
            <div className="card-body text-left p-4">
              <h2 className="card-title text-white">{category.name}</h2>
              <p className="text-white">{category.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
