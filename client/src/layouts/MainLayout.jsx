
import Proptypes from "prop-types";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import { useState } from "react";
import Search from "../components/Modals/Search";
function MainLayout({children}) {
  const [isSearchShow, setIsSearchShow] = useState(false);
  return (
    <div className="main-layout">
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
    <Header  setIsSearchShow={setIsSearchShow}/>
    {children}
    <Footer/>
    </div>
  )
}

export default MainLayout

MainLayout.propTypes = {
    children: Proptypes.node,
  };