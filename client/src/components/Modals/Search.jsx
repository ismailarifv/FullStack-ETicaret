import "./Search.css";
import Proptypes from "prop-types";

function Search({ isSearchShow, setIsSearchShow }) {
  return (
    <div className={`modal-search ${isSearchShow ? "show" : ""} `}>
      <div className="modal-wrapper">
        <h3 className="modal-title">Ürün Ara</h3>
        <form className="search-form">
          <input type="text" placeholder="Search a product" />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div className="search-results">
          <div className="search-heading">
            <h3>Arama Sonuçları</h3>
          </div>
          <div className="results">
            <a href="#" className="result-item">
              <img
                src="/img/products/product1/1.png"
                className="search-thumb"
                alt=""
              />
              <div className="search-info">
                <h4>Takım Elbise</h4>
                <span className="search-sku">SKU: PD0016</span>
                <span className="search-price">100₺</span>
              </div>
            </a>
            <a href="#" className="result-item">
              <img
                src="/img/products/product2/1.png"
                className="search-thumb"
                alt=""
              />
              <div className="search-info">
                <h4>Gömlek</h4>
                <span className="search-sku">SKU: PD0016</span>
                <span className="search-price">100₺</span>
              </div>
            </a>
          </div>
        </div>
        <i
          className="bi bi-x-circle"
          id="close-search"
          onClick={() => setIsSearchShow(false)}
        ></i>
      </div>
      <div
        className="modal-overlay"
        onClick={() => setIsSearchShow(false)}
      ></div>
    </div>
  )
}

export default Search

Search.propTypes = {
    isSearchShow: Proptypes.bool,
    setIsSearchShow:Proptypes.func
  };