import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/pagination"; // Import pagination styles
import Reviews from "../../components/Reviews"; // Import the Reviews component
import { ThreeDots } from "react-loader-spinner"; // Import the loader component

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  const normalizeUrl = (url) => {
    if (!url) return "https://via.placeholder.com/600x200?text=Product+Image";
    
    // Fix the protocol part if it's malformed
    url = url.replace(/^http:\\/, 'http://').replace(/^https:\\/, 'https://'); // Fix backslash issue
    
    // Replace any backslashes with forward slashes
    url = url.replace(/\\/g, '/');
    
    return url;
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setIsLoading(true); // Set loading to true when the fetch starts
        const response = await fetch(`${process.env.REACT_APP_API_URL}/product/${id}`);
        const data = await response.json();
        
        const { product, coverImage, productImages } = data;
        
        // Normalize the URLs of product images
        const normalizedCoverImage = normalizeUrl(coverImage);
        const normalizedProductImages = productImages.map((img) => normalizeUrl(img.url));
        
        // Set product details and images
        setProduct(product);
        setImages([normalizedCoverImage, ...normalizedProductImages]);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchProductData();
  }, [id]);

  // Display loader while loading
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ThreeDots color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  const { name, description, price, rating, categoryId } = product;

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row">
        {/* Product Images (Swiper) */}
        <div className="w-full lg:w-1/2">
          <Swiper spaceBetween={10} slidesPerView={1} loop>
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={name}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <div className="flex items-center mt-2">
            <Star className="text-yellow-500" size={18} />
            <span className="ml-2">{rating} / 5</span>
          </div>
          <p className="text-gray-700 mt-4">{description}</p>
          <p className="text-xl font-semibold text-green-600 mt-4">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(price)}
          </p>
          <p className="text-sm text-gray-500 mt-2">{categoryId?.name}</p>

          {/* Add to Cart and Wishlist Buttons (Side by Side) */}
          <div className="mt-6 flex space-x-4">
            <button className="btn btn-primary flex items-center">
              <ShoppingCart className="mr-2" size={18} />
              Add to Cart
            </button>
            <button className="btn btn-neutral flex items-center">
              <Heart className="mr-2" size={18} />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <Reviews reviews={[]} /> {/* Replace with real reviews if needed */}
    </div>
  );
};

export default ProductDetail;
