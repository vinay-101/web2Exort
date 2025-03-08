import React from 'react';
import '../assets/swiper.scss';



const CategorySlider = () => {
  const categories = [
    { icon: 'fa-search', label: 'Accessories', link: '/accessories' },
    { icon: 'fa-laptop', label: 'Computers', link: '/computers' },
    { icon: 'fa-shopping-bag', label: 'Other Items', link: '/other' },
    { icon: 'fa-mobile', label: 'Mobiles', link: '/mobiles' },
    { icon: 'fa fa-clock-o', label: 'Watches', link: '/watches' },
    { icon: 'fa-headphones', label: 'Audio', link: '/audio' },
    { icon: 'fa-camera', label: 'Cameras', link: '/cameras' },
    { icon: 'fa-gamepad', label: 'Gaming', link: '/gaming' },
    { icon: 'fa-tv', label: 'Electronics', link: '/electronics' },
    { icon: 'fa-shoe-prints', label: 'Footwear', link: '/footwear' },
  ];

  // Split into slides with 8 items each (4 per row, 2 rows)
  const chunkSize = 8;
  const slides = [];
  for (let i = 0; i < categories.length; i += chunkSize) {
    slides.push(categories.slice(i, i + chunkSize));
  }

  return (
    <div className="container-fluid px-0 py-5">
      <swiper-container 
        navigation="true"
        slides-per-view="1"
        space-between="0"
        className="mySwiper"
      >
        {slides.map((slideCategories, index) => {
          // Split each slide into two rows of 4
          const firstRow = slideCategories.slice(0, 4);
          const secondRow = slideCategories.slice(4, 8);

          return (
            <swiper-slide key={index}>
              <div className="container-fluid px-3">
                {/* First Row */}
                <div className="row mb-3">
                  {firstRow.map((category, idx) => (
                    <div key={idx} className="col-6 col-md-3 mb-3">
                      <a href={category.link} className="category-link">
                        <div className="category-card h-100">
                          <i className={`fa ${category.icon} category-icon`}></i>
                          <span className="category-label">{category.label}</span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
                {/* Second Row */}
                <div className="row">
                  {secondRow.map((category, idx) => (
                    <div key={idx} className="col-6 col-md-3 mb-3">
                      <a href={category.link} className="category-link">
                        <div className="category-card h-100">
                          <i className={`fa ${category.icon} category-icon`}></i>
                          <span className="category-label">{category.label}</span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </swiper-slide>
          );
        })}
      </swiper-container>
    </div>
  );
};

export default CategorySlider;