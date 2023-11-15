import Yorum from './Yorum'
import YorumForm from './YorumForm'
import './Yorumlar.css'

function Yorumlar() {
  return (
    <div className="tab-panel-reviews">
      <h3>2 yorum </h3>
      <div className="comments">
        <ol className="comment-list">
          <Yorum />
          <Yorum />
          <Yorum />
          
        </ol>
      </div>
      <div className="review-form-wrapper">
        <h2>Yorum Ekle</h2>
        <YorumForm />
      </div>
    </div>
  )
}

export default Yorumlar