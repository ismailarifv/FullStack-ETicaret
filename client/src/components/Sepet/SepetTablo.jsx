import SepetItem from "./SepetItem"
import { useContext } from "react";
import { CardContext } from "../../context/CardProvider";


function SepetTablo() {
  const { cardItems } = useContext(CardContext);
  return (
    <table className="shop-table">
    <thead>
      <tr>
        <th className="product-thumbnail">&nbsp;</th>
        <th className="product-thumbnail">&nbsp;</th>
        <th className="product-name">Ürün</th>
        <th className="product-price">Fiyat</th>
        <th className="product-quantity">Miktar</th>
        <th className="product-subtotal">Toplam</th>
      </tr>
    </thead>
    <tbody className="sepet-wrapper">
      
    {cardItems.map((item) => (
          <SepetItem cardItem={item} key={item.id} />
        ))}
    </tbody>
  </table>
  )
}

export default SepetTablo