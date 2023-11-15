
import Proptypes from "prop-types";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
function MainLayout({children}) {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default MainLayout

MainLayout.propTypes = {
    children: Proptypes.node,
  };