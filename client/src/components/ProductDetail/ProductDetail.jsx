import Galeri from "../Galeri/Galeri";
import Info from "../Info/Info";
import Sekmeler from "../Sekmeler/Sekmeler";
import "./ProductDetail.css";
import ProductKategori from "./ProductKategori/ProductKategori";

function ProductDetail() {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <ProductKategori />
          <div className="single-content">
            <main className="site-main">
            <Galeri />
              <Info />
            </main>
          </div>
          <Sekmeler />
        </div>
      </div>
    </section>
  )
}

export default ProductDetail