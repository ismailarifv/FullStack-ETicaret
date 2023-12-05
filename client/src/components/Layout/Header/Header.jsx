import { CardContext } from "../../../context/CardProvider";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import "./Header.css";
import Proptypes from "prop-types";
function Header({ setIsSearchShow }) {

  const { cardItems } = useContext(CardContext);

  const { pathname } = useLocation();
  return (
    <header>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link to={"/"} className="logo">
                HEPSİORADA
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link to={"/"} className={`menu-link ${pathname ==="/" && "active"}`}>
                      Anasayfa
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <ul className="menu-dropdown-content">
                        <li>
                          <a href="#">Lorem, ipsum.</a>
                        </li>
                        <li>
                          <a href="#">Lorem, ipsum.</a>
                        </li>
                        <li>
                          <a href="#">Lorem, ipsum.</a>
                        </li>
                        <li>
                          <a href="#">Lorem, ipsum.</a>
                        </li>
                        <li>
                          <a href="#">Lorem, ipsum.</a>
                        </li>
                        <li>
                          <a href="#">Lorem, ipsum.</a>
                        </li>
                        <li>
                          <a href="#">Lorem, ipsum.</a>
                        </li>
                        <li>
                          <a href="#">Lorem, ipsum.</a>
                        </li>
                        <li>
                          <a href="#">Lorem, ipsum.</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <Link to={"/alisveris"} className={`menu-link ${
                        pathname === "/alisveris" && "active"
                      }`}>
                      Alışveriş
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <div className="menu-dropdown-megamenu">
                        <div className="megamenu-links">
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Lorem, ipsum.
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Lorem, ipsum.
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Lorem</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum dolor.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum dolor.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum dolor.</a>
                              </li>
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Lorem, ipsum.
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum dolor.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum dolor.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                              <li>
                                <a href="#">Lorem, ipsum.</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* <li className="menu-list-item">
                    <Link to={"/Alısveris"} className={`menu-link ${
                        pathname === "/" && "active"
                      }`}>
                      Hakkımızda
                    </Link>
                  </li> */}
                  <li className="menu-list-item">
                    <Link to={"/Iletisim"} className={`menu-link ${
                        pathname === "/iletisim" && "active"
                      }`}>
                      Yardım Merkezi & İletişim
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link to={"/Auth"} className="header-account">
                  <i className="bi bi-person"></i>
                </Link>
                <button
                  className="search-button"
                  onClick={() => setIsSearchShow(true)}
                >
                  <i className="bi bi-search"></i>
                </button>
                <a href="#">
                  <i className="bi bi-heart"></i>
                </a>
                <div className="header-cart">
                  <Link to={"/Sepet"} className="header-cart-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-cart-count">
                      {cardItems.length}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

Header.propTypes = {
  setIsSearchShow: Proptypes.func
};