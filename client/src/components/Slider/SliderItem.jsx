import PropTypes from "prop-types";
function SliderItem({ imageSrc }) {
  return (
    <div className="slider-item fade">
      <div className="slider-image">
      <img src={imageSrc} className="img-fluid" alt="" />
      </div>
      <div className="container">
        <p className="slider-title">Lorem, ipsum.</p>
        <h2 className="slider-heading">Lorem, ipsum dolor.</h2>
        <a href="#" className="btn btn-lg btn-warning ">
          Lorem, ipsum.
        </a>
      </div>
    </div>
  )
}

export default SliderItem

SliderItem.propTypes = {
  imageSrc: PropTypes.string,
};