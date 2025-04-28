import React, { useEffect } from 'react'
// import "../assets/style.scss"
import "../assets/style.css";
import "../assets/Js/profile.js"
// Remove LanguageSelector import
// import LanguageSelector from './LanguageSelector' 
import { useTranslation } from 'react-i18next'

const TopHeader = () => {
  const { t } = useTranslation();
  
  // Add useEffect for Google Translate initialization
  useEffect(() => {
    // Define the initialization function if it doesn't exist
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = function() {
        new google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
      };
    }

    // Check if the Google Translate script is already added
    const existingScript = document.querySelector('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]');
    if (!existingScript) {
      // Create and append the Google Translate script
      const script = document.createElement('script');
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
        // If script exists, call the init function directly if needed
        // This might be necessary if the component re-renders
        if (window.google && window.google.translate && window.google.translate.TranslateElement) {
             window.googleTranslateElementInit();
        }
      }

  }, []); // Empty dependency array ensures this runs only once on mount
  
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
            {/* Remove the LanguageSelector div */}
            {/* 
            <div className="currency-bar lang-bar pull-right">
              <LanguageSelector />
            </div> 
            */}
            <div className="currency-bar lang-bar pull-right" style={{ maxWidth: '120px', marginRight: '10px' }}>
               <div id="google_translate_element"></div>
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
