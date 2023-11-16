import { createContext,useState,useEffect } from "react";
import PropTypes from 'prop-types'
export const CardContext=createContext();



function CardProvider({children}) {

    const [cardItems, setCardItems] = useState(localStorage.getItem("cardItems")
    ? JSON.parse(localStorage.getItem("cardItems"))
    : []);

    useEffect(() => {
        localStorage.setItem("cardItems", JSON.stringify(cardItems));
      }, [cardItems]);

    const addToCard = (cardItem) => {
        // setCartItems([...cartItems, cartItem]); 1. yol
        setCardItems((cards) => [...cards, cardItem]);
      };
      

  return (
    <CardContext.Provider
    value={{
        cardItems,
        addToCard
    }}
    >
        {children}
    </CardContext.Provider>
  )
}

export default CardProvider

CardProvider.propTypes ={
    children:PropTypes.node
 }