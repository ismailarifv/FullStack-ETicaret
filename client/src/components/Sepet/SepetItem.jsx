import PropTypes from "prop-types";
import { useContext } from "react";
import { CardContext } from "../../context/CardProvider";


function SepetItem({cardItem}) {
  const {removeProduct} =useContext(CardContext)
  return (
    <tr className="sepet-item">
      <td></td>
      <td className="sepet-image">
      <img src={cardItem.img[0]} alt="" />
        <i
          className="bi bi-x delete-cart"
          onClick={() => removeProduct(cardItem._id)}
        ></i>
      </td>
      <td>{cardItem.name}</td>
      <td>{cardItem.price}₺</td>
      <td className="product-quantity">{cardItem.quantity}</td>
      <td className="product-subtotal">{(cardItem.price * cardItem.quantity)}₺</td>
    </tr>
  )
}

export default SepetItem

SepetItem.propTypes = {
  cardItem: PropTypes.object,
};