

function SepetToplam() {
  return (
    <div className="sepet-totals">
      <h2>Sepet</h2>
      <table>
        <tbody>
          <tr className="sepet-subtotal">
            <th>Toplam</th>
            <td>
              <span id="subtotal">200₺</span>
            </td>
          </tr>
          <tr>
            <th>Kargo</th>
            <td>
              <ul>
                <li>
                  <label>
                    Hızlı Kargo: 50₺
                    <input type="checkbox" id="fast-cargo" />
                  </label>
                </li>
                <li>
                  <a href="#">Adres Değiştir</a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Toplam</th>
            <td>
              <strong id="sepet-total">200₺</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkout">
        <button className="btn btn-lg">Satın Al</button>
      </div>
    </div>
  )
}

export default SepetToplam