import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const TestimonialSlider = () => {
  return (
    <div
      id="testimonialCarousel"
      className="carousel slide py-5"
      data-ride="carousel"
    >
      <div className="container">
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li
            data-target="#testimonialCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#testimonialCarousel" data-slide-to="1"></li>
          <li data-target="#testimonialCarousel" data-slide-to="2"></li>
        </ol>

        {/* Carousel Items */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="testimonial-card mx-auto">
              <p className="testimonial-text">
                "Bootstrap 4.3 is versatile and easy to use, especially for responsive designs."
              </p>
              <h5 className="testimonial-author">- John Doe</h5>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="testimonial-card mx-auto">
              <p className="testimonial-text">
                "I enjoy using Bootstrap 4.3 to create sleek, modern layouts quickly."
              </p>
              <h5 className="testimonial-author">- Jane Smith</h5>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="testimonial-card mx-auto">
              <p className="testimonial-text">
                "Bootstrap 4.3 and React together make development fast and enjoyable!"
              </p>
              <h5 className="testimonial-author">- Alex Brown</h5>
            </div>
          </div>
        </div>

        {/* Controls */}
        <a
          className="carousel-control-prev"
          href="#testimonialCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#testimonialCarousel"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default TestimonialSlider;
