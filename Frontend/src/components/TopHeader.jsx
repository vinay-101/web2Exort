import React, { useEffect, useState } from 'react';
import "../assets/style.css";
import "../assets/Js/profile.js";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import productService from '../Services/productService';

const TopHeader = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [signupHover, setSignupHover] = useState(false);
  const [loginHover, setLoginHover] = useState(false);

  // Styles defined as JavaScript objects
  const styles = {
    header: {
      backgroundColor: "#000",
      padding: "12px 0",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      marginBottom: 0,
      position: "relative",
      zIndex: 1050
    },
    container: {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
      marginBottom: 0,
      paddingBottom: 0,
      marginTop: 0
    },
    headerWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      width: "100%",
      zIndex: 1000
    },
    logoContainer: {
      flex: "0 0 auto"
    },
    logoLink: {
      display: "block"
    },
    logoImage: {
      maxWidth: "100px",
      height: "auto",
      transition: "transform 0.2s ease"
    },
    headerActions: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      position: "relative",
      zIndex: 1051
    },
    languageSelector: {
      position: "relative",
      minWidth: "70px",
      display: "flex",
      alignItems: "center",
      height: "36px"
    },
    authLinks: {
      display: "flex",
      gap: "15px",
      position: "relative",
      zIndex: 1052,
      alignItems: "center"
    },
    authLink: {
      color: "#fff",
      textDecoration: "none",
      fontWeight: "500",
      padding: "8px 16px",
      borderRadius: "4px",
      transition: "all 0.2s ease",
      position: "relative",
      zIndex: 2
    },
    signupLink: {
      backgroundColor: "#3498db",
      border: "1px solid #1467C1 !important"
    },
    loginLink: {
      border: "1px solid #fff"
    },
    google_translate_element: {
      marginTop: "0 !important"
    },
    searchContainer: {
      position: 'relative',
      width: '200px',
      marginRight: '15px',
      backgroundColor: 'transparent'
    },
    searchInput: {
      width: '100%',
      padding: '8px 12px',
      borderRadius: '4px',
      border: '1px solid #444',
      backgroundColor: '#222',
      color: '#fff',
      fontSize: '14px',
      height: '36px',
      '&:focus': {
        outline: 'none',
        borderColor: '#3498db'
      }
    },
    searchResults: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: '#fff',
      borderRadius: '4px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxHeight: '300px',
      overflowY: 'auto',
      zIndex: 1060,
      display: 'none',
      marginTop: '4px'
    },
    searchResultsVisible: {
      display: 'block'
    },
    searchResultItem: {
      padding: '10px 15px',
      borderBottom: '1px solid #eee',
      color: '#333',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      textDecoration: 'none',
      display: 'block'
    },
    noResults: {
      padding: '15px',
      color: '#666',
      textAlign: 'center',
      fontSize: '14px',
      borderBottom: '1px solid #eee'
    }
  };

  // Handle search input change
  const handleSearchChange = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length >= 2) {
      try {
        const response = await productService.searchMicroCategory(value);
        if (response.data.success) {
          setSearchResults(response.data.data);
          setShowResults(true);
        }
      } catch (error) {
        console.error('Search error:', error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container')) {
        setShowResults(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Initialize Google Translate widget
  useEffect(() => {
    const cleanupGoogleElements = () => {
      const elements = document.querySelectorAll('.goog-te-combo, .goog-te-banner, .skiptranslate');
      elements.forEach(el => el.remove());
    };

    window.googleTranslateElementInit = () => {
      cleanupGoogleElements();
      new google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );

      // Apply custom styles after element is rendered
      const interval = setInterval(() => {
        const selectElement = document.querySelector('.goog-te-combo');
        if (selectElement) {
          clearInterval(interval);
          selectElement.style.height = '36px';
          selectElement.style.padding = '6px 8px';
          selectElement.style.borderRadius = '4px';
          selectElement.style.backgroundColor = '#222';
          selectElement.style.color = '#fff';
          selectElement.style.border = '1px solid #444';
          selectElement.style.outline = 'none';
          selectElement.style.fontSize = '14px';
          selectElement.style.boxSizing = 'border-box';
        }
      }, 200);
    };

    let script;
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      script = document.createElement('script');
      script.src = `//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit&t=${Date.now()}`;
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }

    return () => {
      if (script) script.remove();
      cleanupGoogleElements();
    };
  }, []);

  return (
    <header style={styles.header} className="header-container">
      <div style={styles.container}>
        <div style={styles.headerWrapper}>
          <div style={styles.logoContainer}>
            <Link to="/" style={styles.logoLink}>
              <img 
                src="/images/logo.png"
                className='company-logo'
                alt="Company Logo" 
              />
            </Link>
          </div>

          <div style={styles.headerActions}>
            <div style={styles.languageSelector}>
              <div style={styles.google_translate_element} id="google_translate_element"></div>
            </div>

            <nav style={styles.authLinks}>
              <div className="search-container" style={styles.searchContainer}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  style={styles.searchInput}
                />
                <div style={{
                  ...styles.searchResults,
                  ...(showResults ? styles.searchResultsVisible : {})
                }}>
                  {searchResults.length > 0 ? (
                    searchResults.map((result) => (
                      <Link
                        key={result.id}
                        to={`/products/${result.categoryId}/${result.id}`}
                        style={styles.searchResultItem}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#f5f5f5';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                        }}
                        onClick={() => setShowResults(false)}
                      >
                        {result.name}
                      </Link>
                    ))
                  ) : (
                    searchTerm.length >= 2 && showResults && (
                      <div style={styles.noResults}>
                        No results found for "{searchTerm}"
                      </div>
                    )
                  )}
                </div>
              </div>
              <Link 
                to="/signup" 
                style={{
                  ...styles.authLink,
                  ...styles.signupLink,
                  backgroundColor: signupHover ? '#2980b9' : '#3498db',
                  boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
                }}
                onMouseEnter={() => setSignupHover(true)}
                onMouseLeave={() => setSignupHover(false)}
              >
                Sign Up
              </Link>
              <Link 
                to="/login" 
                style={{
                  ...styles.authLink,
                  ...styles.loginLink,
                  backgroundColor: loginHover ? '#fff' : 'transparent',
                  color: loginHover ? '#000' : '#fff',
                  boxShadow: loginHover ? "0 2px 5px rgba(0,0,0,0.2)" : "none"
                }}
                onMouseEnter={() => setLoginHover(true)}
                onMouseLeave={() => setLoginHover(false)}
              >
                Login
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;