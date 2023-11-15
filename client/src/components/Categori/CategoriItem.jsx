import './CategoriItem.css'

function CategoriItem() {
  return (
    <li className="category-item">
      <a href="#">
        <img
          src="img/categories/categories1.png"
          alt=""
          className="category-image"
        />
        <span className="category-title">Telefon</span>
      </a>
    </li>
  )
}

export default CategoriItem