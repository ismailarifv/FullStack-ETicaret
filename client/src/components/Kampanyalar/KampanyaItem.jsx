import './KampanyaItem.css'

function KampanyaItem() {
  return (
    <div className="campaign-item">
      <h3 className="campaign-title">
        Kampanya
      </h3>
      <p className="campaign-desc">
        Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
      </p>
      <a href="#" className="btn btn-warning ">
        Göster
        <i className="bi bi-arrow-right"></i>
      </a>
    </div>
  )
}

export default KampanyaItem