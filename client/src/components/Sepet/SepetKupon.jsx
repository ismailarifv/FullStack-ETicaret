

function SepetKupon() {
  return (
    <div className="actions-wrapper">
      <div className="coupon">
        <input type="text" className="input-text" placeholder="Kupon Kodu" />
        <button className="btn">Kupon Kullan</button>
      </div>
      <div className="update-sepet">
        <button className="btn">Sepeti Güncelle</button>
      </div>
    </div>
  )
}

export default SepetKupon