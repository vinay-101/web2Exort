import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../assets/css/Testimonial.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Sample Feedback Data
const feedbackData = [
  { name: "Alice", rating: 5, date: "2025-01-01", text: "Great service and fast delivery!" },
  { name: "Bob", rating: 4, date: "2025-01-02", text: "Good product range, but delivery took a bit longer." },
  { name: "Charlie", rating: 5, date: "2025-01-03", text: "Super easy to use and very convenient." },
  { name: "Diana", rating: 3, date: "2025-01-04", text: "Products were okay, but the app needs improvements." },
  { name: "Ethan", rating: 5, date: "2025-01-05", text: "Loved it! Great discounts and fast service." },
  { name: "Fiona", rating: 4, date: "2025-01-06", text: "Affordable prices but limited stock at times." },
  { name: "George", rating: 5, date: "2025-01-07", text: "Very reliable for quick groceries!" },
  { name: "Hannah", rating: 5, date: "2025-01-08", text: "Impressive customer support and great quality." },
  { name: "Ian", rating: 3, date: "2025-01-09", text: "Wish there were more payment options." },
  { name: "Julia", rating: 4, date: "2025-01-10", text: "Great app, but delivery slots fill up fast." },
  { name: "Kevin", rating: 5, date: "2025-01-11", text: "Excellent app for last-minute grocery needs!" },
  { name: "Laura", rating: 4, date: "2025-01-12", text: "Overall good, but some items were out of stock." },
  { name: "Mike", rating: 5, date: "2025-01-13", text: "Amazing experience every time I use it!" },
  { name: "Nina", rating: 3, date: "2025-01-14", text: "Good service but not enough organic products." },
  { name: "Oscar", rating: 4, date: "2025-01-15", text: "Easy to use but delivery could be quicker." },
];

export default function Testimonial() {
  return (
    <>
      <section id="testimonialSlider">
        <h1>Customer Feedback</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          initialSlide={2}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {feedbackData.map((feedback, index) => (
            <SwiperSlide key={index}>
              <div className="feedback-card">
                <h3 className="feedback-name">{feedback.name}</h3>
                <p className="feedback-text">"{feedback.text}"</p>
                <div className="feedback-rating">
                  {Array(feedback.rating).fill("⭐").join("")} ({feedback.rating}/5)
                </div>
                <p className="feedback-date">{feedback.date}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
