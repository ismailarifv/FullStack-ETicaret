
import Header from "./components/Layout/Header/Header";
import './App.css'
import Footer from "./components/Layout/Footer/Footer";
import Sliders from "./components/Slider/Sliders";
import Categori from "./components/Categori/Categori";
import Products from "./components/Products/Products";
import Kampanyalar from "./components/Kampanyalar/Kampanyalar";
import Markalar from "./components/Markalar/Markalar";

function App() {
 

  return (
    <>
      <Header/>
      <Sliders/>
      <Categori/>
      <Kampanyalar/>
      <Products/>
      <Markalar/>
      <Footer/>
    </>
  )
}

export default App
