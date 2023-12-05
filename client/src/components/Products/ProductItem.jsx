import PropTypes from "prop-types";
import "./ProductItem.css";
import { CardContext } from "../../context/CardProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

function ProductItem({ productItem }) {
  
  const { cardItems, addToCard } = useContext(CardContext);

  const filteredProduct = cardItems.find(
    (cardItem) => cardItem.id === productItem.id
  );
  return (
    <div className="product-item glide__slide glide__slide--active">
    <div className="product-image">
      <a href="#">
      <img src={productItem.img.singleImage} alt="" className="img1" />
          <img src={productItem.img.thumbs[1]} alt="" className="img2" />
      </a>
    </div>
    <div className="product-info">
      <a href="$" className="product-title">
      {productItem.name}
      </a>
      <ul className="product-star">
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star"></i>
        </li>
        <li>
          <i className="bi bi-star"></i>
        </li>
      </ul>
      <div className="product-prices">
      <strong className="new-price">
            ${productItem.price.newPrice}
          </strong>
          <span className="old-price">
            ${productItem.price.oldPrice}
          </span>
      </div>
      <span className="product-discount">-{productItem.discount}%</span>
      <div className="product-links">
      <button
            className="add-to-cart"
            onClick={() => addToCard(productItem)}
            disabled={filteredProduct}
          >
          <i className="bi bi-basket-fill"></i>
        </button>
        <button>
          <i className="bi bi-heart-fill"></i>
        </button>
        <Link to={`Product/${productItem.id}`} className="product-link">
          <i className="bi bi-eye-fill"></i>
        </Link>
        <a href="#">
          <i className="bi bi-share-fill"></i>
        </a>
      </div>
    </div>
    </div>
  )
}

export default ProductItem

ProductItem.propTypes = {
  productItem: PropTypes.object,
  setCardItems: PropTypes.func,
};