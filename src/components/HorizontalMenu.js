import React from "react";
import { Star, Plus, Pizza, Gift, ShoppingCart } from "lucide-react"; // Import Lucide icons

const HorizontalMenu = () => {
  return (
    <section className="lg:hidden pt-6 py-3 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center space-x-8 overflow-x-auto custom-scrollbar">
          {/* Featured Products */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center bg-primary text-white rounded-full p-4 mb-2">
              <Star size={24} />
            </div>
            <span className="text-xs line-clamp-1 max-w-[120px]">Featured Products</span>
          </div>

          {/* New Product */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center bg-primary text-white rounded-full p-4 mb-2">
              <Plus size={24} />
            </div>
            <span className="text-xs line-clamp-1 max-w-[120px]">New Product</span>
          </div>

          {/* Food */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center bg-primary text-white rounded-full p-4 mb-2">
              <Pizza size={24} />
            </div>
            <span className="text-xs line-clamp-1 max-w-[120px]">Food</span>
          </div>

          {/* Souvenir */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center bg-primary text-white rounded-full p-4 mb-2">
              <Gift size={24} />
            </div>
            <span className="text-xs line-clamp-1 max-w-[120px]">Souvenir</span>
          </div>

          {/* Open Your Shop */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center bg-primary text-white rounded-full p-4 mb-2">
              <ShoppingCart size={24} />
            </div>
            <span className="text-xs line-clamp-1 max-w-[120px]">Open Your Shop</span>
          </div>

          {/* More */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center bg-primary text-white rounded-full p-4 mb-2">
              <Star size={24} />
            </div>
            <span className="text-xs line-clamp-1 max-w-[120px]">More</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalMenu;
