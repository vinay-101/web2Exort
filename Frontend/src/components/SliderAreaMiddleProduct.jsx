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
    if (data) {
      // Check different possible response structures
      if (data.subCategories) {
        setSubCategories(data.subCategories);
      } else if (data.SubCategories) {
        setSubCategories(data.SubCategories);
      } else {
        setSubCategories([]);
      }
    }
  }, [data]);

  // Helper for image alt text
  const getAltText = (name) => name ? `${name} category image` : 'Category image';

  // Helper for subcategory name fallback
  const getSubcatName = (name) => name && name.trim() ? name : 'Unnamed Category';

  return (
    <div className="container-fluid product_wrapper mt-4">
      <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-2">
        <div>
          <h1 className="section-header mb-1" aria-label={`${type} categories`}>{type}</h1>
          <div className="text-muted mb-3" style={{fontSize: '1rem', fontWeight: 400}}>{heading}</div>
        </div>
        {/* View All as prominent link on right for desktop */}
        <div className="d-none d-md-block mb-3 mb-md-0">
          <Link to={`/categories/${categoryId}`} className="btn btn-view-all" aria-label="View all products in this category">View All</Link>
        </div>
      </div>
      {/* Hero Banner */}
      <section className="hero-section mb-4" aria-label="Category highlight">
        <div className="hero-content">
          <h2 className="hero-title">
            {heading}
          </h2>
          <p className="hero-text">
            {description}
          </p>
          {/* View All for mobile */}
          <div className="d-block d-md-none mt-2">
            <Link to={`/categories/${categoryId}`} className="btn btn-view-all w-100" aria-label="View all products in this category">View All</Link>
          </div>
        </div>
      </section>
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
          subCategories.map((subcat, idx) => {
            // Check both possible property names
            const downSubCats = subcat.downSubCategories || subcat.DownSubCategories || [];
            return (
              <div key={subcat.id || idx} className="col-lg-3 col-md-6 col-sm-6 mb-4 fade-in-card">
                <div className="card h-100 d-flex flex-column">
                  <div className="card-img-container" style={{boxShadow: '0 2px 8px rgba(20,103,193,0.08)', borderRadius: '12px', border: '1px solid #e3eaf3'}}>
                    <img
                      style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.3s' }}
                      src={subcat.image ? `http://localhost:5000/${subcat.image}` : '/images/placeholder.png'}
                      className="card-img-top"
                      alt={getAltText(subcat.name)}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/placeholder.png';
                      }}
                    />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{getSubcatName(subcat.name)}</h5>
                    <p className="category-items">
                      {downSubCats.length > 0
                        ? downSubCats.slice(0, 5).map(item => item.name).join(', ')
                        : 'No items available'}
                      {downSubCats.length > 5 && '...'}
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <Link to={`categories/${subcat.categoryId}`} className="see-more-link" aria-label={`See more in ${getSubcatName(subcat.name)}`}>
                        See More
                      </Link>
                      <i className="fa fa-arrow-right icon-arrow" aria-hidden="true" />
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
