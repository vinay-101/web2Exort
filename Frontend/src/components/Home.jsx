import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SliderAreaTop from "./SliderAreaTop";
import SliderAreaMiddleProduct from "./SliderAreaMiddleProduct";
import SliderAreaDownProductOne from "./SliderAreaDownProductOne";
import Testimonial from "./Testimonial";
import BrandPartner from "./BrandPartner";
import Footer from "./Footer";
import LeftSidebar from "./LoginComponents/ProductPageLeftside";
import RightContent from "./LoginComponents/ProductPageRightside";
import TopArea from "../pages/TopArea";
import CategorySlider from "./CategorySlider";
import EnquiryReloadHome from "./EnquiryReloadHome";
import LeadSlider from "./LeadSlider";
import productService from "../Services/productService";
import SaleModal from "./SaleModal";


// Component to select a category
const CategorySelector = ({ categories, selectedCategoryId, onSelectCategory }) => {
  return (
    <div className="category-selector mb-4">
      <h3 className="mb-3">Browse by Category</h3>
      <div className="d-flex flex-wrap gap-2">
        {categories.map(category => (
          <button 
            key={category.id}
            className={`btn ${selectedCategoryId === category.id ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => onSelectCategory(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch categories on component mount
  useEffect(() => {
    async function fetchCategories() {
      try {
        setError(null);
        const response = await productService.fetchCategories();
        if (response && response.data && response.data.data) {
          setCategories(response.data.data);
          // Select first category by default
          if (response.data.data.length > 0) {
            setSelectedCategory(response.data.data[0]);
            fetchCategoryProducts(response.data.data[0].id);
          }
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to load categories. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    
    fetchCategories();
  }, []);
  
  // Fetch category products when selected category changes
  const fetchCategoryProducts = async (categoryId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await productService.fetchHomeCategory(categoryId);
      console.log("API Response:", response.data); // Debug log
      if (response && response.data && response.data.data) {
        setCategoryProducts(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching category products:", error);
      setError(`Failed to load products for ${selectedCategory?.name}. Please try again later.`);
    } finally {
      setLoading(false);
    }
  };
  
  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    fetchCategoryProducts(category.id);
  };
  
  return (
    <>
      <EnquiryReloadHome />
      <SaleModal />
      <div className="home-container" style={{ width: '100%', overflow: 'hidden', margin: 0, padding: 0, fontSize: 0 }}>
        <TopArea/>
        <div style={{ fontSize: '1rem' }}>
          <CategorySlider />
          <LeadSlider />
          
          {/* Category Selector */}
          <div className="container-fluid mt-4">
            <div className="row">
              <div className="col-12">
                {loading && <p>Loading categories...</p>}
                {error && <div className="alert alert-danger">{error}</div>}
                {!loading && !error && categories.length > 0 && (
                  <CategorySelector 
                    categories={categories} 
                    selectedCategoryId={selectedCategory?.id} 
                    onSelectCategory={handleCategorySelect} 
                  />
                )}
              </div>
            </div>
          </div>
          
          {/* Single Product Category Component */}
          {selectedCategory && (
            <SliderAreaMiddleProduct 
              type={selectedCategory.name}
              categoryId={selectedCategory.id}
              heading={selectedCategory.heading || `Discover premium ${selectedCategory.name} products`}
              description={selectedCategory.description || `Browse our selection of high-quality ${selectedCategory.name} products from verified suppliers`}
              data={categoryProducts}
              loading={loading}
              error={error}
            />
          )}
          {/* <Testimonial /> */}
          {/* <BrandPartner /> */}
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
