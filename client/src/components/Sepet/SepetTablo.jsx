import SepetItem from "./SepetItem"


function SepetTablo() {
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
      
      <SepetItem />
      <SepetItem />
    </tbody>
  </table>
  )
}

export default SepetTablo