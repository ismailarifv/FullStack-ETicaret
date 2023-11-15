import SepetKupon from "./SepetKupon"
import SepetProgress from "./SepetProgress"
import SepetTablo from "./SepetTablo"
import SepetToplam from "./SepetToplam"
import './Sepet.css'

function Sepet() {
  return (
    <section className="sepet-page">
    <div className="container">
      <div className="sepet-page-wrapper">
        <form className="sepet-form">
          <SepetProgress />
          <div className="shop-table-wrapper">
            <SepetTablo />
            <SepetKupon />
          </div>
        </form>
        <div className="sepet-collaterals">
          <SepetToplam />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Sepet