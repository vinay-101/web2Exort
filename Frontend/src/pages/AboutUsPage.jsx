import React from "react";
import TopHeader from "../components/TopHeader";
import { Navbar } from "react-bootstrap";
import Footer from "../components/Footer";
import About from "../components/About";

const AboutUsPage = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
