import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper core styles
import "swiper/css/navigation"; // Import Swiper navigation styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  const slides = [
    "https://via.placeholder.com/1200x400?text=Image+Satu",
    "https://via.placeholder.com/1200x400?text=Image+Dua",
    "https://via.placeholder.com/1200x400?text=Image+Tiga",
    "https://via.placeholder.com/1200x400?text=Image+Empat",
    "https://via.placeholder.com/1200x400?text=Image+Lima",
    "https://via.placeholder.com/1200x400?text=Image+Enam",
  ];

  return (
    <section className="lg:py-5 py-4 bg-base-100 hidden lg:block">
      <div className="container mx-auto px-4">
        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="rounded-lg overflow-hidden"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
