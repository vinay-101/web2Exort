import React, { useEffect, useState } from 'react';
import '../assets/swiper.scss';
import productService from '../Services/productService';
import { Link } from 'react-router-dom';

const CategorySlider = () => {
  const [categories, setCategories] = useState([]);
  // Configurable constants
  const ITEMS_PER_ROW = 6; // Changed from 5 to 6 items per row
  const ROWS_PER_SLIDE = 1; // Number of rows per slide
  const ITEMS_PER_SLIDE = ITEMS_PER_ROW * ROWS_PER_SLIDE;

  // Fetch categories
  async function fetchCategories() {
    try {
      const res = await productService.fetchCategories();
      setCategories(res.data.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  // Function to split array into chunks
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  // Prepare slides
  const slides = chunkArray(categories, ITEMS_PER_SLIDE);

  // Component to render a single category item
  const CategoryItem = ({ category }) => (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 px-2" style={{ width: '16.666%' }}> {/* Changed width to 16.666% for 6 items */}
      <Link  to={`/categories/${category.id}`} className="category-link">
        <div className="category-card">
          <img
            src={category.image ? `http://localhost:5000/${category.image}` : '/images/placeholder.png'}
            alt={category.name}
            onError={(e) => {
              e.target.src = '/images/placeholder.png';
            }}
          />
          <div className="category-label">
            {category.label || category.name}
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <div className="category-slider-section">
      <div className="container-fluid">
        <div className="section-header">
          <h2 className="section-title">FEATURED CATEGORIES</h2>
          <div className="section-underline"></div>
        </div>
      </div>
      <div className="container-fluid py-4">
        <swiper-container
          navigation="true"
          slides-per-view="1"
          space-between="0"
          className="mySwiper category-swiper"
        >
          {slides.map((slideCategories, slideIndex) => {
            const rows = chunkArray(slideCategories, ITEMS_PER_ROW);

            return (
              <swiper-slide key={slideIndex}>
                <div className="container-fluid px-5">
                  {rows.map((rowCategories, rowIndex) => (
                    <div key={rowIndex} className="row g-3 justify-content-center" style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -8px' }}>
                      {rowCategories.map((category, itemIndex) => (
                        <CategoryItem
                          key={`${slideIndex}-${rowIndex}-${itemIndex}`}
                          category={category}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </swiper-slide>
            );
          })}
        </swiper-container>
      </div>
    </div>
  );
};

export default CategorySlider;