import React from 'react'
import DashboardSidebar from '../components/Profile/DashboardSidebar'
import ProductListing from '../components/Profile/ProductListing'


const ProductListingPage = () => {
  return (
    <div className="">
    <div style={{display:"flex", width:"100%"}}>
     <DashboardSidebar/>
     <ProductListing/>
  </div>
  </div>
  )
}

export default ProductListingPage