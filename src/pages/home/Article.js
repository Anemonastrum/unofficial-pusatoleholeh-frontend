import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import required modules
import "swiper/css"; // Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";

// Mock Data for Articles
const featuredArticles = [
  {
    id: 1,
    title: "How to Build a Modern Web App",
    description: "Learn the key steps and tools to create a modern web application.",
    image: "https://via.placeholder.com/600x300",
  },
  {
    id: 2,
    title: "Designing with Tailwind CSS",
    description: "Tips and tricks to make the most of Tailwind CSS for responsive designs.",
    image: "https://via.placeholder.com/600x300",
  },
  {
    id: 3,
    title: "Understanding React Hooks",
    description: "Dive deep into the React hooks and how they simplify state management.",
    image: "https://via.placeholder.com/600x300",
  },
];

const articles = [
  {
    id: 4,
    title: "Mastering JavaScript in 2024",
    description: "A comprehensive guide to modern JavaScript practices.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    title: "Why React is the Best Framework",
    description: "Explore the reasons React is still the top choice for developers.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    title: "The Future of Web Development",
    description: "Trends and technologies shaping the web development industry.",
    image: "https://via.placeholder.com/300x200",
  },
];

const Article = () => {
  return (
    <div className="p-4">
      {/* Featured Articles Slider */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          spaceBetween={16}
          slidesPerView={1}
        >
          {featuredArticles.map((article) => (
            <SwiperSlide key={article.id}>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{article.title}</h3>
                  <p className="text-sm">{article.description}</p>
                  <Link
                    to={`/article/${article.id}`}
                    className="text-blue-400 hover:underline mt-2 inline-block"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* List of Articles */}
      <div>
        <h2 className="text-2xl font-bold mb-4">All Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="rounded-lg shadow-lg overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{article.title}</h3>
                <p className="text-sm text-gray-600">{article.description}</p>
                <Link
                  to={`/article/${article.id}`}
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
