import Yorum from './Yorum'
import YorumForm from './YorumForm'
import PropTypes from "prop-types";
import './Yorumlar.css'

function Yorumlar({ active }) {
  return (
    <div className={`tab-panel-reviews ${active}`}>
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

Yorumlar.propTypes = {
  active: PropTypes.string
}