import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "../assets/css/SliderAreaTop.css"

const SliderAreaTop = () => {
  return (
    <>
      <body>
      
          <div class="slider-area">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-6 offset-xl-2">
                <div class="main-slider mt-30 mt-sm-0">
                <Swiper
        spaceBetween={30}
        centeredSlides={true}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false, 
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
          <SwiperSlide>
          <div class="slider-single bg-1">
							<div class="d-table">
								<div class="slider-caption">
									
									<h4>Expansion of Local Companies:</h4>
									<p class="cssanimation leDoorCloseLeft sequence">Economic Growth via Trade:</p>
									<p class="cssanimation leDoorCloseLeft sequence">Consumer Benefits:</p>
									<p class="cssanimation leDoorCloseLeft sequence">Efficiency in Industries:</p>
									<div class="slider-product-price">

									</div>
								</div>
							</div>
						</div>
                    </SwiperSlide>
                    <SwiperSlide>
          <div class="slider-single bg-2">
							<div class="d-table">
								<div class="slider-caption">
									<h4>Global Market Access</h4>
									<p class="cssanimation leDoorCloseLeft sequence">Trade Benefits for All:</p>
									<p class="cssanimation leDoorCloseLeft sequence">Industrial Efficiency: </p>
									<p class="cssanimation leDoorCloseLeft sequence">Diverse Consumer Choices:</p>
									
								</div>
							</div>
						</div>
                    </SwiperSlide>
                    </Swiper>
					</div>
				</div>
				<div class="col-xl-4">
					<div class="row mt-30">
						<div class="col-lg-6 col-sm-6 pl-05">
							<div class="banner-sm hover-effect">
								<img src="/images/banners/rice.jpg" alt="" height="210px" width="100px"/>
								<div class="banner-info">
									<h4>Agriculture</h4>
									<p>Extra <strong>30%</strong> <br/>  <strong>Off</strong> All <br/></p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-sm-6 pl-05">
							<div class="banner-sm hover-effect mt-sm-20">
								<img src="/images/banners/small/2.jpg" alt="" height="210px" width="100px"/>
								<div class="banner-info">
									<h4>Tech</h4>
									<p>Riley <strong>Smart</strong> <br/>  <strong>Home</strong> Patrol <br/> Robot</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-sm-6 pl-05">
							<div class="banner-sm hover-effect mt-20">
								<img src="/images/banners/small/3.jpg" alt="" height="210px" width="100px"/>
								<div class="banner-info">
									<h4>Beauty</h4>
									<p>20% Off or <br/> more <strong>Beauty <br/> Product</strong></p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-sm-6 pl-05">
							<div class="banner-sm hover-effect mt-20">
								<img src="./images/banners/small/4.jpg" alt="" height="210px" width="100px"/>
								<div class="banner-info">
									<h4>Electronics</h4>
									<p>Globe Electric <br/> <strong>House & <br/> Appliances</strong></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
          
          

      
        
      </body>
    
      
    </>
  );
  
}

export default SliderAreaTop




