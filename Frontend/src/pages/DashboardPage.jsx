import React from "react";
import DashboardSidebar from "../components/Profile/DashboardSidebar";
import DashboardHome from "../components/Profile/DashboardHome";
import MembershipPage from "./MembershipPage";
import { useNavigate, useLocation } from 'react-router-dom';
import Testimonial from "../components/Profile/Testimonial";

const DashboardPage = () => {
  const location = useLocation(); 
  const navigate = useNavigate();

  const currentPath = location.pathname; // Get the current path

  console.log("Current Path:", currentPath); 

  let content; // Declare a variable to hold the content

  if (currentPath === "/user/profile") {
    content = <DashboardHome />;
  }

  return (
    <div className="">
      <div className="row">
        <DashboardSidebar />
        {content}
      </div>
    </div>
  );
};

export default DashboardPage;
