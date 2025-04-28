import React, { useState, useEffect } from 'react'
import "../assets/product.scss"
import { Link } from 'react-router-dom';

const SliderAreaMiddleProduct = ({ 
  type, 
  categoryId, 
  heading = `Find top-quality wholesale ${type?.toLowerCase()} products at best prices`, 
  description = `From verified sellers, suppliers, manufacturers, and exporters. ${type} is without a doubt one of the most essential industries worldwide.`,
  data,
  loading = false,
  error = null
}) => {
  const [subCategories, setSubCategories] = useState([]);
  
  // Process API data when it changes
  useEffect(() => {
    console.log("SliderAreaMiddleProduct received data:", data);
    if (data) {
      // Check different possible response structures
      if (data.subCategories) {
        console.log("Using data.subCategories");
        setSubCategories(data.subCategories);
      } else if (data.SubCategories) {
        console.log("Using data.SubCategories");
        setSubCategories(data.SubCategories);
      } else {
        console.log("No subcategories found in data");
        setSubCategories([]);
      }
    }
  }, [data]);

  console.log("Rendering with subCategories:", subCategories);

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
        ) : error ? (
          <div className="col-12 text-center py-3">
            <div className="alert alert-danger">{error}</div>
          </div>
        ) : subCategories.length === 0 ? (
          <div className="col-12 text-center py-5">
            <p>No subcategories found for this category.</p>
          </div>
        ) : (
          subCategories.map((subcat) => {
            console.log("Rendering subcategory:", subcat);
            // Check both possible property names
            const downSubCats = subcat.downSubCategories || subcat.DownSubCategories || [];
            return (
              <div key={subcat.id} className="col-lg-3 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-img-container">
                    <img style={{width: '100%', height: '100%', objectFit: 'cover', backgroundSize: 'cover', backgroundPosition: 'center'}}
                      src={subcat.image ? `http://localhost:5000/${subcat.image}` : '/images/placeholder.png'}
                      className="card-img-top"
                      alt={subcat.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/placeholder.png';
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{subcat.name}</h5>
                    <p className="category-items">
                      {downSubCats.length > 0 
                        ? downSubCats.slice(0, 5).map(item => item.name).join(', ')
                        : 'No items available'}
                      {downSubCats.length > 5 && '...'}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to={`categories/${subcat.categoryId}`} className="see-more-link">
                        See More
                      </Link>
                      <i className="fa fa-arrow-right icon-arrow" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  )
}

export default SliderAreaMiddleProduct
