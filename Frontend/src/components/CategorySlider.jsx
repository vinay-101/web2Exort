import React, { useEffect, useState } from 'react';
import '../assets/swiper.scss';
import productService from '../Services/productService';

const CategorySlider = () => {
  const [categories, setCategories] = useState([]);
  // Configurable constants
  const ITEMS_PER_ROW = 4; // Number of items per row
  const ROWS_PER_SLIDE = 2; // Number of rows per slide
  const ITEMS_PER_SLIDE = ITEMS_PER_ROW * ROWS_PER_SLIDE;

  // Fetch categories
  async function fetchCategories() {
    try {
      const res = await productService.fetchCategories();
      console.log('res', res);
      setCategories(res.data.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }
    
  useEffect(() => {
    fetchCategories();
  }, []);

  console.log("All Categories", categories);

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
    <div className="col-6 col-md-3 mb-3">
      <a href={category.link || '#'} className="category-link">
        <div className="category-card h-100">
          <img 
            style={{ 
              width: "100px", 
              height: "100px", 
              objectFit: "contain", 
              objectPosition: "center", 
              borderRadius: "10px"
            }} 
            src={`http://localhost:5000/${category.image}`} 
            alt="category_image"
          />
          <span className="category-label">
            {category.label || category.name}
          </span>
        </div>
      </a>
    </div>
  );

  return (
    <div className="container-fluid px-0 py-5">
      <swiper-container 
        navigation="true"
        slides-per-view="1"
        space-between="0"
        className="mySwiper"
      >
        {slides.map((slideCategories, slideIndex) => {
          // Split slide categories into rows
          const rows = chunkArray(slideCategories, ITEMS_PER_ROW);

          return (
            <swiper-slide key={slideIndex}>
              <div className="container-fluid px-3">
                {rows.map((rowCategories, rowIndex) => (
                  <div key={rowIndex} className="row mb-3">
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
  );
};

export default CategorySlider;