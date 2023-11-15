import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
    
    <div className="widgets-row">
      <div className="container">
        <div className="footer-widgets">
          
          <div className="widget-nav-menu">
            <h4>Logo</h4>
            <ul className="menu-list">
              <li>
                <a href="#">Biz Kimiz</a>
              </li>
              <li>
                <a href="#">Kariyer</a>
              </li>
              <li>
                <a href="#">İletişim</a>
              </li>
              <li>
                <a href="#">Satış Yap</a>
              </li>
              <li>
                <a href="#">Güvenli Alışveriş</a>
              </li>
            </ul>
          </div>
          <div className="widget-nav-menu">
            <h4>About Us</h4>
            <ul className="menu-list">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">My Orders</a>
              </li>
              <li>
                <a href="#">My Wishlist</a>
              </li>
              <li>
                <a href="#">Account details</a>
              </li>
              <li>
                <a href="#">Track My Orders</a>
              </li>
            </ul>
          </div>
          <div className="widget-nav-menu">
            <h4>Kampanyalar</h4>
            <ul className="menu-list">
              <li>
                <a href="#">Aktif Kampanyalar</a>
              </li>
              <li>
                <a href="#">Elite Üyelik</a>
              </li>
              <li>
                <a href="#">Hediye Fikirleri</a>
              </li>
              <li>
                <a href="#">Logo Fırsatları</a>
              </li>
              
            </ul>
          </div>
          <div className="widget-nav-menu">
            <h4>Yardım</h4>
            <ul className="menu-list">
              <li>
                <a href="#">Sıkça Sorulan Sorular</a>
              </li>
              <li>
                <a href="#">Canlı Yardım</a>
              </li>
              <li>
                <a href="#">Nasıl İade Edebilirim</a>
              </li>
              <li>
                <a href="#">İşlem Rehberi</a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-row">
      <div className="container">
        <div className="footer-copyright">
          <div className="site-copyright">
            <p>
            ©2023 DSM Grup Danışmanlık İletişim ve Satış Tic.A.Ş.-Her Hakkı Saklıdır.
            </p>
          </div>
          <a href="#">
            <img src="img/footer/cards.png" alt="" />
          </a>
          <div className="footer-menu">
            <ul className="footer-menu-list">
              <li className="list-item">
                <a href="#">Çerez Tercihleri</a>
              </li>
              <li className="list-item">
                <a href="#">Kullanım Koşulları</a>
              </li>
              <li className="list-item">
                <a href="#">KVK ve Gizlilik Politikası</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer