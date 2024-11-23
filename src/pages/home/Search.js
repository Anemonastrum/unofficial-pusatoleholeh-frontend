import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner"; // Import MagnifyingGlass loader
import ProductCard from "../../components/ProductCard";
import StoreCard from "../../components/StoreCard";
import { normalizeUrl } from "../../utils/NormalizeUrl";

const Search = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [tab, setTab] = useState("products");
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("query");
    if (query) {
      setSearchQuery(query);
      fetchSearchResults(query);
    }
  }, [location.search]);

  const fetchSearchResults = async (query) => {
    setIsLoading(true); // Start loading
    try {
      const API_URL = process.env.REACT_APP_API_URL;
      const productResponse = await fetch(`${API_URL}/search?st=product&q=${query}`);
      const storeResponse = await fetch(`${API_URL}/search?st=shop&q=${query}`);

      const productData = await productResponse.json();
      const storeData = await storeResponse.json();

      setProducts(
        productData.results.map((product) => ({
          ...product,
          productCover: normalizeUrl(product.productCover), // Normalize product image URL
        }))
      );
      
      setStores(
        storeData.results.map((store) => ({
          ...store,
          shopImage: normalizeUrl(store.shopImage), // Normalize store image URL
        }))
      );
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="tabs">
        <a
          onClick={() => setTab("products")}
          className={`tab tab-bordered ${tab === "products" ? "tab-active text-blue-500" : ""}`}
        >
          Products
        </a>
        <a
          onClick={() => setTab("stores")}
          className={`tab tab-bordered ${tab === "stores" ? "tab-active text-blue-500" : ""}`}
        >
          Stores
        </a>
      </div>

      <div className="mt-6">
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="Loading"
              glassColor="#c0efff"
              color="#007BFF"
            />
          </div>
        ) : tab === "products" ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Searched Products</h2>
            {products.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <p>No products found for "{searchQuery}"</p>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Searched Stores</h2>
            {stores.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {stores.map((store) => (
                  <StoreCard key={store._id} store={store} />
                ))}
              </div>
            ) : (
              <p>No stores found for "{searchQuery}"</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
