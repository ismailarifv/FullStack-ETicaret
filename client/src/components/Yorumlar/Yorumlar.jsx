import Yorum from './Yorum'
import YorumForm from './YorumForm'
import PropTypes from "prop-types";
import './Yorumlar.css'
import { useEffect, useState } from "react";
import { message } from "antd";

function Yorumlar({ active, singleProduct, setSingleProduct }) {
  const [users, setUsers] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const thisReview = [];
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/users`);
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchUsers();
  }, [apiUrl]);
  singleProduct && singleProduct.reviews.forEach((review) => {
    const matchingUsers = users?.filter((user) => user._id === review.user);

    matchingUsers.forEach((matchingUser) => {
      thisReview.push({
        review: review,
        user: matchingUser,
      });
    });
  });
  return (
    <div className={`tab-panel-reviews ${active}`}>
      {singleProduct && singleProduct.reviews.length > 0 ? (
        <>
        {console.log(singleProduct)}
          <h3>{singleProduct.name} için {singleProduct.reviews.length} yorum</h3>
          <div className="comments">
            <ol className="comment-list">
              {singleProduct.reviews.map((item, index) => (
                <Yorum key={index} item={item} reviewItem={item}/>
              ))}
            </ol>
          </div>
        </>
      ) : (
        <h3>Hiç yorum yok...</h3>
      )}
      <div className="review-form-wrapper">
        <h2>Yorum Ekle</h2>
        <YorumForm singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}/>
      </div>
    </div>
  )
}

export default Yorumlar

Yorumlar.propTypes = {
  active: PropTypes.string,
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func,
}