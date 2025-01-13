import React from 'react'

const Home = () => {
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
                <a href="#">Sign in</a>
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
                          <i className="fa fa-flash" />
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
                          <i className="fa fa-clock-o" />
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
            <div className="col-xl-8 col-lg-6">
              <div className="search-box">
                <select className=" d-flex align-items-center">
                  <option>All Categories</option>
                  <option>For Buyer</option>
                  <option>For Seller</option>
                </select>
                <input type="text" placeholder="What do you need?" />
                <button>Search</button>
              </div>
            </div>
            {/* post requirement enquiry */}
            <div className="col-xl-2 col-lg-3 d-flex justify-content-center">
              <button
                className="dreams-button bg-danger text-light border-0 py-2 px-4 rounded"
                onclick="openDreamModal()"
              >
                Post Requirement
              </button>
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
                <img src="/images/logos/logo-blue.png" alt="logo" />
              </a>
            </div>
          </div>
          <div className="col-sm-8 col-6">
            <div className="mini-cart text-right">
              <ul>
                <li>
                  <a href="#">
                    <i className="icon_heart_alt" />
                    <span>1</span>
                  </a>
                </li>
                <li className="minicart-icon">
                  <a href="#">
                    <i className="icon_bag_alt" />
                    <span>2</span>
                  </a>
                  <div className="cart-dropdown">
                    <ul>
                      <li>
                        <div className="mini-cart-thumb">
                          <a href="#">
                            <img
                              src="/images/products/cart/thumb-1.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="mini-cart-heading">
                          <span>$460.00 x 1</span>
                          <h5>
                            <a href="#">Kabino Bedside Table</a>
                          </h5>
                        </div>
                        <div className="mini-cart-remove">
                          <button>
                            <i className="ti-close" />
                          </button>
                        </div>
                      </li>
                      <li>
                        <div className="mini-cart-thumb">
                          <a href="#">
                            <img
                              src="/images/products/cart/thumb-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="mini-cart-heading">
                          <span>$460.00 x 1</span>
                          <h5>
                            <a href="#">Kabino Bedside Table</a>
                          </h5>
                        </div>
                        <div className="mini-cart-remove">
                          <button>
                            <i className="ti-close" />
                          </button>
                        </div>
                      </li>
                    </ul>
                    <div className="minicart-total fix">
                      <span className="pull-left">total:</span>
                      <span className="pull-right">$460.00</span>
                    </div>
                    <div className="mini-cart-checkout">
                      <a
                        href="shopping-cart.html"
                        className="btn-common view-cart"
                      >
                        VIEW CARD
                      </a>
                      <a
                        href="checkout.html"
                        className="btn-common checkout mt-10"
                      >
                        CHECK OUT
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*search-box*/}
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="search-box mt-sm-15">
              <select>
                <option>All Categories</option>
                <option>Computer</option>
                <option>TV &amp; Smart box</option>
                <option>Camera &amp; Photography</option>
                <option>Headphones</option>
              </select>
              <input type="text" placeholder="What do you need?" />
              <button>Search</button>
            </div>
          </div>
        </div>
        {/*site-menu*/}
        <div className="row mt-sm-10">
          <div className="col-lg-12">
            <a href="#my-menu" className="mmenu-icon pull-left">
              <i className="fa fa-bars" />
            </a>
            <div className="mainmenu">
              <nav id="my-menu">
                <ul>
                  <li>
                    <a href="index.html">
                      Home <b className="caret" />
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="index.html">Home Version 1</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home Version 2</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home Version 3</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home Version 4</a>
                      </li>
                      <li>
                        <a href="index-5.html">Home Version 5</a>
                      </li>
                      <li>
                        <a href="index-6.html">Home Version 6</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-label label-featured">
                        Featured
                      </span>
                      Shop
                      <b className="caret" />
                    </a>
                    <ul>
                      <li>
                        <span className="mega-menu-title">Shop Page</span>
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
                      <li>
                        <span className="mega-menu-title">Features</span>
                        <ul>
                          <li>
                            <a href="wishlist.html">Wishlist</a>
                          </li>
                          <li>
                            <a href="shopping-cart.html">Shopping Cart</a>
                          </li>
                          <li>
                            <a href="shop-compare.html">Shop Compare</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="mega-menu-title">Pages</span>
                        <ul>
                          <li>
                            <a href="about.html">About </a>
                          </li>
                          <li>
                            <a href="faq.html">FAQ</a>
                          </li>
                          <li>
                            <a href="coming-soon.html">Coming Soon</a>
                          </li>
                          <li>
                            <a href="404.html">404 Error</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="mega-menu-title">Blog</span>
                        <ul>
                          <li>
                            <a href="blog.html">Blog List</a>
                          </li>
                          <li>
                            <a href="blog-grid.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-fullwidth.html">Blog Fullwidth</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-label label-hot">Hot</span>
                      Pages
                      <b className="caret" />
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">Coming Soon</a>
                      </li>
                      <li>
                        <a href="404.html">404 Eror</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Blog <b className="caret" />
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog-fullwidth.html">Blog Full Width</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="#">Purchase Theme</a>
                  </li>
                </ul>
              </nav>
            </div>
            {/*category*/}
            <div className="collapse-menu mt-0 pull-right">
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
  {/*slider-area start*/}
  <div className="slider-area">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-6 offset-xl-2">
          <div className="main-slider mt-30 mt-sm-0">
            <div className="slider-single bg-1">
              <div className="d-table">
                <div className="slider-caption">
                  <h4>Expansion of Local Companies:</h4>
                  <p className="cssanimation leDoorCloseLeft sequence">
                    Economic Growth via Trade:
                  </p>
                  <p className="cssanimation leDoorCloseLeft sequence">
                    Consumer Benefits:
                  </p>
                  <p className="cssanimation leDoorCloseLeft sequence">
                    Efficiency in Industries:
                  </p>
                  <div className="slider-product-price"></div>
                </div>
              </div>
            </div>
            <div className="slider-single bg-2">
              <div className="d-table">
                <div className="slider-caption">
                  <h4>Global Market Access</h4>
                  <p className="cssanimation leDoorCloseLeft sequence">
                    Trade Benefits for All:
                  </p>
                  <p className="cssanimation leDoorCloseLeft sequence">
                    Industrial Efficiency:{" "}
                  </p>
                  <p className="cssanimation leDoorCloseLeft sequence">
                    Diverse Consumer Choices:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="row mt-30">
            <div className="col-lg-6 col-sm-6 pl-05">
              <div className="banner-sm hover-effect">
                <img
                  src="/images/banners/rice.jpg"
                  alt=""
                  height="210px"
                  width="100px"
                />
                <div className="banner-info">
                  <h4>Agriculture</h4>
                  <p>
                    Extra <strong>30%</strong> <br /> <strong>Off</strong> All{" "}
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 pl-05">
              <div className="banner-sm hover-effect mt-sm-20">
                <img
                  src="/images/banners/small/2.jpg"
                  alt=""
                  height="210px"
                  width="100px"
                />
                <div className="banner-info">
                  <h4>Tech</h4>
                  <p>
                    Riley <strong>Smart</strong> <br /> <strong>Home</strong>{" "}
                    Patrol <br /> Robot
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 pl-05">
              <div className="banner-sm hover-effect mt-20">
                <img
                  src="/images/banners/small/3.jpg"
                  alt=""
                  height="210px"
                  width="100px"
                />
                <div className="banner-info">
                  <h4>Beauty</h4>
                  <p>
                    20% Off or <br /> more{" "}
                    <strong>
                      Beauty <br /> Product
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 pl-05">
              <div className="banner-sm hover-effect mt-20">
                <img
                  src="/images/banners/small/4.jpg"
                  alt=""
                  height="210px"
                  width="100px"
                />
                <div className="banner-info">
                  <h4>Electronics</h4>
                  <p>
                    Globe Electric <br />{" "}
                    <strong>
                      House &amp; <br /> Appliances
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*slider-area end*/}
  {/*products-area start*/}
  <div className="products-area mt-47 mt-sm-37">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-2 col-lg-3">
          <div className="sidebar">
            {/*product-deal*/}
            <div className="sidebar-single">
              <div className="section-title">
                <h3>Deal off the week</h3>
              </div>
              <div className="row product-deals">
                {/*single-deal*/}
                <div className="col-lg-12">
                  <div className="product-single product-deal">
                    <div className="product-title">
                      <small>
                        <a href="#">Camera</a>
                      </small>
                      <h4>
                        <a href="#">
                          Blue Yeti USB Microphone Blackout Edition
                        </a>
                      </h4>
                    </div>
                    <div className="product-thumb">
                      <a href="#">
                        <img src="/images/products/deals/1.jpg" alt="" />
                      </a>
                      <div className="downsale">
                        <span>-</span>$25
                      </div>
                      <div className="product-quick-view">
                        <a
                          href="javascript:void(0);"
                          data-toggle="modal"
                          data-target="#quick-view"
                        >
                          quick view
                        </a>
                      </div>
                    </div>
                    <div className="product-price-rating">
                      <div className="pull-left">
                        <span>$195.00</span>
                      </div>
                      <div className="pull-right">
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                    </div>
                    <div className="product-availability">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <span>
                        Already Sold: <span>20</span>
                      </span>
                      <span>
                        Available: <span>35</span>
                      </span>
                    </div>
                    <div className="product-countdown">
                      <div data-countdown="2010/08/01" />
                    </div>
                  </div>
                </div>
                {/*single-deal*/}
                <div className="col-lg-12">
                  <div className="product-single product-deal">
                    <div className="product-title">
                      <small>
                        <a href="#">Camera</a>
                      </small>
                      <h4>
                        <a href="#">
                          Blue Yeti USB Microphone Blackout Edition
                        </a>
                      </h4>
                    </div>
                    <div className="product-thumb">
                      <a href="#">
                        <img src="/images/products/1.jpg" alt="" />
                      </a>
                      <div className="downsale">
                        <span>-</span>$25
                      </div>
                      <div className="product-quick-view">
                        <a
                          href="javascript:void(0);"
                          data-toggle="modal"
                          data-target="#quick-view"
                        >
                          quick view
                        </a>
                      </div>
                    </div>
                    <div className="product-price-rating">
                      <div className="pull-left">
                        <span>$195.00</span>
                      </div>
                      <div className="pull-right">
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                    </div>
                    <div className="product-availability">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <span>
                        Already Sold: <span>20</span>
                      </span>
                      <span>
                        Available: <span>35</span>
                      </span>
                    </div>
                    <div className="product-countdown">
                      <div data-countdown="2010/08/01" />
                    </div>
                  </div>
                </div>
                {/*single-deal*/}
                <div className="col-lg-12">
                  <div className="product-single product-deal">
                    <div className="product-title">
                      <small>
                        <a href="#">Camera</a>
                      </small>
                      <h4>
                        <a href="#">
                          Blue Yeti USB Microphone Blackout Edition
                        </a>
                      </h4>
                    </div>
                    <div className="product-thumb">
                      <a href="#">
                        <img src="/images/products/3.jpg" alt="" />
                      </a>
                      <div className="downsale">
                        <span>-</span>$25
                      </div>
                      <div className="product-quick-view">
                        <a
                          href="javascript:void(0);"
                          data-toggle="modal"
                          data-target="#quick-view"
                        >
                          quick view
                        </a>
                      </div>
                    </div>
                    <div className="product-price-rating">
                      <div className="pull-left">
                        <span>$195.00</span>
                      </div>
                      <div className="pull-right">
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                    </div>
                    <div className="product-availability">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <span>
                        Already Sold: <span>20</span>
                      </span>
                      <span>
                        Available: <span>35</span>
                      </span>
                    </div>
                    <div className="product-countdown">
                      <div data-countdown="2010/08/01" />
                    </div>
                  </div>
                </div>
                {/*single-deal*/}
                <div className="col-lg-12">
                  <div className="product-single product-deal">
                    <div className="product-title">
                      <small>
                        <a href="#">Camera</a>
                      </small>
                      <h4>
                        <a href="#">
                          Blue Yeti USB Microphone Blackout Edition
                        </a>
                      </h4>
                    </div>
                    <div className="product-thumb">
                      <a href="#">
                        <img src="/images/products/4.jpg" alt="" />
                      </a>
                      <div className="downsale">
                        <span>-</span>$25
                      </div>
                      <div className="product-quick-view">
                        <a
                          href="javascript:void(0);"
                          data-toggle="modal"
                          data-target="#quick-view"
                        >
                          quick view
                        </a>
                      </div>
                    </div>
                    <div className="product-price-rating">
                      <div className="pull-left">
                        <span>$195.00</span>
                      </div>
                      <div className="pull-right">
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                    </div>
                    <div className="product-availability">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <span>
                        Already Sold: <span>20</span>
                      </span>
                      <span>
                        Available: <span>35</span>
                      </span>
                    </div>
                    <div className="product-countdown">
                      <div data-countdown="2010/08/01" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*product-ad*/}
            <div className="sidebar-single mt-30 d-none d-xl-block">
              <a href="#">
                <img src="/images/ad/2.jpg" alt="" />
              </a>
            </div>
            {/*latest-products*/}
            <div className="single-sidebar products-list mt-35">
              <div className="section-title mb-30">
                <h3>Latest Items</h3>
              </div>
              <div className="one-carousel dots-none">
                <div>
                  <ul className="list-none">
                    <li>
                      <div className="product-single style-2">
                        <div className="row align-items-center m-0">
                          <div className="col-lg-4 p-0">
                            <div className="product-thumb">
                              <a href="#">
                                <img
                                  src="/images/products/latest/1.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-8 p-0">
                            <div className="product-title">
                              <h4>
                                <a href="#">Vantech VP-153C Camera</a>
                              </h4>
                            </div>
                            <div className="product-price-rating">
                              <span>$195.00</span>
                              <del>$229.99</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="product-single style-2">
                        <div className="row align-items-center m-0">
                          <div className="col-lg-4 p-0">
                            <div className="product-thumb">
                              <a href="#">
                                <img
                                  src="/images/products/latest/2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-8 p-0">
                            <div className="product-title">
                              <h4>
                                <a href="#">Vantech VP-153C Camera</a>
                              </h4>
                            </div>
                            <div className="product-price-rating">
                              <span>$195.00</span>
                              <del>$229.99</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="product-single style-2">
                        <div className="row align-items-center m-0">
                          <div className="col-lg-4 p-0">
                            <div className="product-thumb">
                              <a href="#">
                                <img
                                  src="/images/products/latest/3.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-8 p-0">
                            <div className="product-title">
                              <h4>
                                <a href="#">Vantech VP-153C Camera</a>
                              </h4>
                            </div>
                            <div className="product-price-rating">
                              <span>$195.00</span>
                              <del>$229.99</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="product-single style-2">
                        <div className="row align-items-center m-0">
                          <div className="col-lg-4 p-0">
                            <div className="product-thumb">
                              <a href="#">
                                <img
                                  src="/images/products/latest/4.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-8 p-0">
                            <div className="product-title">
                              <h4>
                                <a href="#">Vantech VP-153C Camera</a>
                              </h4>
                            </div>
                            <div className="product-price-rating">
                              <span>$195.00</span>
                              <del>$229.99</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="product-single style-2">
                        <div className="row align-items-center m-0">
                          <div className="col-lg-4 p-0">
                            <div className="product-thumb">
                              <a href="#">
                                <img
                                  src="/images/products/latest/5.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-8 p-0">
                            <div className="product-title">
                              <h4>
                                <a href="#">Vantech VP-153C Camera</a>
                              </h4>
                            </div>
                            <div className="product-price-rating">
                              <span>$195.00</span>
                              <del>$229.99</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="list-none">
                    <li>
                      <div className="product-single style-2">
                        <div className="row align-items-center m-0">
                          <div className="col-lg-4 p-0">
                            <div className="product-thumb">
                              <a href="#">
                                <img
                                  src="/images/products/latest/1.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-8 p-0">
                            <div className="product-title">
                              <h4>
                                <a href="#">Vantech VP-153C Camera</a>
                              </h4>
                            </div>
                            <div className="product-price-rating">
                              <span>$195.00</span>
                              <del>$229.99</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="product-single style-2">
                        <div className="row align-items-center m-0">
                          <div className="col-lg-4 p-0">
                            <div className="product-thumb">
                              <a href="#">
                                <img
                                  src="/images/products/latest/2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-8 p-0">
                            <div className="product-title">
                              <h4>
                                <a href="#">Vantech VP-153C Camera</a>
                              </h4>
                            </div>
                            <div className="product-price-rating">
                              <span>$195.00</span>
                              <del>$229.99</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="product-single style-2">
                        <div className="row align-items-center m-0">
                          <div className="col-lg-4 p-0">
                            <div className="product-thumb">
                              <a href="#">
                                <img
                                  src="/images/products/latest/3.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-8 p-0">
                            <div className="product-title">
                              <h4>
                                <a href="#">Vantech VP-153C Camera</a>
                              </h4>
                            </div>
                            <div className="product-price-rating">
                              <span>$195.00</span>
                              <del>$229.99</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="product-single style-2">
                        <div className="row align-items-center m-0">
                          <div className="col-lg-4 p-0">
                            <div className="product-thumb">
                              <a href="#">
                                <img
                                  src="/images/products/latest/4.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-8 p-0">
                            <div className="product-title">
                              <h4>
                                <a href="#">Vantech VP-153C Camera</a>
                              </h4>
                            </div>
                            <div className="product-price-rating">
                              <span>$195.00</span>
                              <del>$229.99</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="product-single style-2">
                        <div className="row align-items-center m-0">
                          <div className="col-lg-4 p-0">
                            <div className="product-thumb">
                              <a href="#">
                                <img
                                  src="/images/products/latest/5.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-8 p-0">
                            <div className="product-title">
                              <h4>
                                <a href="#">Vantech VP-153C Camera</a>
                              </h4>
                            </div>
                            <div className="product-price-rating">
                              <span>$195.00</span>
                              <del>$229.99</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*store-supports*/}
            <div className="single-sidebar mt-30">
              <div className="store-supports">
                <ul className="list-none">
                  <li>
                    <div className="support-icon">
                      <img src="/images/icons/bank-loan2.jpg" alt="" />
                    </div>
                    <div className="support-text">
                      <strong>Free Delivery</strong>
                      <p>For all order over 99$</p>
                    </div>
                  </li>
                  <li>
                    <div className="support-icon">
                      <img
                        src="/images/icons/bank-liquidity2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="support-text">
                      <strong>30 Days Return</strong>
                      <p>If goods have Problems</p>
                    </div>
                  </li>
                  <li>
                    <div className="support-icon">
                      <img
                        src="/images/icons/bank-credit-card2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="support-text">
                      <strong>Secure Payment</strong>
                      <p>100% secure payment</p>
                    </div>
                  </li>
                  <li>
                    <div className="support-icon">
                      <img src="/images/icons/bank-support2.jpg" alt="" />
                    </div>
                    <div className="support-text">
                      <strong>24/7 Support</strong>
                      <p>Dedicated support</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-10 col-lg-9 fix">
          {/*product-categories*/}
          <div className="product-categories mt-sm-40">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h3>Top Categories</h3>
                </div>
              </div>
            </div>
            <div className="row product-categories-carousel mt-30">
              <div className="col-lg-3">
                <div className="single-product-cat">
                  <a href="#">
                    <img src="/images/products/category/1.png" alt="" />
                  </a>
                  <h4>
                    <a href="#">Sports &amp; Outdoors</a>
                  </h4>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-product-cat">
                  <a href="#">
                    <img src="/images/products/category/2.png" alt="" />
                  </a>
                  <h4>
                    <a href="#">Headphones</a>
                  </h4>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-product-cat">
                  <a href="#">
                    <img src="/images/products/category/3.png" alt="" />
                  </a>
                  <h4>
                    <a href="#">Smart phone &amp; Tablets</a>
                  </h4>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-product-cat">
                  <a href="#">
                    <img src="/images/products/category/4.png" alt="" />
                  </a>
                  <h4>
                    <a href="#">Camera &amp; Photography </a>
                  </h4>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-product-cat">
                  <a href="#">
                    <img src="/images/products/category/3.png" alt="" />
                  </a>
                  <h4>
                    <a href="#">Smart phone &amp; Tablets</a>
                  </h4>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-product-cat">
                  <a href="#">
                    <img src="/images/products/category/4.png" alt="" />
                  </a>
                  <h4>
                    <a href="#">Camera &amp; Photography </a>
                  </h4>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-product-cat">
                  <a href="#">
                    <img src="/images/products/category/3.png" alt="" />
                  </a>
                  <h4>
                    <a href="#">Smart phone &amp; Tablets</a>
                  </h4>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-product-cat">
                  <a href="#">
                    <img src="/images/products/category/4.png" alt="" />
                  </a>
                  <h4>
                    <a href="#">Camera &amp; Photography </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/*products-tab*/}
          <div className="products-tab mt-35">
            <div className="product-nav-tabs">
              <ul className="nav nav-tabs">
                <li>
                  <a className="active" data-toggle="tab" href="#new-arrivals">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#on-sale">
                    On Sale
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#best-rated">
                    Best Rated
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content pb-40">
              <div id="new-arrivals" className="tab-pane fade in show active">
                <div className="row product-carousel cv-visible">
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Camera</a>
                        </small>
                        <h4>
                          <a href="#">
                            Blue Yeti USB Microphone Blackout Edition
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/1.jpg" alt="" />
                        </a>
                        <div className="downsale">
                          <span>-</span>$25
                        </div>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <span>$195.00</span>
                        <del>$229.99</del>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Camera</a>
                        </small>
                        <h4>
                          <a href="#">
                            Blue Yeti USB Microphone Blackout Edition
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/2.jpg" alt="" />
                        </a>
                        <div className="downsale">
                          <span>-</span>$25
                        </div>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <span>$195.00</span>
                        <del>$229.99</del>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/3.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/4.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Electronics</a>
                        </small>
                        <h4>
                          <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/5.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$195.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Electronics</a>
                        </small>
                        <h4>
                          <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/6.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$195.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/7.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/8.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Camera</a>
                        </small>
                        <h4>
                          <a href="#">
                            Blue Yeti USB Microphone Blackout Edition
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/8.jpg" alt="" />
                        </a>
                        <div className="downsale">
                          <span>-</span>$25
                        </div>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <span>$195.00</span>
                        <del>$229.99</del>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Camera</a>
                        </small>
                        <h4>
                          <a href="#">
                            Blue Yeti USB Microphone Blackout Edition
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/1.jpg" alt="" />
                        </a>
                        <div className="downsale">
                          <span>-</span>$25
                        </div>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <span>$195.00</span>
                        <del>$229.99</del>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/2.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/2.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Electronics</a>
                        </small>
                        <h4>
                          <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/3.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$195.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Electronics</a>
                        </small>
                        <h4>
                          <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/3.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$195.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/2.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/2.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="on-sale" className="tab-pane fade">
                <div className="row product-carousel cv-visible">
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Camera</a>
                        </small>
                        <h4>
                          <a href="#">
                            Blue Yeti USB Microphone Blackout Edition
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/shop/1.jpg" alt="" />
                        </a>
                        <div className="downsale">
                          <span>-</span>$25
                        </div>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <span>$195.00</span>
                        <del>$229.99</del>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Camera</a>
                        </small>
                        <h4>
                          <a href="#">
                            Blue Yeti USB Microphone Blackout Edition
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/shop/2.jpg" alt="" />
                        </a>
                        <div className="downsale">
                          <span>-</span>$25
                        </div>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <span>$195.00</span>
                        <del>$229.99</del>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/shop/3.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/shop/4.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Electronics</a>
                        </small>
                        <h4>
                          <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/5.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$195.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Electronics</a>
                        </small>
                        <h4>
                          <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/6.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$195.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/7.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/8.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Camera</a>
                        </small>
                        <h4>
                          <a href="#">
                            Blue Yeti USB Microphone Blackout Edition
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/shop/1.jpg" alt="" />
                        </a>
                        <div className="downsale">
                          <span>-</span>$25
                        </div>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <span>$195.00</span>
                        <del>$229.99</del>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Camera</a>
                        </small>
                        <h4>
                          <a href="#">
                            Blue Yeti USB Microphone Blackout Edition
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/shop/2.jpg" alt="" />
                        </a>
                        <div className="downsale">
                          <span>-</span>$25
                        </div>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <span>$195.00</span>
                        <del>$229.99</del>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/shop/3.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/shop/4.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Electronics</a>
                        </small>
                        <h4>
                          <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/5.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$195.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Electronics</a>
                        </small>
                        <h4>
                          <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/6.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$195.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/7.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/8.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="best-rated" className="tab-pane fade">
                <div className="row product-carousel cv-visible">
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Camera</a>
                        </small>
                        <h4>
                          <a href="#">
                            Blue Yeti USB Microphone Blackout Edition
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/shop/5.jpg" alt="" />
                        </a>
                        <div className="downsale">
                          <span>-</span>$25
                        </div>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <span>$195.00</span>
                        <del>$229.99</del>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Camera</a>
                        </small>
                        <h4>
                          <a href="#">
                            Blue Yeti USB Microphone Blackout Edition
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/shop/6.jpg" alt="" />
                        </a>
                        <div className="downsale">
                          <span>-</span>$25
                        </div>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <span>$195.00</span>
                        <del>$229.99</del>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/shop/7.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/shop/8.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Electronics</a>
                        </small>
                        <h4>
                          <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/5.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$195.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Electronics</a>
                        </small>
                        <h4>
                          <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/6.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$195.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/7.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/8.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Camera</a>
                        </small>
                        <h4>
                          <a href="#">
                            Blue Yeti USB Microphone Blackout Edition
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/shop/5.jpg" alt="" />
                        </a>
                        <div className="downsale">
                          <span>-</span>$25
                        </div>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <span>$195.00</span>
                        <del>$229.99</del>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Camera</a>
                        </small>
                        <h4>
                          <a href="#">
                            Blue Yeti USB Microphone Blackout Edition
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/shop/6.jpg" alt="" />
                        </a>
                        <div className="downsale">
                          <span>-</span>$25
                        </div>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <span>$195.00</span>
                        <del>$229.99</del>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/shop/7.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/shop/8.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Electronics</a>
                        </small>
                        <h4>
                          <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/5.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$195.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Electronics</a>
                        </small>
                        <h4>
                          <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/6.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$195.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/7.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    {/*single-product*/}
                    <div className="product-single">
                      <div className="product-title">
                        <small>
                          <a href="#">Iphone</a>
                        </small>
                        <h4>
                          <a href="#">
                            Samsung CF591 Series Curved 27-Inch FHD Monitor
                          </a>
                        </h4>
                      </div>
                      <div className="product-thumb">
                        <a href="#">
                          <img src="/images/products/8.jpg" alt="" />
                        </a>
                        <div className="product-quick-view">
                          <a
                            href="javascript:void(0);"
                            data-toggle="modal"
                            data-target="#quick-view"
                          >
                            quick view
                          </a>
                        </div>
                      </div>
                      <div className="product-price-rating">
                        <div className="pull-left">
                          <span>$395.00</span>
                        </div>
                        <div className="pull-right">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <div className="product-action">
                        <a
                          href="javascript:void(0);"
                          className="product-compare"
                        >
                          <i className="ti-control-shuffle" />
                        </a>
                        <a href="javascript:void(0);" className="add-to-cart">
                          Add to Cart
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="product-wishlist"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*best sellers*/}
          <div className="best-sellers mt-minus-40">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h3>Best Sellers</h3>
                </div>
              </div>
            </div>
            <div className="row best-seller cv-visible">
              <div className="col-lg-3">
                <div className="product-single">
                  <div className="product-title">
                    <small>
                      <a href="#">Camera</a>
                    </small>
                    <h4>
                      <a href="#">Blue Yeti USB Microphone Blackout Edition</a>
                    </h4>
                  </div>
                  <div className="product-thumb">
                    <a href="#">
                      <img src="/images/products/9.jpg" alt="" />
                    </a>
                    <div className="downsale">
                      <span>-</span>$25
                    </div>
                    <div className="product-quick-view">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#quick-view"
                      >
                        quick view
                      </a>
                    </div>
                  </div>
                  <div className="product-price-rating">
                    <span>$195.00</span>
                    <del>$229.99</del>
                  </div>
                  <div className="product-action">
                    <a href="javascript:void(0);" className="product-compare">
                      <i className="ti-control-shuffle" />
                    </a>
                    <a href="javascript:void(0);" className="add-to-cart">
                      Add to Cart
                    </a>
                    <a href="javascript:void(0);" className="product-wishlist">
                      <i className="ti-heart" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-single">
                  <div className="product-title">
                    <small>
                      <a href="#">Iphone</a>
                    </small>
                    <h4>
                      <a href="#">
                        Samsung CF591 Series Curved 27-Inch FHD Monitor
                      </a>
                    </h4>
                  </div>
                  <div className="product-thumb">
                    <a href="#">
                      <img src="/images/products/10.jpg" alt="" />
                    </a>
                    <div className="product-quick-view">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#quick-view"
                      >
                        quick view
                      </a>
                    </div>
                  </div>
                  <div className="product-price-rating">
                    <div className="pull-left">
                      <span>$395.00</span>
                    </div>
                    <div className="pull-right">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                  </div>
                  <div className="product-action">
                    <a href="javascript:void(0);" className="product-compare">
                      <i className="ti-control-shuffle" />
                    </a>
                    <a href="javascript:void(0);" className="add-to-cart">
                      Add to Cart
                    </a>
                    <a href="javascript:void(0);" className="product-wishlist">
                      <i className="ti-heart" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-single">
                  <div className="product-title">
                    <small>
                      <a href="#">Electronics</a>
                    </small>
                    <h4>
                      <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                    </h4>
                  </div>
                  <div className="product-thumb">
                    <a href="#">
                      <img src="/images/products/11.jpg" alt="" />
                    </a>
                    <div className="product-quick-view">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#quick-view"
                      >
                        quick view
                      </a>
                    </div>
                  </div>
                  <div className="product-price-rating">
                    <div className="pull-left">
                      <span>$195.00</span>
                    </div>
                    <div className="pull-right">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                  </div>
                  <div className="product-action">
                    <a href="javascript:void(0);" className="product-compare">
                      <i className="ti-control-shuffle" />
                    </a>
                    <a href="javascript:void(0);" className="add-to-cart">
                      Add to Cart
                    </a>
                    <a href="javascript:void(0);" className="product-wishlist">
                      <i className="ti-heart" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-single">
                  <div className="product-title">
                    <small>
                      <a href="#">Macbook</a>
                    </small>
                    <h4>
                      <a href="#">Swivl C Series RobotSW3322-C1 </a>
                    </h4>
                  </div>
                  <div className="product-thumb">
                    <a href="#">
                      <img src="/images/products/12.jpg" alt="" />
                    </a>
                    <div className="product-quick-view">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#quick-view"
                      >
                        quick view
                      </a>
                    </div>
                  </div>
                  <div className="product-price-rating">
                    <div className="pull-left">
                      <span>$255.00</span>
                      <del>329.99</del>
                    </div>
                  </div>
                  <div className="product-action">
                    <a href="javascript:void(0);" className="product-compare">
                      <i className="ti-control-shuffle" />
                    </a>
                    <a href="javascript:void(0);" className="add-to-cart">
                      Add to Cart
                    </a>
                    <a href="javascript:void(0);" className="product-wishlist">
                      <i className="ti-heart" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-single">
                  <div className="product-title">
                    <small>
                      <a href="#">Camera</a>
                    </small>
                    <h4>
                      <a href="#">Blue Yeti USB Microphone Blackout Edition</a>
                    </h4>
                  </div>
                  <div className="product-thumb">
                    <a href="#">
                      <img src="/images/products/13.jpg" alt="" />
                    </a>
                    <div className="downsale">
                      <span>-</span>$25
                    </div>
                    <div className="product-quick-view">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#quick-view"
                      >
                        quick view
                      </a>
                    </div>
                  </div>
                  <div className="product-price-rating">
                    <span>$195.00</span>
                    <del>$229.99</del>
                  </div>
                  <div className="product-action">
                    <a href="javascript:void(0);" className="product-compare">
                      <i className="ti-control-shuffle" />
                    </a>
                    <a href="javascript:void(0);" className="add-to-cart">
                      Add to Cart
                    </a>
                    <a href="javascript:void(0);" className="product-wishlist">
                      <i className="ti-heart" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-single">
                  <div className="product-title">
                    <small>
                      <a href="#">Iphone</a>
                    </small>
                    <h4>
                      <a href="#">
                        Samsung CF591 Series Curved 27-Inch FHD Monitor
                      </a>
                    </h4>
                  </div>
                  <div className="product-thumb">
                    <a href="#">
                      <img src="/images/products/shop/1.jpg" alt="" />
                    </a>
                    <div className="product-quick-view">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#quick-view"
                      >
                        quick view
                      </a>
                    </div>
                  </div>
                  <div className="product-price-rating">
                    <div className="pull-left">
                      <span>$395.00</span>
                    </div>
                    <div className="pull-right">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                  </div>
                  <div className="product-action">
                    <a href="javascript:void(0);" className="product-compare">
                      <i className="ti-control-shuffle" />
                    </a>
                    <a href="javascript:void(0);" className="add-to-cart">
                      Add to Cart
                    </a>
                    <a href="javascript:void(0);" className="product-wishlist">
                      <i className="ti-heart" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-single">
                  <div className="product-title">
                    <small>
                      <a href="#">Electronics</a>
                    </small>
                    <h4>
                      <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                    </h4>
                  </div>
                  <div className="product-thumb">
                    <a href="#">
                      <img src="/images/products/shop/2.jpg" alt="" />
                    </a>
                    <div className="product-quick-view">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#quick-view"
                      >
                        quick view
                      </a>
                    </div>
                  </div>
                  <div className="product-price-rating">
                    <div className="pull-left">
                      <span>$195.00</span>
                    </div>
                    <div className="pull-right">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                  </div>
                  <div className="product-action">
                    <a href="javascript:void(0);" className="product-compare">
                      <i className="ti-control-shuffle" />
                    </a>
                    <a href="javascript:void(0);" className="add-to-cart">
                      Add to Cart
                    </a>
                    <a href="javascript:void(0);" className="product-wishlist">
                      <i className="ti-heart" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-single">
                  <div className="product-title">
                    <small>
                      <a href="#">Macbook</a>
                    </small>
                    <h4>
                      <a href="#">Swivl C Series RobotSW3322-C1 </a>
                    </h4>
                  </div>
                  <div className="product-thumb">
                    <a href="#">
                      <img src="/images/products/shop/3.jpg" alt="" />
                    </a>
                    <div className="product-quick-view">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#quick-view"
                      >
                        quick view
                      </a>
                    </div>
                  </div>
                  <div className="product-price-rating">
                    <div className="pull-left">
                      <span>$255.00</span>
                      <del>329.99</del>
                    </div>
                  </div>
                  <div className="product-action">
                    <a href="javascript:void(0);" className="product-compare">
                      <i className="ti-control-shuffle" />
                    </a>
                    <a href="javascript:void(0);" className="add-to-cart">
                      Add to Cart
                    </a>
                    <a href="javascript:void(0);" className="product-wishlist">
                      <i className="ti-heart" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-single">
                  <div className="product-title">
                    <small>
                      <a href="#">Camera</a>
                    </small>
                    <h4>
                      <a href="#">Blue Yeti USB Microphone Blackout Edition</a>
                    </h4>
                  </div>
                  <div className="product-thumb">
                    <a href="#">
                      <img src="/images/products/shop/4.jpg" alt="" />
                    </a>
                    <div className="downsale">
                      <span>-</span>$25
                    </div>
                    <div className="product-quick-view">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#quick-view"
                      >
                        quick view
                      </a>
                    </div>
                  </div>
                  <div className="product-price-rating">
                    <span>$195.00</span>
                    <del>$229.99</del>
                  </div>
                  <div className="product-action">
                    <a href="javascript:void(0);" className="product-compare">
                      <i className="ti-control-shuffle" />
                    </a>
                    <a href="javascript:void(0);" className="add-to-cart">
                      Add to Cart
                    </a>
                    <a href="javascript:void(0);" className="product-wishlist">
                      <i className="ti-heart" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-single">
                  <div className="product-title">
                    <small>
                      <a href="#">Iphone</a>
                    </small>
                    <h4>
                      <a href="#">
                        Samsung CF591 Series Curved 27-Inch FHD Monitor
                      </a>
                    </h4>
                  </div>
                  <div className="product-thumb">
                    <a href="#">
                      <img src="/images/products/shop/5.jpg" alt="" />
                    </a>
                    <div className="product-quick-view">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#quick-view"
                      >
                        quick view
                      </a>
                    </div>
                  </div>
                  <div className="product-price-rating">
                    <div className="pull-left">
                      <span>$395.00</span>
                    </div>
                    <div className="pull-right">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                  </div>
                  <div className="product-action">
                    <a href="javascript:void(0);" className="product-compare">
                      <i className="ti-control-shuffle" />
                    </a>
                    <a href="javascript:void(0);" className="add-to-cart">
                      Add to Cart
                    </a>
                    <a href="javascript:void(0);" className="product-wishlist">
                      <i className="ti-heart" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-single">
                  <div className="product-title">
                    <small>
                      <a href="#">Electronics</a>
                    </small>
                    <h4>
                      <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                    </h4>
                  </div>
                  <div className="product-thumb">
                    <a href="#">
                      <img src="/images/products/3.jpg" alt="" />
                    </a>
                    <div className="product-quick-view">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#quick-view"
                      >
                        quick view
                      </a>
                    </div>
                  </div>
                  <div className="product-price-rating">
                    <div className="pull-left">
                      <span>$195.00</span>
                    </div>
                    <div className="pull-right">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                  </div>
                  <div className="product-action">
                    <a href="javascript:void(0);" className="product-compare">
                      <i className="ti-control-shuffle" />
                    </a>
                    <a href="javascript:void(0);" className="add-to-cart">
                      Add to Cart
                    </a>
                    <a href="javascript:void(0);" className="product-wishlist">
                      <i className="ti-heart" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-single">
                  <div className="product-title">
                    <small>
                      <a href="#">Macbook</a>
                    </small>
                    <h4>
                      <a href="#">Swivl C Series RobotSW3322-C1 </a>
                    </h4>
                  </div>
                  <div className="product-thumb">
                    <a href="#">
                      <img src="/images/products/4.jpg" alt="" />
                    </a>
                    <div className="product-quick-view">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#quick-view"
                      >
                        quick view
                      </a>
                    </div>
                  </div>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                  <div className="product-action">
                    <a href="javascript:void(0);" className="product-compare">
                      <i className="ti-control-shuffle" />
                    </a>
                    <a href="javascript:void(0);" className="add-to-cart">
                      Add to Cart
                    </a>
                    <a href="javascript:void(0);" className="product-wishlist">
                      <i className="ti-heart" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*banner-section*/}
          <div className="row mt-40">
            <div className="col-xl-4 col-lg-6">
              <div className="banner-sm hover-effect">
                <img src="/images/banners/md/1.jpg" alt="" />
                <div className="banner-info">
                  <div className="product-value">
                    <span>$195.00</span>
                    <del>$229.99</del>
                  </div>
                  <p>
                    Sale Up To{" "}
                    <strong>
                      25% <br /> Off
                    </strong>{" "}
                    Bosch Home
                  </p>
                  <a href="#" className="btn-common width-115">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 mt-sm-30">
              <div className="banner-sm hover-effect">
                <img src="/images/banners/md/2.jpg" alt="" />
                <div className="banner-info">
                  <div className="product-value">
                    <span>$345.00</span>
                    <del>$429.99</del>
                  </div>
                  <p>
                    Extra <strong>30% Off</strong>
                    <br /> All Sale Style
                  </p>
                  <a href="#" className="btn-common width-115">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 d-none d-xl-block">
              <div className="banner-sm hover-effect">
                <img src="/images/banners/md/3.jpg" alt="" />
                <div className="banner-info">
                  <div className="product-value">
                    <span>$345.00</span>
                    <del>$429.99</del>
                  </div>
                  <p>
                    iPATROL <strong>Riley V2</strong>
                    <br /> Bonus Bundle
                  </p>
                  <a href="#" className="btn-common width-115">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*products-area end*/}
  {/*products-tab start Agriculture Product */}
  <div className="products-tab-area mt-45 mt-sm-40">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-3 pr-0">
          <div className="section-title">
            <h3>Agriculture</h3>
          </div>
        </div>
        <div className="col-lg-9 col-md-9 pl-0">
          <div className="product-nav-tabs style-3">
            <ul className="nav nav-tabs text-right">
              <li>
                <a className="active" data-toggle="tab" href="#all-accessories">
                  All Accessories
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#phone-tablet">
                  Phone &amp; Tablet
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#video-cemra">
                  Video Cameras
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#laptop-computers">
                  Laptops &amp; Computers{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tab-content">
        <div id="all-accessories" className="tab-pane active">
          <div className="row product-carousel-fullwidth cv-visible">
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Camera</a>
                  </small>
                  <h4>
                    <a href="#">Blue Yeti USB Microphone Blackout</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/14.jpg" alt="" />
                  </a>
                  <div className="downsale">
                    <span>-</span>$25
                  </div>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <span>$195.00</span>
                  <del>$229.99</del>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Iphone</a>
                  </small>
                  <h4>
                    <a href="#">Samsung CF591 Series Curved</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/3.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$395.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Electronics</a>
                  </small>
                  <h4>
                    <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/6.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$195.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Macbook</a>
                  </small>
                  <h4>
                    <a href="#">Swivl C Series RobotSW3322-C1 </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/4.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$255.00</span>
                    <del>329.99</del>
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Camera</a>
                  </small>
                  <h4>
                    <a href="#">Blue Yeti USB Microphone Blackout</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/1.jpg" alt="" />
                  </a>
                  <div className="downsale">
                    <span>-</span>$25
                  </div>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <span>$195.00</span>
                  <del>$229.99</del>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Iphone</a>
                  </small>
                  <h4>
                    <a href="#">Samsung CF591 Series Curved</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/2.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$395.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Electronics</a>
                  </small>
                  <h4>
                    <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/3.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$195.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Macbook</a>
                  </small>
                  <h4>
                    <a href="#">Swivl C Series RobotSW3322-C1 </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/4.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$255.00</span>
                    <del>329.99</del>
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="phone-tablet" className="tab-pane fade">
          <div className="row product-carousel-fullwidth cv-visible">
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Camera</a>
                  </small>
                  <h4>
                    <a href="#">Blue Yeti USB Microphone Blackout</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/1.jpg" alt="" />
                  </a>
                  <div className="downsale">
                    <span>-</span>$25
                  </div>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <span>$195.00</span>
                  <del>$229.99</del>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Iphone</a>
                  </small>
                  <h4>
                    <a href="#">
                      Samsung CF591 Series Curved 27-Inch FHD Monitor
                    </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/3.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$395.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Electronics</a>
                  </small>
                  <h4>
                    <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/6.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$195.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Macbook</a>
                  </small>
                  <h4>
                    <a href="#">Swivl C Series RobotSW3322-C1 </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/4.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$255.00</span>
                    <del>329.99</del>
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Camera</a>
                  </small>
                  <h4>
                    <a href="#">Blue Yeti USB Microphone Blackout</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/1.jpg" alt="" />
                  </a>
                  <div className="downsale">
                    <span>-</span>$25
                  </div>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <span>$195.00</span>
                  <del>$229.99</del>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Iphone</a>
                  </small>
                  <h4>
                    <a href="#">
                      Samsung CF591 Series Curved 27-Inch FHD Monitor
                    </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/3.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$395.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Electronics</a>
                  </small>
                  <h4>
                    <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/6.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$195.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Macbook</a>
                  </small>
                  <h4>
                    <a href="#">Swivl C Series RobotSW3322-C1 </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/4.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$255.00</span>
                    <del>329.99</del>
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="video-cemra" className="tab-pane fade">
          <div className="row product-carousel-fullwidth cv-visible">
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Camera</a>
                  </small>
                  <h4>
                    <a href="#">Blue Yeti USB Microphone Blackout Edition</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/4.jpg" alt="" />
                  </a>
                  <div className="downsale">
                    <span>-</span>$25
                  </div>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <span>$195.00</span>
                  <del>$229.99</del>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Iphone</a>
                  </small>
                  <h4>
                    <a href="#">
                      Samsung CF591 Series Curved 27-Inch FHD Monitor
                    </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/8.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$395.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Electronics</a>
                  </small>
                  <h4>
                    <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/6.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$195.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Macbook</a>
                  </small>
                  <h4>
                    <a href="#">Swivl C Series RobotSW3322-C1 </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/7.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$255.00</span>
                    <del>329.99</del>
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Camera</a>
                  </small>
                  <h4>
                    <a href="#">Blue Yeti USB Microphone Blackout Edition</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/4.jpg" alt="" />
                  </a>
                  <div className="downsale">
                    <span>-</span>$25
                  </div>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <span>$195.00</span>
                  <del>$229.99</del>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Iphone</a>
                  </small>
                  <h4>
                    <a href="#">
                      Samsung CF591 Series Curved 27-Inch FHD Monitor
                    </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/8.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$395.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Electronics</a>
                  </small>
                  <h4>
                    <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/6.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$195.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Macbook</a>
                  </small>
                  <h4>
                    <a href="#">Swivl C Series RobotSW3322-C1 </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/7.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$255.00</span>
                    <del>329.99</del>
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="laptop-computers" className="tab-pane fade">
          <div className="row product-carousel-fullwidth cv-visible">
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Camera</a>
                  </small>
                  <h4>
                    <a href="#">Blue Yeti USB Microphone Blackout Edition</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/8.jpg" alt="" />
                  </a>
                  <div className="downsale">
                    <span>-</span>$25
                  </div>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <span>$195.00</span>
                  <del>$229.99</del>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Iphone</a>
                  </small>
                  <h4>
                    <a href="#">
                      Samsung CF591 Series Curved 27-Inch FHD Monitor
                    </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/9.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$395.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Electronics</a>
                  </small>
                  <h4>
                    <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/10.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$195.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Macbook</a>
                  </small>
                  <h4>
                    <a href="#">Swivl C Series RobotSW3322-C1 </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/11.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$255.00</span>
                    <del>329.99</del>
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Camera</a>
                  </small>
                  <h4>
                    <a href="#">Blue Yeti USB Microphone Blackout Edition</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/8.jpg" alt="" />
                  </a>
                  <div className="downsale">
                    <span>-</span>$25
                  </div>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <span>$195.00</span>
                  <del>$229.99</del>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Iphone</a>
                  </small>
                  <h4>
                    <a href="#">
                      Samsung CF591 Series Curved 27-Inch FHD Monitor
                    </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/9.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$395.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Electronics</a>
                  </small>
                  <h4>
                    <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/10.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$195.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Macbook</a>
                  </small>
                  <h4>
                    <a href="#">Swivl C Series RobotSW3322-C1 </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/11.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$255.00</span>
                    <del>329.99</del>
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*products-tab end*/}
  {/*products-tab start*/}
  <div className="products-tab-area">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-3 pr-0">
          <div className="section-title">
            <h3>Home &amp; Appliances</h3>
          </div>
        </div>
        <div className="col-lg-9 col-md-9 pl-0">
          <div className="product-nav-tabs style-3">
            <ul className="nav nav-tabs text-right">
              <li>
                <a className="active" data-toggle="tab" href="#accessories">
                  All Accessories
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#tv-fridge">
                  TVs/Fridge/Laundry
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#kitchen-appliance">
                  Kitchen Appliance
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#seasonal-appliances">
                  Seasonal Appliances
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tab-content">
        <div id="accessories" className="tab-pane active">
          <div className="row product-carousel-fullwidth cv-visible">
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Camera</a>
                  </small>
                  <h4>
                    <a href="#">Blue Yeti USB Microphone Blackout</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/15.jpg" alt="" />
                  </a>
                  <div className="downsale">
                    <span>-</span>$25
                  </div>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <span>$195.00</span>
                  <del>$229.99</del>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Iphone</a>
                  </small>
                  <h4>
                    <a href="#">Samsung CF591 Series Curved</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/16.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$395.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Electronics</a>
                  </small>
                  <h4>
                    <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/17.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$195.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Macbook</a>
                  </small>
                  <h4>
                    <a href="#">Swivl C Series RobotSW3322-C1 </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/18.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$255.00</span>
                    <del>329.99</del>
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Camera</a>
                  </small>
                  <h4>
                    <a href="#">Blue Yeti USB Microphone Blackout</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/19.jpg" alt="" />
                  </a>
                  <div className="downsale">
                    <span>-</span>$25
                  </div>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <span>$195.00</span>
                  <del>$229.99</del>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Iphone</a>
                  </small>
                  <h4>
                    <a href="#">Samsung CF591 Series Curved</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/20.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$395.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Electronics</a>
                  </small>
                  <h4>
                    <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/3.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$195.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Macbook</a>
                  </small>
                  <h4>
                    <a href="#">Swivl C Series RobotSW3322-C1 </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/4.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$255.00</span>
                    <del>329.99</del>
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="tv-fridge" className="tab-pane fade">
          <div className="row product-carousel-fullwidth cv-visible">
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Camera</a>
                  </small>
                  <h4>
                    <a href="#">Blue Yeti USB Microphone Blackout Edition</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/1.jpg" alt="" />
                  </a>
                  <div className="downsale">
                    <span>-</span>$25
                  </div>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <span>$195.00</span>
                  <del>$229.99</del>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Iphone</a>
                  </small>
                  <h4>
                    <a href="#">
                      Samsung CF591 Series Curved 27-Inch FHD Monitor
                    </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/2.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$395.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Electronics</a>
                  </small>
                  <h4>
                    <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/3.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$195.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Macbook</a>
                  </small>
                  <h4>
                    <a href="#">Swivl C Series RobotSW3322-C1 </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/4.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$255.00</span>
                    <del>329.99</del>
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Camera</a>
                  </small>
                  <h4>
                    <a href="#">Blue Yeti USB Microphone Blackout Edition</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/1.jpg" alt="" />
                  </a>
                  <div className="downsale">
                    <span>-</span>$25
                  </div>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <span>$195.00</span>
                  <del>$229.99</del>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Iphone</a>
                  </small>
                  <h4>
                    <a href="#">
                      Samsung CF591 Series Curved 27-Inch FHD Monitor
                    </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/2.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$395.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Electronics</a>
                  </small>
                  <h4>
                    <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/3.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$195.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Macbook</a>
                  </small>
                  <h4>
                    <a href="#">Swivl C Series RobotSW3322-C1 </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/4.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$255.00</span>
                    <del>329.99</del>
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="kitchen-appliance" className="tab-pane fade">
          <div className="row product-carousel-fullwidth cv-visible">
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Camera</a>
                  </small>
                  <h4>
                    <a href="#">Blue Yeti USB Microphone Blackout Edition</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/15.jpg" alt="" />
                  </a>
                  <div className="downsale">
                    <span>-</span>$25
                  </div>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <span>$195.00</span>
                  <del>$229.99</del>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Iphone</a>
                  </small>
                  <h4>
                    <a href="#">
                      Samsung CF591 Series Curved 27-Inch FHD Monitor
                    </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/16.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$395.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Electronics</a>
                  </small>
                  <h4>
                    <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/17.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$195.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Macbook</a>
                  </small>
                  <h4>
                    <a href="#">Swivl C Series RobotSW3322-C1 </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/18.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$255.00</span>
                    <del>329.99</del>
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Camera</a>
                  </small>
                  <h4>
                    <a href="#">Blue Yeti USB Microphone Blackout Edition</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/15.jpg" alt="" />
                  </a>
                  <div className="downsale">
                    <span>-</span>$25
                  </div>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <span>$195.00</span>
                  <del>$229.99</del>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Iphone</a>
                  </small>
                  <h4>
                    <a href="#">
                      Samsung CF591 Series Curved 27-Inch FHD Monitor
                    </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/16.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$395.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Electronics</a>
                  </small>
                  <h4>
                    <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/17.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$195.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Macbook</a>
                  </small>
                  <h4>
                    <a href="#">Swivl C Series RobotSW3322-C1 </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/18.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$255.00</span>
                    <del>329.99</del>
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="seasonal-appliances" className="tab-pane fade">
          <div className="row product-carousel-fullwidth cv-visible">
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Camera</a>
                  </small>
                  <h4>
                    <a href="#">Blue Yeti USB Microphone Blackout Edition</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/5.jpg" alt="" />
                  </a>
                  <div className="downsale">
                    <span>-</span>$25
                  </div>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <span>$195.00</span>
                  <del>$229.99</del>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Iphone</a>
                  </small>
                  <h4>
                    <a href="#">
                      Samsung CF591 Series Curved 27-Inch FHD Monitor
                    </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/6.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$395.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Electronics</a>
                  </small>
                  <h4>
                    <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/7.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$195.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Macbook</a>
                  </small>
                  <h4>
                    <a href="#">Swivl C Series RobotSW3322-C1 </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/8.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$255.00</span>
                    <del>329.99</del>
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Camera</a>
                  </small>
                  <h4>
                    <a href="#">Blue Yeti USB Microphone Blackout Edition</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/5.jpg" alt="" />
                  </a>
                  <div className="downsale">
                    <span>-</span>$25
                  </div>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <span>$195.00</span>
                  <del>$229.99</del>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Iphone</a>
                  </small>
                  <h4>
                    <a href="#">
                      Samsung CF591 Series Curved 27-Inch FHD Monitor
                    </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/6.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$395.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Electronics</a>
                  </small>
                  <h4>
                    <a href="#">iPATROL Riley V2 Bonus Bundle - WiFi</a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/7.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$195.00</span>
                  </div>
                  <div className="pull-right">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-single">
                <div className="product-title">
                  <small>
                    <a href="#">Macbook</a>
                  </small>
                  <h4>
                    <a href="#">Swivl C Series RobotSW3322-C1 </a>
                  </h4>
                </div>
                <div className="product-thumb">
                  <a href="#">
                    <img src="/images/products/shop/8.jpg" alt="" />
                  </a>
                  <div className="product-quick-view">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#quick-view"
                    >
                      quick view
                    </a>
                  </div>
                </div>
                <div className="product-price-rating">
                  <div className="pull-left">
                    <span>$255.00</span>
                    <del>329.99</del>
                  </div>
                </div>
                <div className="product-action">
                  <a href="javascript:void(0);" className="product-compare">
                    <i className="ti-control-shuffle" />
                  </a>
                  <a href="javascript:void(0);" className="add-to-cart">
                    Add to Cart
                  </a>
                  <a href="javascript:void(0);" className="product-wishlist">
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*products-tab end*/}
  {/*recently-viewed-products-start*/}
  <div className="recent-viewed-products">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12 mt-md-40 mt-sm-40">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>Recently Viewed Products</h3>
              </div>
            </div>
          </div>
          <div className="row recent-products mlr-minus-12">
            <div className="col-lg-4">
              {/*single-product*/}
              <div className="product-single style-2">
                <div className="row align-items-center">
                  <div className="col-lg-6 p-0">
                    <div className="product-thumb">
                      <a href="#">
                        <img src="/images/products/2.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 p-0">
                    <div className="product-title">
                      <small>
                        <a href="#">Electronics</a>
                      </small>
                      <h4>
                        <a href="#">Vantech VP-153C Camera</a>
                      </h4>
                    </div>
                    <div className="product-price-rating">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                    <div className="product-price-rating">
                      <span>$195.00</span>
                      <del>$229.99</del>
                    </div>
                  </div>
                </div>
              </div>
              {/*single-product*/}
              <div className="product-single style-2">
                <div className="row align-items-center">
                  <div className="col-lg-6 p-0">
                    <div className="product-thumb">
                      <a href="#">
                        <img src="/images/products/4.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 p-0">
                    <div className="product-title">
                      <small>
                        <a href="#">Electronics</a>
                      </small>
                      <h4>
                        <a href="#">Vantech VP-153C Camera</a>
                      </h4>
                    </div>
                    <div className="product-price-rating">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                    <div className="product-price-rating">
                      <span>$195.00</span>
                      <del>$229.99</del>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/*single-product*/}
              <div className="product-single style-2">
                <div className="row align-items-center">
                  <div className="col-lg-6 p-0">
                    <div className="product-thumb">
                      <a href="#">
                        <img src="/images/products/21.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 p-0">
                    <div className="product-title">
                      <small>
                        <a href="#">Electronics</a>
                      </small>
                      <h4>
                        <a href="#">Vantech VP-153C Camera</a>
                      </h4>
                    </div>
                    <div className="product-price-rating">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                    <div className="product-price-rating">
                      <span>$195.00</span>
                      <del>$229.99</del>
                    </div>
                  </div>
                </div>
              </div>
              {/*single-product*/}
              <div className="product-single style-2">
                <div className="row align-items-center">
                  <div className="col-lg-6 p-0">
                    <div className="product-thumb">
                      <a href="#">
                        <img src="/images/products/23.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 p-0">
                    <div className="product-title">
                      <small>
                        <a href="#">Electronics</a>
                      </small>
                      <h4>
                        <a href="#">Vantech VP-153C Camera</a>
                      </h4>
                    </div>
                    <div className="product-price-rating">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                    <div className="product-price-rating">
                      <span>$195.00</span>
                      <del>$229.99</del>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/*single-product*/}
              <div className="product-single style-2">
                <div className="row align-items-center">
                  <div className="col-lg-6 p-0">
                    <div className="product-thumb">
                      <a href="#">
                        <img src="/images/products/9.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 p-0">
                    <div className="product-title">
                      <small>
                        <a href="#">Electronics</a>
                      </small>
                      <h4>
                        <a href="#">Vantech VP-153C Camera</a>
                      </h4>
                    </div>
                    <div className="product-price-rating">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                    <div className="product-price-rating">
                      <span>$195.00</span>
                      <del>$229.99</del>
                    </div>
                  </div>
                </div>
              </div>
              {/*single-product*/}
              <div className="product-single style-2">
                <div className="row align-items-center">
                  <div className="col-lg-6 p-0">
                    <div className="product-thumb">
                      <a href="#">
                        <img src="/images/products/12.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 p-0">
                    <div className="product-title">
                      <small>
                        <a href="#">Electronics</a>
                      </small>
                      <h4>
                        <a href="#">Vantech VP-153C Camera</a>
                      </h4>
                    </div>
                    <div className="product-price-rating">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                    <div className="product-price-rating">
                      <span>$195.00</span>
                      <del>$229.99</del>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/*single-product*/}
              <div className="product-single style-2">
                <div className="row align-items-center">
                  <div className="col-lg-6 p-0">
                    <div className="product-thumb">
                      <a href="#">
                        <img src="/images/products/4.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 p-0">
                    <div className="product-title">
                      <small>
                        <a href="#">Electronics</a>
                      </small>
                      <h4>
                        <a href="#">Vantech VP-153C Camera</a>
                      </h4>
                    </div>
                    <div className="product-price-rating">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                    <div className="product-price-rating">
                      <span>$195.00</span>
                      <del>$229.99</del>
                    </div>
                  </div>
                </div>
              </div>
              {/*single-product*/}
              <div className="product-single style-2">
                <div className="row align-items-center">
                  <div className="col-lg-6 p-0">
                    <div className="product-thumb">
                      <a href="#">
                        <img src="/images/products/4.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 p-0">
                    <div className="product-title">
                      <small>
                        <a href="#">Electronics</a>
                      </small>
                      <h4>
                        <a href="#">Vantech VP-153C Camera</a>
                      </h4>
                    </div>
                    <div className="product-price-rating">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                    <div className="product-price-rating">
                      <span>$195.00</span>
                      <del>$229.99</del>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/*single-product*/}
              <div className="product-single style-2">
                <div className="row align-items-center">
                  <div className="col-lg-6 p-0">
                    <div className="product-thumb">
                      <a href="#">
                        <img src="/images/products/5.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 p-0">
                    <div className="product-title">
                      <small>
                        <a href="#">Electronics</a>
                      </small>
                      <h4>
                        <a href="#">Vantech VP-153C Camera</a>
                      </h4>
                    </div>
                    <div className="product-price-rating">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                    <div className="product-price-rating">
                      <span>$195.00</span>
                      <del>$229.99</del>
                    </div>
                  </div>
                </div>
              </div>
              {/*single-product*/}
              <div className="product-single style-2">
                <div className="row align-items-center">
                  <div className="col-lg-6 p-0">
                    <div className="product-thumb">
                      <a href="#">
                        <img src="/images/products/5.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 p-0">
                    <div className="product-title">
                      <small>
                        <a href="#">Electronics</a>
                      </small>
                      <h4>
                        <a href="#">Vantech VP-153C Camera</a>
                      </h4>
                    </div>
                    <div className="product-price-rating">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                    <div className="product-price-rating">
                      <span>$195.00</span>
                      <del>$229.99</del>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/*single-product*/}
              <div className="product-single style-2">
                <div className="row align-items-center">
                  <div className="col-lg-6 p-0">
                    <div className="product-thumb">
                      <a href="#">
                        <img src="/images/products/6.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 p-0">
                    <div className="product-title">
                      <small>
                        <a href="#">Electronics</a>
                      </small>
                      <h4>
                        <a href="#">Vantech VP-153C Camera</a>
                      </h4>
                    </div>
                    <div className="product-price-rating">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                    <div className="product-price-rating">
                      <span>$195.00</span>
                      <del>$229.99</del>
                    </div>
                  </div>
                </div>
              </div>
              {/*single-product*/}
              <div className="product-single style-2">
                <div className="row align-items-center">
                  <div className="col-lg-6 p-0">
                    <div className="product-thumb">
                      <a href="#">
                        <img src="/images/products/6.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 p-0">
                    <div className="product-title">
                      <small>
                        <a href="#">Electronics</a>
                      </small>
                      <h4>
                        <a href="#">Vantech VP-153C Camera</a>
                      </h4>
                    </div>
                    <div className="product-price-rating">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                    <div className="product-price-rating">
                      <span>$195.00</span>
                      <del>$229.99</del>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*recently-viewed-products-end*/}
  {/*brands-area start*/}
  <div className="container-fluid mt-50">
    <div className="brands-area">
      <div className="row">
        <div className="col-lg-12">
          <div className="brand-items">
            <div className="brand-item">
              <a href="#">
                <img
                  className="brand-static"
                  src="/images/brands/1.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="brand-item">
              <a href="#">
                <img
                  className="brand-static"
                  src="/images/brands/2.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="brand-item">
              <a href="#">
                <img
                  className="brand-static"
                  src="/images/brands/3.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="brand-item">
              <a href="#">
                <img
                  className="brand-static"
                  src="/images/brands/4.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="brand-item">
              <a href="#">
                <img
                  className="brand-static"
                  src="/images/brands/5.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="brand-item">
              <a href="#">
                <img
                  className="brand-static"
                  src="/images/brands/6.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="brand-item">
              <a href="#">
                <img
                  className="brand-static"
                  src="/images/brands/7.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="brand-item">
              <a href="#">
                <img
                  className="brand-static"
                  src="/images/brands/8.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*brands-area end*/}
  {/*footer-area start*/}
  <footer className="footer-area mt-50">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="company-info">
            <img src="/images/company_logo.png" alt="logo" />
            <p>
              9211 F 120th St, East Rohini, <br /> 110086
            </p>
            <p>Phone: 000000000000</p>
            <p>Email: rishabh.sengineer.com</p>
          </div>
          <div className="copyright">
            <p>
              Copyright © <a href="#">web2export</a>. All rights reserved.
            </p>
          </div>
          <div className="payment-gateways">
            <img src="/images/footer/p1.png" alt="" />
            <img src="/images/footer/p2.png" alt="" />
            <img src="/images/footer/p3.png" alt="" />
            <img src="/images/footer/p4.png" alt="" />
            <img src="/images/footer/p5.png" alt="" />
            <img src="/images/footer/p6.png" alt="" />
          </div>
        </div>
        <div className="col-lg-2 col-sm-6">
          <div className="fooer-widget">
            <h4>Find It Fast</h4>
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">Laptop &amp; Computers</a>
                </li>
                <li>
                  <a href="#">Smart Phone &amp; Tablets</a>
                </li>
                <li>
                  <a href="#">TV &amp; Audio</a>
                </li>
                <li>
                  <a href="#">Cameras &amp; Photography</a>
                </li>
                <li>
                  <a href="#">Gadgets</a>
                </li>
                <li>
                  <a href="#">Car Electronic &amp; GP5</a>
                </li>
                <li>
                  <a href="#">Accesories</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-3 mt-sm-45">
          <div className="fooer-widget">
            <h4>Information</h4>
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">Find a Store</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Delivery information</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Gift Cards</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-3 mt-sm-45">
          <div className="fooer-widget">
            <h4>Customer Care</h4>
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Order History</a>
                </li>
                <li>
                  <a href="#">Wish List</a>
                </li>
                <li>
                  <a href="#">Customer Service</a>
                </li>
                <li>
                  <a href="#">Returns / Exchange</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Product Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mt-sm-45">
          <div className="footer-widget">
            <div className="subscribe-form">
              <h3>
                Sign Up to <strong>Newsletter</strong>
              </h3>
              <p>
                Subscribe our newsletter gor get notification about information
                discount.
              </p>
              <input type="text" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
            <div className="social-icons style-2">
              <strong>GET IN TOUCH !</strong>
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
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/*footer-area end*/}
  {/* Modal */}
  <div
    className="modal fade"
    id="quick-view"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-lg-4">
              <div className="tab-content">
                <div id="product-1" className="tab-pane fade in show active">
                  <div className="product-details-thumb">
                    <img
                      src="/images/products/product-details/1.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div id="product-2" className="tab-pane fade">
                  <div className="product-details-thumb">
                    <img
                      src="/images/products/product-details/2.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div id="product-3" className="tab-pane fade">
                  <div className="product-details-thumb">
                    <img
                      src="/images/products/product-details/3.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <ul className="nav nav-tabs products-nav-tabs horizontal quick-view mt-10">
                <li>
                  <a className="active" data-toggle="tab" href="#product-1">
                    <img
                      src="/images/products/product-details/thumb-1.jpg"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#product-2">
                    <img
                      src="/images/products/product-details/thumb-2.jpg"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#product-3">
                    <img
                      src="/images/products/product-details/thumb-3.jpg"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-8">
                  <div className="product-details-desc">
                    <h2>Apple The New MacBook Retina 2016 MLHA2 12 inches</h2>
                    <ul>
                      <li>
                        1.6 GHz dual-core Intel Core i5 (Turbo Boost up to 2.7
                        GHz) with 3 MB shared L3 cache 8 GB of 1600 MHz LPDDR3
                        RAM; 128 GB PCIe-based flash storage
                      </li>
                      <li>
                        13.3-Inch (diagonal) LED-backlit Glossy Widescreen
                        Display, 1440 x 900 resolution Intel HD Graphics 6000
                      </li>
                      <li>
                        OS X El Capitan, Up to 12 Hours of Battery Life Macbook
                        Air does not have a Retina display on any model.
                      </li>
                    </ul>
                    <div className="product-meta">
                      <ul className="list-none">
                        <li>
                          SKU: 00012 <span>|</span>
                        </li>
                        <li>
                          Categories:
                          <a href="#">Tech</a>
                          <a href="#">Macbook</a>
                          <a href="#">Laptop</a>
                          <span>|</span>
                        </li>
                        <li>
                          Tags:
                          <a href="#">Tech,</a>
                          <a href="#">Apple</a>
                        </li>
                      </ul>
                    </div>
                    <div className="social-icons style-5">
                      <span>Share Link:</span>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href="#">
                        <i className="fa fa-rss" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="product-action stuck text-left">
                    <div className="free-delivery">
                      <a href="#">
                        <i className="ti-truck" /> Free Delivery
                      </a>
                    </div>
                    <div className="product-price-rating">
                      <div>
                        <del>629.99</del>
                      </div>
                      <span>$495.00</span>
                      <div className="pull-right">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                      </div>
                    </div>
                    <div className="product-colors mt-20">
                      <label>Select Color:</label>
                      <ul className="list-none">
                        <li>Red</li>
                        <li>Black</li>
                        <li>Blue</li>
                      </ul>
                    </div>
                    <div className="product-quantity mt-15">
                      <label>Quatity:</label>
                      <input type="number" defaultValue={1} />
                    </div>
                    <div className="add-to-get mt-50">
                      <a href="#" className="add-to-cart">
                        Add to Cart
                      </a>
                      <a href="#" className="add-to-cart compare">
                        + ADD to Compare
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Home
