import PropTypes from "prop-types";
import { useContext } from "react";
import { CardContext } from "../../context/CardProvider";


function SepetItem({cardItem}) {
  const {removeProduct} =useContext(CardContext)
  return (
    <tr className="sepet-item">
      <td></td>
      <td className="sepet-image">
      <img src={cardItem.img.singleImage} alt="" />
        <i
          className="bi bi-x delete-cart"
          onClick={() => removeProduct(cardItem.id)}
        ></i>
      </td>
      <td>{cardItem.name}</td>
      <td>{cardItem.price.newPrice}₺</td>
      <td className="product-quantity">{cardItem.quantity}</td>
      <td className="product-subtotal">{(cardItem.price.newPrice * cardItem.quantity)}₺</td>
    </tr>
  )
}

export default SepetItem

SepetItem.propTypes = {
  cardItem: PropTypes.object,
};