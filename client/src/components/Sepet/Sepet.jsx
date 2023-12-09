import { useContext } from "react";
import { CardContext } from "../../context/CardProvider";
import SepetProgress from "./SepetProgress"
import SepetTablo from "./SepetTablo"
import SepetToplam from "./SepetToplam"
import './Sepet.css'

function Sepet() {
  const { cardItems } = useContext(CardContext);
  return (
    <section className="sepet-page">
    <div className="container">
    {cardItems.length > 0 ? (
          <div className="sepet-page-wrapper">
            <form className="sepet-form">
              <SepetProgress />
              <div className="shop-table-wrapper">
                <SepetTablo />
                
              </div>
            </form>
            <div className="sepet-collaterals">
              <SepetToplam />
            </div>
            </div>
            ) : (
              <h2>Sepette hiç ürün yok!</h2>
            )}
          </div>
        </section>
  )
}

export default Sepet