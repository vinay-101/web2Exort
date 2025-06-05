import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-main text-light pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row g-4">
          {/* Company info column */}
          <div className="col-lg-6">
            <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start">
              <img
                src="/images/logo.png"
                alt="Web2Export Logo"
                width={170}
                className="mb-3 mb-md-0 me-md-4 company-logo"
              />
              <div className="text-center text-md-start">
                <div className="contact-info mb-3">
                  <p className="mb-2">
                    <i className="fa fa-map-marker-alt me-2 accent-color" />
                    <span>9211 F 120th St, East Rohini, New Delhi, Delhi 110086</span>
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-phone-alt me-2 accent-color" />
                    <span>9999999999</span>
                    <i className="fa fa-envelope ms-3 me-2 accent-color" />
                    <span>web2export@gmail.com</span>
                  </p>
                </div>
                <div className="social-section mt-2">
                  <span className="d-block d-md-inline-block mb-2 mb-md-0 me-md-3 fw-semibold">Follow Us:</span>
                  <div className="d-inline-flex gap-3">
                    {['facebook', 'twitter', 'instagram', 'youtube'].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        aria-label={platform}
                        className="social-icon"
                      >
                        <i className={`fa fa-${platform}`} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-md-6">
                <h6 className="footer-heading">Information</h6>
                <ul className="footer-links list-unstyled">
                  <li><Link to="/about-us" className="footer-link">About Us</Link></li>
                  <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
                  <li><Link to="/term-condition" className="footer-link">Terms & Conditions</Link></li>
                </ul>
              </div>
              <div className="col-md-6">
                <h6 className="footer-heading">Support</h6>
                <ul className="footer-links list-unstyled">
                  <li><Link to="/faq" className="footer-link">FAQ</Link></li>
                  <li><Link to="/testimonials" className="footer-link">Testimonials</Link></li>
                  <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="row mt-4">
          <div className="col-12">
            <hr className="footer-divider" />
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-3">
              <p className="mb-2 mb-md-0 small">
                © {new Date().getFullYear()} <a href="#" className="footer-link fw-bold">web2export</a>. All rights reserved.
              </p>
              {/* <div className="d-flex gap-3 small">
                <Link to="/sitemap" className="footer-link">Sitemap</Link>
                <Link to="/accessibility" className="footer-link">Accessibility</Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .footer-main {
          background: linear-gradient(135deg, #0e1a24 0%, #1b2c3b 100%);
          border-top: 2px solid #4a7acd;
          font-family: 'Segoe UI', sans-serif;
        }

        .footer-heading {
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          border-left: 3px solid #4a7acd;
          padding-left: 0.6rem;
          margin-bottom: 0.8rem;
        }

        .footer-link {
          color: #b8c7d8;
          text-decoration: none;
          transition: all 0.25s ease-in-out;
          display: inline-block;
        }

        .footer-link:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .social-icon {
          color: #b8c7d8;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          color: #4a7acd;
          transform: scale(1.2);
        }

        .accent-color {
          color: #4a7acd;
        }

        .footer-divider {
          border-color: rgba(255, 255, 255, 0.1);
        }

        .contact-info span {
          font-size: 0.9rem;
          display: inline-block;
        }

        @media (max-width: 767px) {
          .footer-heading {
            margin-top: 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
