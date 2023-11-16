
import "./Header.css";
import Proptypes from "prop-types";
function Header({ setIsSearchShow }) {
  return (
    <header>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <a href="index.html" className="logo">
                LOGO
              </a>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <a href="index.html" className="menu-link active">
                      Anasayfa
                      <i className="bi bi-chevron-down"></i>
                    </a>
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
                    <a href="shop.html" className="menu-link">
                      Alışveriş
                      <i className="bi bi-chevron-down"></i>
                    </a>
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
                  <li className="menu-list-item">
                    <a href="blog.html" className="menu-link">
                      Hakkımızda
                    </a>
                  </li>
                  <li className="menu-list-item">
                    <a href="contact.html" className="menu-link">
                      Yardım Merkezi & İletişim
                    </a>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <a href="account.html" className="header-account">
                  <i className="bi bi-person"></i>
                </a>
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
                  <a href="cart.html" className="header-cart-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-cart-count">0</span>
                  </a>
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