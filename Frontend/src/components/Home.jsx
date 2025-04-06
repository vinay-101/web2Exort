import React, { useState } from "react";
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


// Category data for the selector
const categories = [
  { id: 1, name: "Agriculture", heading: "Discover premium agricultural products for your farming needs", description: "Connect with trusted suppliers of seeds, equipment, fertilizers, and more. Agriculture forms the backbone of our global food supply." },
  { id: 2, name: "Apparel and fashion accessories", heading: "Explore trendy wholesale fashion and accessories", description: "Source the latest styles from verified manufacturers and exporters. Stay ahead in the competitive fashion industry." },
  { id: 5, name: "Construction & real estate" },
  { id: 6, name: "Electronic & Electrical" },
  { id: 8, name: "Food & Beverages", heading: "Premium wholesale food and beverage supplies", description: "From ingredients to finished products, find quality F&B items from certified producers worldwide." },
  { id: 10, name: "Home furnishing & supplies" },
  { id: 15, name: "Industrial goods & chemical" },
  { id: 18, name: "Minerals & metals" }
];

// Component to select a category
const CategorySelector = ({ onSelectCategory }) => {
  return (
    <div className="category-selector mb-4">
      <h3 className="mb-3">Browse by Category</h3>
      <div className="d-flex flex-wrap gap-2">
        {categories.map(category => (
          <button 
            key={category.id}
            className="btn btn-outline-primary"
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
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  return (
    <>
      {/* <Navbar /> */}
      {/* <SliderAreaTop /> */}
      <EnquiryReloadHome />
      <TopArea/>
      <CategorySlider />
      <LeadSlider />
      
      {/* Category Selector */}
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12">
            <CategorySelector onSelectCategory={setCurrentCategory} />
          </div>
        </div>
      </div>
      
      {/* Single Product Category Component */}
      <SliderAreaMiddleProduct 
        type={currentCategory.name}
        categoryId={currentCategory.id}
        heading={currentCategory.heading}
        description={currentCategory.description}
      />
      {/* <SliderAreaDownProductOne /> */}
      <Testimonial />
      <BrandPartner />
      <Footer />
    </>
  );
};
export default Home;
