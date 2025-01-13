import React from 'react'

const Navbar = () => {
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
    </>
  )
}

export default Navbar