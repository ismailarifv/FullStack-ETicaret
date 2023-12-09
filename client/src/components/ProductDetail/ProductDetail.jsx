import Galeri from "../Galeri/Galeri";
import Info from "../Info/Info";
import Sekmeler from "../Sekmeler/Sekmeler";
import "./ProductDetail.css";
import ProductKategori from "./ProductKategori/ProductKategori";
import PropTypes from "prop-types";

function ProductDetail({ singleProduct,setSingleProduct }) {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <ProductKategori />
          <div className="single-content">
            <main className="site-main">
            <Galeri  singleProduct={singleProduct}/>
              <Info singleProduct={singleProduct}/>
            </main>
          </div>
          <Sekmeler  singleProduct={singleProduct} setSingleProduct={setSingleProduct}/>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail

ProductDetail.propTypes = {
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func,
};