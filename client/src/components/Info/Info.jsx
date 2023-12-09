import './Info.css'
import { useContext, useRef } from "react";
import { CardContext } from "../../context/CardProvider";
import PropTypes from "prop-types";
function Info({ singleProduct }) {
  const quantityRef = useRef();
  const { addToCard, cardItems } = useContext(CardContext);
  const originalPrice = singleProduct.price.current;
  const discountPercentage = singleProduct.price.discount;

  // İndirimli fiyatı hesaplama
  const discountedPrice =
    originalPrice - (originalPrice * discountPercentage) / 100;

  const filteredCard = cardItems.find(
    (cardItem) => cardItem._id === singleProduct._id
  );
  return (
    <div className="product-info">
    <h1 className="product-title">{singleProduct.name}</h1>
    <div className="product-review">
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
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-half"></i>
        </li>
      </ul>
      <span>2 Yorum</span>
    </div>
    <div className="product-price">
      <s className="old-price">{originalPrice}₺</s>
      <strong className="new-price">{discountedPrice}₺</strong>
    </div>
    <div
        className="product-description"
        dangerouslySetInnerHTML={{ __html: singleProduct.description }}
      ></div>
    <form className="variations-form">
      <div className="variations">
        <div className="colors">
          <div className="colors-label">
            <span>Renk</span>
          </div>
          <div className="colors-wrapper">
          {singleProduct.colors.map((color, index) => (
                <div className="color-wrapper" key={index}>
                  <label
                    style={{
                      backgroundColor: `#${color}`,
                    }}
                  >
                    <input type="radio" name="product-color" />
                  </label>
                </div>
              ))}
          </div>
        </div>
        <div className="values">
          <div className="values-label">
            <span>Beden</span>
          </div>
          <div className="values-list">
          {singleProduct.sizes.map((size, index) => (
                <span key={index}>{size.toUpperCase()}</span>
              ))}
          </div>
        </div>
        <div className="cart-button">
          <input type="number"
              defaultValue="1"
              min="1"
              id="quantity"
              ref={quantityRef} />
          <button
            className="btn btn-lg btn-primary"
            id="add-to-cart"
            type="button"
            disabled={filteredCard}
            onClick={() =>
              addToCard({
                ...singleProduct,
                price: discountedPrice,
                quantity: parseInt(quantityRef.current.value),
              })
            }
          >
            Sepete Ekle
          </button>
        </div>
        <div className="product-extra-buttons">
          <a href="#">
            <i className="bi bi-globe"></i>
            <span>Beden Ayrıntıları</span>
          </a>
          <a href="#">
            <i className="bi bi-heart"></i>
            <span>Beğendiklerime Ekle</span>
          </a>
          <a href="#">
            <i className="bi bi-share"></i>
            <span>Bu Ürünü Paylaş</span>
          </a>
        </div>
      </div>
    </form>
    <div className="divider"></div>
    <div className="product-meta">
      <div className="product-sku">
        <span>SKU:</span>
        <strong>BE45VGRT</strong>
      </div>
      <div className="product-categories">
        <span>Kategori:</span>
        <strong>Gömlek , Erkek</strong>
      </div>
      <div className="product-tags">
        <span>Etiketler:</span>
        <a href="#">Siyah</a>,<a href="#">Beyaz</a>
      </div>
    </div>
  </div>
  )
}

export default Info

Info.propTypes = {
  singleProduct: PropTypes.object,
};