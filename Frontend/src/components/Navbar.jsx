// import "../assets/style.scss";
import "../assets/style.css";

import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="web_banner-header">
      <div className="collapse-menu">
        <ul>
          <li>
            <a href="javascript:void(0);" className="vm-menu" onClick={toggleMenu}>
              <i className="fa fa-navicon" />
              All Departments
            </a>
            {menuOpen && (
              <ul className="vm-dropdown">
                <li>
                  <a href="#" onClick={toggleMenu}>
                    <i className="fa fa-laptop" /> Computer <b className="caret" />
                  </a>
                  <ul className="mega-menu">
                    <li className="megamenu-single">
                      <span className="mega-menu-title">Shop Page</span>
                      <ul>
                        <li>
                          <a href="#" onClick={toggleMenu}>Products Block Top</a>
                        </li>
                        <li>
                          <a href="#" onClick={toggleMenu}>Products Block Bottom</a>
                        </li>
                      </ul>
                    </li>
                    <li className="megamenu-single">
                      <span className="mega-menu-title">Featured</span>
                      <ul>
                        <li>
                          <a href="#" onClick={toggleMenu}>Thumbnails Left</a>
                        </li>
                        <li>
                          <a href="#" onClick={toggleMenu}>Thumbnails Right</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" onClick={toggleMenu}>
                    <i className="fa fa-desktop" /> TV &amp; Smart box{" "}
                    <b className="caret" />
                  </a>
                  <ul className="mega-menu">
                    <li className="megamenu-single">
                      <span className="mega-menu-title">Shop Page</span>
                      <ul>
                        <li>
                          <a href="#" onClick={toggleMenu}>Products Block Top</a>
                        </li>
                        <li>
                          <a href="#" onClick={toggleMenu}>Products Block Bottom</a>
                        </li>
                      </ul>
                    </li>
                    <li className="megamenu-single">
                      <span className="mega-menu-title">Featured</span>
                      <ul>
                        <li>
                          <a href="#" onClick={toggleMenu}>Thumbnails Left</a>
                        </li>
                        <li>
                          <a href="#" onClick={toggleMenu}>Thumbnails Right</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="header-auth">
        <a href="#">Sign Up</a>
        <a href="#">Login</a>
      </div>
    </div>
  );
};

export default Navbar;