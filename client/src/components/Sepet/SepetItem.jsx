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
      <td>100₺</td>
      <td className="product-quantity">1</td>
      <td className="product-subtotal">100₺</td>
    </tr>
  )
}

export default SepetItem

SepetItem.propTypes = {
  cardItem: PropTypes.object,
};