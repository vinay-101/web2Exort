import React from 'react'
import Navbar from './Navbar'
import SliderAreaTop from './SliderAreaTop'
import SliderAreaMiddleProduct from './SliderAreaMiddleProduct'
import SliderAreaDownProductOne from './SliderAreaDownProductOne'
import Testimonial from './Testimonial'
import BrandPartner from './BrandPartner'
import Footer from './Footer'
import LeftSidebar from './LoginComponents/ProductPageLeftside'
import RightContent from './LoginComponents/ProductPageRightside'

const Home = () => {
  return (
<>
      <Navbar />
      <SliderAreaTop />
    {/* <div className="product-page-app-container">
      <LeftSidebar />
      <RightContent />
    </div> */}
      <SliderAreaMiddleProduct />
      <SliderAreaDownProductOne />
      <Testimonial />
      <BrandPartner /> 
      <Footer /> 

</>

  )
}

export default Home
