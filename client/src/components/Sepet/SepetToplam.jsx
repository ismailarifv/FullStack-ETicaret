
import { useContext, useState } from "react";
import { CardContext } from "../../context/CardProvider";


function SepetToplam() {


  const [hizliKargoChecked, setHizliKargoChecked] = useState(false);
  const { cardItems } = useContext(CardContext);

  const cardItemTotals = cardItems.map((item) => {
    const itemTotal = item.price * item.quantity;

    return itemTotal;
  });

  const toplamKargosuz = cardItemTotals.reduce((oncekiDeger, sonrakiDeger) => {
    return oncekiDeger + sonrakiDeger;
  }, 0);

  const kargoUcreti = 50;

  const sepetToplam = hizliKargoChecked
    ? (toplamKargosuz + kargoUcreti)
    : toplamKargosuz;


  return (
    <div className="sepet-totals">
      <h2>Sepet</h2>
      <table>
        <tbody>
          <tr className="sepet-subtotal">
            <th>Toplam</th>
            <td>
              <span id="subtotal">{toplamKargosuz}₺</span>
            </td>
          </tr>
          <tr>
            <th>Kargo</th>
            <td>
              <ul>
                <li>
                  <label>
                    Hızlı Kargo: 50₺
                    <input type="checkbox" id="fast-cargo" checked={hizliKargoChecked}
                      onChange={() => setHizliKargoChecked(!hizliKargoChecked)}/>
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
              <strong id="sepet-total">{sepetToplam}₺</strong>
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