import PropTypes from "prop-types";
import './CategoriItem.css'
import { CardContext } from "../../context/CardProvider";
import { useContext } from "react";

function CategoriItem({ category }) {
  const { setCategoriControl } = useContext(CardContext);
  console.log(category);
  return (
    <li className="category-item">
      <a href="#" onClick={()=> setCategoriControl(category._id)}>
      <img src={category.img} alt=""  className="category-image" />
        <span className="category-title">{category.name}</span>
      </a>
    </li>
  )
}

export default CategoriItem
CategoriItem.propTypes = {
  category: PropTypes.object,
};

