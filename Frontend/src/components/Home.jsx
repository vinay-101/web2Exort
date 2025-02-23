import React from "react";
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

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <SliderAreaTop /> */}
      <TopArea/>
      <CategorySlider />
      <SliderAreaMiddleProduct />
      <SliderAreaDownProductOne />
      <Testimonial />
      <BrandPartner />
      <Footer />
    </>
  );
};

export default Home;
