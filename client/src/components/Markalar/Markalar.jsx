import MarkaItem from "./MarkaItem";
import "./Markalar.css";

function Markalar() {
  return (
    <section className="markalar">
    <div className="container">
      <ul className="marka-list">
        <MarkaItem />
        <MarkaItem />
        <MarkaItem />
        <MarkaItem />
        <MarkaItem />
        <MarkaItem />
      </ul>
    </div>
  </section>
  )
}

export default Markalar