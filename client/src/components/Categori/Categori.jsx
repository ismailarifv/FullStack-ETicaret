import CategoriItem from "./CategoriItem";
import "./Categori.css";

function Categori() {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>Kategoriler</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <ul className="category-list">
          <CategoriItem />
          <CategoriItem />
          <CategoriItem />
          <CategoriItem />
          <CategoriItem />
          <CategoriItem />
        </ul>
      </div>
    </section>
  )
}

export default Categori