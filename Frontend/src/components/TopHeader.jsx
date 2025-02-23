import React from 'react'
// import "../assets/style.scss"
import "../assets/style.css";
import "../assets/Js/profile.js"
const TopHeader = () => {
  return (
    <div className="header-top " style={{ backgroundColor: "#000" }}>
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="topbar-left">
            <div className="logo">
              <a href="">
                <img className='img-fluid' src="/images/logo.png" alt="logo" width={"100px"} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <div className="topbar-right">
            <div className="social-icons pull-right">
              <a href="#" className="hover:text-gray-300 ">
                <i className="fa fa-facebook fa-2x" style={{ color: "white" }} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fa fa-twitter fa-2x" style={{ color: "white" }} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fa fa-instagram fa-2x" style={{ color: "white" }} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fa fa-youtube fa-2x" style={{ color: "white" }} />
              </a>
            </div>
            <div className="currency-bar lang-bar pull-right">
              <ul>
                <li>
                  <a href="#" style={{ color: "#f7f7f7" }}>
                    <img
                      src="assets/images/icons/gb.png"
                      alt=""
                      style={{ color: "white" }}
                    />
                    English <i className="fa fa-angle-down" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">French</a>
                    </li>
                    <li>
                      <a href="#">Chinese</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="br">|</span>
                </li>
              </ul>
            </div>
            <div className="currency-bar pull-right">
              <ul>
                <li>
                  <a href="#" style={{ color: "#f7f7f7" }}>
                    USD <i className="fa fa-angle-down" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">EUR</a>
                    </li>
                    <li>
                      <a href="#">AUD</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>|</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default TopHeader
