import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
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
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/term-condition">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/testimonials">Testimonials</Link>
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
                    Subscribe our newsletter gor get notification about
                    information discount.
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
    </>
  );
};

export default Footer;
