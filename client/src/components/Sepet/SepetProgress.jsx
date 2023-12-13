import { useContext, useEffect,useState } from "react";
import { CardContext } from "../../context/CardProvider";

function SepetProgress() {
  const { cardItems } = useContext(CardContext);
const [progres,SetProgress]=useState(0)


  const cardItemTotals = cardItems.map((item) => {
    const itemTotal = item.price * item.quantity;

    return itemTotal;
  });
  const toplamKargosuz = cardItemTotals.reduce((oncekiDeger, sonrakiDeger) => {
    return oncekiDeger + sonrakiDeger;
  }, 0);
useEffect(()=>{
SetProgress(toplamKargosuz)
},[toplamKargosuz])
  return (
    <div className="free-progress-bar">
      <p className="progress-bar-title" >
        Ücretsiz kargo için <strong>{progres<400 ? 400-progres+"₺" : 0+"₺"}</strong> değerinde daha ürün ekleyin !
      </p>
      <div className="progress-bar">
        <span className="progress" style={progres>400 ? {"width":"100%"}: {"width":(progres/400)*100+"%"}}></span>
      </div>
    </div>
  )
}

export default SepetProgress