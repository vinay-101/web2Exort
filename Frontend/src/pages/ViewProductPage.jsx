import React from 'react'
import ViewProduct from '../components/Profile/ViewProduct'
import DashboardSidebar from '../components/Profile/DashboardSidebar'


const ViewProductPage = () => {
  return (
    <div style={{ display: "flex" }}>
     <DashboardSidebar />
     <ViewProduct />
  </div>
  )
}

export default ViewProductPage