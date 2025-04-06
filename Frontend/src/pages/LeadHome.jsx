import React from "react";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import LeadListing from "../components/LeadListing";
import Footer from "../components/Footer";

const LeadHome = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <LeadListing/>
      <Footer/>
    </div>
  );
};

export default LeadHome;
