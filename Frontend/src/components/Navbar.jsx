// import "../assets/style.scss";
import "../assets/style.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

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
              {t('navbar.allDepartments')}
            </a>
            {menuOpen && (
              <ul className="vm-dropdown">
                <li>
                  <a href="#" onClick={toggleMenu}>
                    <i className="fa fa-laptop" /> {t('navbar.computer')} <b className="caret" />
                  </a>
                  <ul className="mega-menu">
                    <li className="megamenu-single">
                      <span className="mega-menu-title">{t('navbar.shopPage')}</span>
                      <ul>
                        <li>
                          <a href="#" onClick={toggleMenu}>{t('navbar.productsBlockTop')}</a>
                        </li>
                        <li>
                          <a href="#" onClick={toggleMenu}>{t('navbar.productsBlockBottom')}</a>
                        </li>
                      </ul>
                    </li>
                    <li className="megamenu-single">
                      <span className="mega-menu-title">{t('navbar.featured')}</span>
                      <ul>
                        <li>
                          <a href="#" onClick={toggleMenu}>{t('navbar.thumbnailsLeft')}</a>
                        </li>
                        <li>
                          <a href="#" onClick={toggleMenu}>{t('navbar.thumbnailsRight')}</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" onClick={toggleMenu}>
                    <i className="fa fa-desktop" /> {t('navbar.tv')}{" "}
                    <b className="caret" />
                  </a>
                  <ul className="mega-menu">
                    <li className="megamenu-single">
                      <span className="mega-menu-title">{t('navbar.shopPage')}</span>
                      <ul>
                        <li>
                          <a href="#" onClick={toggleMenu}>{t('navbar.productsBlockTop')}</a>
                        </li>
                        <li>
                          <a href="#" onClick={toggleMenu}>{t('navbar.productsBlockBottom')}</a>
                        </li>
                      </ul>
                    </li>
                    <li className="megamenu-single">
                      <span className="mega-menu-title">{t('navbar.featured')}</span>
                      <ul>
                        <li>
                          <a href="#" onClick={toggleMenu}>{t('navbar.thumbnailsLeft')}</a>
                        </li>
                        <li>
                          <a href="#" onClick={toggleMenu}>{t('navbar.thumbnailsRight')}</a>
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
        <Link to="/signup" className="mr-2">{t('auth.signup')}</Link>
        <Link to="/login">{t('auth.login')}</Link>
      </div>
    </div>
  );
};

export default Navbar;