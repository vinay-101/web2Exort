import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "../assets/css/SliderAreaTop.css"
import RequirementForm from './RequirementForm'

const SliderAreaTop = () => {
  return (
    <>
      <body>
      
          <div className="slider-area">
		<div className="container-fluid">
			<div className="row">
				<div className="col-xl-5 offset-xl-2">
                <div className="main-slider ">
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
					classNameName="mySwiper"
					>
          			<SwiperSlide>
          				<div className="slider-single bg-1" >
							<div className="d-table">
								<div className="slider-caption">
									
									<h4>Expansion of Local Companies:</h4>
									<p className="cssanimation leDoorCloseLeft sequence">Economic Growth via Trade:</p>
									<p className="cssanimation leDoorCloseLeft sequence">Consumer Benefits:</p>
									<p className="cssanimation leDoorCloseLeft sequence">Efficiency in Industries:</p>
									
								</div>
							</div>
						</div>
                    </SwiperSlide>
                    <SwiperSlide>
          				<div className="slider-single bg-2">
							<div className="d-table">
								<div className="slider-caption">
									<h4>Global Market Access</h4>
									<p className="cssanimation leDoorCloseLeft sequence">Trade Benefits for All:</p>
									<p className="cssanimation leDoorCloseLeft sequence">Industrial Efficiency: </p>
									<p className="cssanimation leDoorCloseLeft sequence">Diverse Consumer Choices:</p>
									
								</div>
							</div>
						</div>
                    </SwiperSlide>
                    </Swiper>
					</div>
						  </div>
						  <div className="col-xl-2 px-0">
  <div className="mt-10 d-flex flex-column">

    <div className="col-lg-12 col-sm-12 pl-0">
      <div className="banner-sm hover-effect mt-20 w-full" >
        <img
          src="/images/banners/rice.jpg"
          alt=""
          height="210px"
          width="100%"
        />
        {/* <div className="banner-info">
          <h4>Beauty</h4>
          <p>
            20% Off or <br /> more{" "}
            <strong>
              Beauty <br /> Product
            </strong>
          </p>
        </div> */}
      </div>
    </div>
    <div className="col-lg-12 col-sm-12 pl-0">
      <div className="banner-sm hover-effect mt-10">
        <img
          src="/images/banners/small/4.jpg"
          alt=""
          height="210px"
		width="100%"
        />
        {/* <div className="banner-info">
          <h4>Electronics</h4>
          <p>
            Globe Electric <br />{" "}
            <strong>
              House &amp; <br /> Appliances
            </strong>
          </p>
        </div> */}
      </div>
    </div>
  </div>
</div>


				<div className="col-xl-3">
							  <div className='mt-20'>
					<RequirementForm />
								  
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




