import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Specific icons (solid, regular, and brands)
import { faHome, faUser, faBars, faRightToBracket, faSnowflake,faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Navbar = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleSub, setIsVisibleSub] = useState(false);

  // Toggle function to switch between true and false
  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };
  const toggleVisibilitySub = () => {
    setIsVisibleSub(prevStateSub => !prevStateSub);
  };

  const navbarRef = useRef(null);
  // Close the navbar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && !custom-text-large) {
        setIsVisible(false);
      }
    };

    // Attach the event listener
    document.addEventListener("click", handleOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);


  return (
    <>
          {/*header-area start*/}
  <header className="header-area">
    <div className="desktop-header">
      {/*header-top*/}
      <div className="header-top">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="topbar-left">
                <ul className="list-none">
                  <li>
                    SHOP EVENTS &amp; SAVE UP TO <span>65% OFF!</span>
                  </li>
                  <li>
                    Call Us: <span>001-1234-88888</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="topbar-right">
                <div className="social-icons pull-right">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fa fa-youtube" />
                  </a>
                </div>
                <div className="currency-bar lang-bar pull-right">
                  <ul>
                    <li>
                      <a href="#">
                        <img src="/images/icons/gb.png" alt="" />
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
                      <a href="#">
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
      {/*header-bottom*/}
      <div className="sticker header-bottom  ">
        <div className="container-fluid">
          <div className="row align-items-center ">
            <div className="col-lg-3 d-flex justify-content-center">
              <div className="logo">
                <a href="#">
                  <img
                    src="/images/company_logo.png"
                    alt="logo"
                    height="50px"
                    width="200px"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-7 d-flex justify-content-center ">
              <div className="mainmenu fs-7 ">
                <nav>
                  <ul>
                    <li>
                      <a href="#">Home </a>
                    </li>
                    <li>
                      <a href="#">Buyer</a>
                    </li>
                    <li>
                      <a href="#">Seller</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="#">Advertisement</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="register-login">
                <a href="#">Register</a>
                <span>/</span>
                <a href="#">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*products-search*/}
      <div className="products-search">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-xl-2 col-lg-3">
              <div className="collapse-menu mt-0">
                <ul>
                  <li>
                    <a href="javascript:void(0);" className="vm-menu">
                      <i className="fa fa-navicon" />
                      <span>All Departments</span>
                    </a>
                    <ul className="vm-dropdown">
                      <li>
                        <a href="#">
                          <i className="fa fa-globe" />
                          Agriculture <b className="caret" />
                        </a>
                        <ul className="mega-menu">
                          <li className="megamenu-single">
                            <span className="mega-menu-title">
                              Fresh Flower &amp; Plant
                            </span>
                            <ul>
                              <li>
                                <a href="#">Products Block Top</a>
                              </li>
                              <li>
                                <a href="#">Products Block Bottom</a>
                              </li>
                              <li>
                                <a href="#">Shop Grid 5 Column</a>
                              </li>
                              <li>
                                <a href="#">Shop List</a>
                              </li>
                              <li>
                                <a href="#">Shop width Normal</a>
                              </li>
                              <li>
                                <a href="#">Shop List Normal</a>
                              </li>
                            </ul>
                          </li>
                          <li className="megamenu-single">
                            <span className="mega-menu-title">
                              irrigation Equipment &amp; system
                            </span>
                            <ul>
                              <li>
                                <a href="#">Thumbnails Left</a>
                              </li>
                              <li>
                                <a href="#">Thumbnails Right</a>
                              </li>
                              <li>
                                <a href="#">Thumbnails Bottom</a>
                              </li>
                              <li>
                                <a href="#">Thumbnails Full</a>
                              </li>
                              <li>
                                <a href="#">Single 2 Colums</a>
                              </li>
                              <li>
                                <a href="#">Tabs Content</a>
                              </li>
                            </ul>
                          </li>
                          <li className="megamenu-single">
                            <span className="mega-menu-title">Pesticides</span>
                            <ul>
                              <li>
                                <a href="#">Simple Product</a>
                              </li>
                              <li>
                                <a href="#">Grouped Product</a>
                              </li>
                              <li>
                                <a href="#">Variable Product</a>
                              </li>
                              <li>
                                <a href="#">External Product</a>
                              </li>
                              <li>
                                <a href="#">My account</a>
                              </li>
                              <li>
                                <a href="#">Checkout</a>
                              </li>
                            </ul>
                          </li>
                          {/* <li class="megamenu-single">
														<span class="mega-menu-title">Features</span>
														<ul>
															<li><a href="#">Detail with Video</a></li>
															<li><a href="#">Variations Swatches</a></li>
															<li><a href="#">With Countdown Timer</a></li>
															<li><a href="#">Catalog Mode</a></li>
														</ul>
													</li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-desktop" />
                          Computer &amp; Internet <b className="caret" />
                        </a>
                        <ul className="mega-menu">
                          <li className="megamenu-single">
                            <span className="mega-menu-title">Hardware</span>
                            <ul>
                              <li>
                                <a href="#">Products Block Top</a>
                              </li>
                              <li>
                                <a href="#">Products Block Bottom</a>
                              </li>
                              <li>
                                <a href="#">Shop Grid 5 Column</a>
                              </li>
                              <li>
                                <a href="#">Shop List</a>
                              </li>
                              <li>
                                <a href="#">Shop width Normal</a>
                              </li>
                              <li>
                                <a href="#">Shop List Normal</a>
                              </li>
                            </ul>
                          </li>
                          <li className="megamenu-single">
                            <span className="mega-menu-title">Software</span>
                            <ul>
                              <li>
                                <a href="#">Thumbnails Left</a>
                              </li>
                              <li>
                                <a href="#">Thumbnails Right</a>
                              </li>
                              <li>
                                <a href="#">Thumbnails Bottom</a>
                              </li>
                              <li>
                                <a href="#">Thumbnails Full</a>
                              </li>
                              <li>
                                <a href="#">Single 2 Colums</a>
                              </li>
                              <li>
                                <a href="#">Detail with Accessories</a>
                              </li>
                              <li>
                                <a href="#">Tabs Content</a>
                              </li>
                              <li>
                                <a href="#">Accordion Tabs</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-camera" />
                          Camera &amp; Photography
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-headphones" />
                          Health &amp; Beauty
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-mobile" />
                          Smart phone &amp; Tablets
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i><FontAwesomeIcon icon={faGamepad} /></i>
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-microphone" />
                          Appeal &amp; Faishon
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-print" />
                          Chemical
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-fax" />
                          Ayurvedic &amp; Herbal
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-spoon" />
                          Household goods
                        </a>
                      </li>
                      <li>
                        <a href="#">
                        <i><FontAwesomeIcon icon={faSnowflake} /></i>
                          Jwelery
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-random" />
                          Other
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-5">
              <div className="search-box">
                <select className=" d-flex align-items-center" style={{padding:'5px'}}>
                  <option>All Categories</option>
                  <option>For Buyer</option>
                  <option>For Seller</option>
                </select>
                <input type="text" placeholder="What do you need?" />
                <button>Search</button>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    {/*mobile-header*/}
    <div className="sticker mobile-header">
      <div className="container-fluid">
        {/*logo and cart*/}
        <div className="row align-items-center">
          <div className="col-sm-4 col-6">
            <div className="logo">
              <a href="index.html">
                <img src="/images/company_logo.png" alt="logo" />
              </a>
            </div>
          </div>
          <div className="col-sm-8 col-6">
                <div className=" custom-text-large text-right"  >
                  <button onClick={toggleVisibility} style={{padding:'5px 10px'}} className='custom-text-large'>
                  <FontAwesomeIcon icon={faBars} />   

                  </button>

            </div>
          </div>
          
                                {/* nab bar hidden items start */}
                  
                                <div className="mainmenu" style={{ display: isVisible ? 'block' : 'none',  width:'100%', textAlign:'left',}} >
      <nav id="my-menu" className={`vertical-navbar ${isVisible ? 'open' : ""}`} ref={navbarRef}
        >
      
                  <ul>
                    <div style={{  backgroundColor: '#E8E8E8', width: '250px', textAlign:'center', color:'skyblue'}}>
                      <h4 style={{fontWeight:'700', padding:'7px' }}>Menu</h4>
                    </div>
        <li>
          <a href='#' style={{display:'flex', justifyContent:'space-between'}}>
            <span>Home</span> <b className="caret"></b>
          </a>
          <ul >
            <li>
              <a>Home Version 1</a>
            </li>
            <li>
              <a>Home Version 2</a>
            </li>
            <li>
              <a>Home Version 3</a>
            </li>
            <li>
              <a>Home Version 4</a>
            </li>
            <li>
              <a>Home Version 5</a>
            </li>
            <li>
              <a>Home Version 6</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" style={{display:'flex', justifyContent:'space-between'}}>
            Shop <b className="caret"></b>
          </a>
          <ul>
            
                <li>
                  <a href="shop.html">Shop Grid</a>
                </li>
                <li>
                  <a href="shop-list.html">Shop List</a>
                </li>
                <li>
                  <a href="shop-list-col-3.html">Shop Column 3</a>
                </li>
                <li>
                  <a href="product-details.html">Product Details</a>
                </li>
                <li>
                  <a href="poduct-details-sidebar.html">
                    Product Details Sidebar
                  </a>
                </li>
           
          </ul>
          
         
        </li>
        {/* Additional items omitted for brevity */}
        <li>
          <a href="contact.html" >Contact</a>
        </li>
        <li>
        <a href='#' style={{display:'flex', justifyContent:'space-between'}}>Register <FontAwesomeIcon icon={faUser} /></a>
        </li>
        <li>
        <a href='#' style={{display:'flex', justifyContent:'space-between'}}><span>Login</span> <FontAwesomeIcon icon={faRightToBracket} /></a>
          
        </li>
        
      </ul>
    </nav>
            </div>
{/* nab bar hidden items end */}
        </div>
        {/*search-box*/}
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="search-box mt-sm-15">
              
              <input type="text" placeholder="What do you need?" />
              <button>Search</button>
            </div>
          </div>
        </div>
        {/*site-menu*/}
        <div className="row mt-sm-10 pb-0 ">
          <div className="col-lg-12">
            <a href="#my-menu" className="mmenu-icon pull-left mt-2 ">
              <i className="fa fa-bars" />
            </a>
            
            {/*category*/}
            <div className="collapse-menu pull-right">
              <ul>
                <li>
                  <a href="javascript:void(0);" className="vm-menu">
                    <i className="fa fa-navicon" />
                    <span>All Departments</span>
                  </a>
                  <ul className="vm-dropdown">
                    <li>
                      <a href="#">
                        <i className="fa fa-laptop" />
                        Computer <b className="caret" />
                      </a>
                      <ul className="mega-menu">
                        <li className="megamenu-single">
                          <span className="mega-menu-title">Shop Page</span>
                          <ul>
                            <li>
                              <a href="#">Products Block Top</a>
                            </li>
                            <li>
                              <a href="#">Products Block Bottom</a>
                            </li>
                            <li>
                              <a href="#">Shop Grid 5 Column</a>
                            </li>
                            <li>
                              <a href="#">Shop List</a>
                            </li>
                            <li>
                              <a href="#">Shop width Normal</a>
                            </li>
                            <li>
                              <a href="#">Shop List Normal</a>
                            </li>
                          </ul>
                        </li>
                        <li className="megamenu-single">
                          <span className="mega-menu-title">Featured</span>
                          <ul>
                            <li>
                              <a href="#">Thumbnails Left</a>
                            </li>
                            <li>
                              <a href="#">Thumbnails Right</a>
                            </li>
                            <li>
                              <a href="#">Thumbnails Bottom</a>
                            </li>
                            <li>
                              <a href="#">Thumbnails Full</a>
                            </li>
                            <li>
                              <a href="#">Single 2 Colums</a>
                            </li>
                            <li>
                              <a href="#">Tabs Content</a>
                            </li>
                          </ul>
                        </li>
                        <li className="megamenu-single">
                          <span className="mega-menu-title">Shop Page</span>
                          <ul>
                            <li>
                              <a href="#">Simple Product</a>
                            </li>
                            <li>
                              <a href="#">Grouped Product</a>
                            </li>
                            <li>
                              <a href="#">Variable Product</a>
                            </li>
                            <li>
                              <a href="#">External Product</a>
                            </li>
                            <li>
                              <a href="#">My account</a>
                            </li>
                            <li>
                              <a href="#">Checkout</a>
                            </li>
                          </ul>
                        </li>
                        <li className="megamenu-single">
                          <span className="mega-menu-title">Features</span>
                          <ul>
                            <li>
                              <a href="#">Detail with Video</a>
                            </li>
                            <li>
                              <a href="#">Variations Swatches</a>
                            </li>
                            <li>
                              <a href="#">With Countdown Timer</a>
                            </li>
                            <li>
                              <a href="#">Catalog Mode</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-desktop" />
                        TV &amp; Smart box <b className="caret" />
                      </a>
                      <ul className="mega-menu">
                        <li className="megamenu-single">
                          <span className="mega-menu-title">Shop Page</span>
                          <ul>
                            <li>
                              <a href="#">Products Block Top</a>
                            </li>
                            <li>
                              <a href="#">Products Block Bottom</a>
                            </li>
                            <li>
                              <a href="#">Shop Grid 5 Column</a>
                            </li>
                            <li>
                              <a href="#">Shop List</a>
                            </li>
                            <li>
                              <a href="#">Shop width Normal</a>
                            </li>
                            <li>
                              <a href="#">Shop List Normal</a>
                            </li>
                          </ul>
                        </li>
                        <li className="megamenu-single">
                          <span className="mega-menu-title">Featured</span>
                          <ul>
                            <li>
                              <a href="#">Thumbnails Left</a>
                            </li>
                            <li>
                              <a href="#">Thumbnails Right</a>
                            </li>
                            <li>
                              <a href="#">Thumbnails Bottom</a>
                            </li>
                            <li>
                              <a href="#">Thumbnails Full</a>
                            </li>
                            <li>
                              <a href="#">Single 2 Colums</a>
                            </li>
                            <li>
                              <a href="#">Detail with Accessories</a>
                            </li>
                            <li>
                              <a href="#">Tabs Content</a>
                            </li>
                            <li>
                              <a href="#">Accordion Tabs</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-camera" />
                        Camera &amp; Photography
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-headphones" />
                        Headphones
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-music" />
                        Musical Instruments
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-mobile" />
                        Smart phone &amp; Tablets
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-flash" />
                        Accessories
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-microphone" />
                        Home Audio &amp; Theater
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-print" />
                        Printer
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-fax" />
                        Fax machine
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-spoon" />
                        Household goods
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-clock-o" />
                        Watch
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-random" />
                        Other
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/*header-area end*/}
    </>
  )
}

export default Navbar