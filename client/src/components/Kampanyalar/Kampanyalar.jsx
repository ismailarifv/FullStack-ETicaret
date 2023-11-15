import './Kampanyalar.css'
import KampanyaItem from './KampanyaItem'


function Kampanyalar() {
  return (
    <section className="campaigns">
      <div className="container">
        <div className="campaigns-wrapper">
          <KampanyaItem/>
          <KampanyaItem/>
        </div>
        <div className="campaigns-wrapper">
        <KampanyaItem/>
          <KampanyaItem/>
        </div>
      </div>
    </section>
  )
}

export default Kampanyalar