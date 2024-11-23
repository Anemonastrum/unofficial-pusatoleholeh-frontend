import React from "react";
import Hero from "./Hero"; // Import Hero component
import RecentArticles from "./RecentArticles"; // Import RecentArticles component
import FeaturedProducts from "./FeaturedProducts"; // Import FeaturedProducts component
import Banner from "./Banner";
import HorizontalMenu from "./HorizontalMenu";
import CategorySection from "./CategorySection";

const HomePageContent = () => {
  return (
    <main>
      <Banner />
      <HorizontalMenu />
      <CategorySection />
      <RecentArticles />
      <FeaturedProducts />
    </main>
  );
};

export default HomePageContent;
