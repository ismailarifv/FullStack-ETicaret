

function SepetItem() {
  return (
    <tr className="sepet-item">
      <td></td>
      <td className="sepet-image">
        <img src="img/products/product1/1.png" alt="" />
        <i className="bi bi-x delete-sepet" data-id="1"></i>
      </td>
      <td>Takım Elbise</td>
      <td>100₺</td>
      <td className="product-quantity">1</td>
      <td className="product-subtotal">100₺</td>
    </tr>
  )
}

export default SepetItem