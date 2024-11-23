import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/pagination"; // Import pagination styles

const RecentArticles = () => {
  const articles = [
    {
      title: "The Future of E-commerce",
      date: "2024-11-20",
      path: "/article/1",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "Top 10 Trends in Online Shopping",
      date: "2024-11-19",
      path: "/article/2",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "How to Start Your Online Store",
      date: "2024-11-18",
      path: "/article/3",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      title: "How to Start Your Online Store",
      date: "2024-11-18",
      path: "/article/",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
  ];

  return (
    <section className="lg:py-5 py-4 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold">Recent Articles</h2>
          <button className="btn btn-link text-sm">See More</button>
        </div>

        {/* Swiper slider for both mobile and desktop */}
        <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          breakpoints={{
            // Mobile view
            0: {
              slidesPerView: 1,
            },
            // Tablet view (>=640px)
            640: {
              slidesPerView: 2,
            },
            // Desktop view (>=1024px)
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index}>
              <div className="card bg-base-100 image-full shadow-xl">
                <figure>
                  <img src={article.image} alt={article.title} />
                </figure>
                <div className="card-body">
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h2 className="card-title line-clamp-1">{article.title}</h2>
                  <p className="line-clamp-2">
                    If a dog chews shoes whose shoes does he choose?
                  </p>
                  <div className="card-actions justify-end">
                    <a href={article.path} className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecentArticles;
