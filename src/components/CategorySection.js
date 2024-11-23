import React from 'react';
import { Box, Tv, ShoppingCart, Smartphone, Coffee, Headphones, Car, Watch } from 'lucide-react'; // Importing icons from lucide-react
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/pagination"; // Import pagination styles

const CategorySection = () => {
  // Sample categories data with more categories
  const categories = [
    { id: 1, name: 'Electronics', icon: <Tv size={24} /> },
    { id: 2, name: 'Furniture', icon: <Box size={24} /> },
    { id: 3, name: 'Clothing', icon: <ShoppingCart size={24} /> },
    { id: 4, name: 'Home Appliances', icon: <Smartphone size={24} /> },
    { id: 5, name: 'Food & Beverages', icon: <Coffee size={24} /> },
    { id: 6, name: 'Headphones', icon: <Headphones size={24} /> },
    { id: 7, name: 'Automotive', icon: <Car size={24} /> },
    { id: 8, name: 'Watches', icon: <Watch size={24} /> },
    { id: 9, name: 'Toys & Games', icon: <ShoppingCart size={24} /> },
    { id: 10, name: 'Books', icon: <Box size={24} /> },
    { id: 11, name: 'Sports', icon: <Tv size={24} /> },
    { id: 12, name: 'Beauty', icon: <Coffee size={24} /> },
    // Add as many categories as needed
  ];

  return (
    <section className="py-3 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold">Product Categories</h2>
          <button className="btn btn-link text-sm">See More</button>
        </div>

        {/* Swiper Container for Slideable Categories */}
        <Swiper
          spaceBetween={20} // Space between items
          slidesPerView="auto" // Automatically adjust number of slides per view
          breakpoints={{
            320: {
                slidesPerView: 2, // 2 items per slide on small screens
              },
            640: {
              slidesPerView: 4, // 2 items per slide on small screens
            },
            1024: {
              slidesPerView: 6, // 4 items per slide on medium screens
            },
            1280: {
              slidesPerView: 8, // 6 items per slide on large screens
            },
          }}
          loop={true} // Loop through the categories
          className="swiper-container"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id} className="w-full">
              {/* Category Card */}
              <div className="card bg-neutral text-neutral-content mx-auto shadow-xl">
                <div className="card-body items-center text-center">
                  {/* Category Icon */}
                  <div className="text-3xl">{category.icon}</div>
                  {/* Category Name */}
                  <h2 className="card-title text-sm line-clamp-1">{category.name}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategorySection;
