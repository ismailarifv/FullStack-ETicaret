

function Yorum() {
  return (
    <li className="comment-item">
      <div className="comment-avatar">
        <img src="img/avatars/avatar1.jpg" alt="" />
      </div>
      <div className="comment-text">
        <ul className="comment-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
        </ul>
        <div className="comment-meta">
          <strong>admin</strong>
          <span>-</span>
          <time>15 Kasım 2023</time>
        </div>
        <div className="comment-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, deleniti.
          </p>
        </div>
      </div>
    </li>
  )
}

export default Yorum