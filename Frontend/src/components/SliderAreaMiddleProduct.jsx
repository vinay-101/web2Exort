import React, { useState, useEffect } from 'react'
import "../assets/product.scss"

// Sample data - this would be replaced with API calls in the future
const categoryData = {
  1: { // Agriculture
    subcategories: [
      {
        id: 1,
        title: "Agriculture Machinery & Equipment",
        items: "Agriculture Farm Tractors, Agriculture Grinders, Multures, Agriculture Threshers, Agriculture Bags",
        image: "https://images.unsplash.com/photo-1589923188651-571072a0a604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        id: 2,
        title: "Agriculture Fertilizers & Pesticides",
        items: "Agriculture Seeds Bactericides, DAP (Diammonium Phosphate), Fertilizers",
        image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      },
      {
        id: 3,
        title: "Agriculture Products",
        items: "Chia Seeds, Desiccated Coconut, Fennel Seeds, Rice",
        image: "https://images.unsplash.com/photo-1595435742656-5780f7a17d8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      },
      {
        id: 4,
        title: "Flowers And Plants Related Products",
        items: "Aloe Vera, Artificial Grass, Synthetic Turf, Ashwagandha, Basil Leaf",
        image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      }
    ]
  },
  2: { // Apparel
    subcategories: [
      {
        id: 1,
        title: "Men's Clothing",
        items: "T-shirts, Shirts, Jeans, Suits, Jackets",
        image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      },
      {
        id: 2,
        title: "Women's Clothing",
        items: "Dresses, Tops, Skirts, Jeans, Activewear",
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        id: 3,
        title: "Fashion Accessories",
        items: "Bags, Belts, Jewelry, Watches, Sunglasses",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        id: 4,
        title: "Footwear",
        items: "Shoes, Boots, Sandals, Sports Footwear",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
      }
    ]
  },
  // Add more categories as needed (5, 6, 8, 10, 15, 18)
  5: { // Construction & real estate
    subcategories: [
      {
        id: 1,
        title: "Building Materials",
        items: "Cement, Bricks, Steel, Timber, Glass",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      },
      {
        id: 2,
        title: "Construction Equipment",
        items: "Excavators, Cranes, Bulldozers, Concrete Mixers",
        image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        id: 3,
        title: "Real Estate Properties",
        items: "Commercial Buildings, Residential Apartments, Land",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
      },
      {
        id: 4,
        title: "Interior Finishing",
        items: "Paints, Flooring, Tiles, Fixtures, Lighting",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
      }
    ]
  },
  // Add more categories with similar structure
};

const SliderAreaMiddleProduct = ({ 
  type, 
  categoryId, 
  heading = `Find top-quality wholesale ${type?.toLowerCase()} products at best prices`, 
  description = `From verified sellers, suppliers, manufacturers, and exporters. ${type} is without a doubt one of the most essential industries worldwide.` 
}) => {
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate API fetch - this would be replaced with a real API call
  useEffect(() => {
    setLoading(true);
    
    // Simulate API delay
    const timer = setTimeout(() => {
      // Get data for the current category
      const data = categoryData[categoryId]?.subcategories || [];
      setSubcategories(data);
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [categoryId]);
  return (
    <div className="container-fluid product_wrapper mt-4">
      <h1 className="section-header">{type}</h1>
      {/* Hero Banner */}
      <div className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">
            {heading}
          </h2>
          <p className="hero-text">
            {description}
          </p>
          <button className="btn btn-view-all">View All</button>
        </div>
      </div>
      
      {/* Product Categories */}
      <div className="row">
        {loading ? (
          <div className="col-12 text-center py-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : subcategories.length === 0 ? (
          <div className="col-12 text-center py-5">
            <p>No subcategories found for this category.</p>
          </div>
        ) : (
          subcategories.map((subcat) => (
            <div key={subcat.id} className="col-lg-3 col-md-6 col-sm-6">
              <div className="card">
                <div className="card-img-container">
                  <img
                    src={subcat.image}
                    className="card-img-top"
                    alt={subcat.title}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{subcat.title}</h5>
                  <p className="category-items">
                    {subcat.items}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <a href="#" className="see-more-link">
                      See More
                    </a>
                    <i className="fa fa-arrow-right icon-arrow" />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default SliderAreaMiddleProduct
