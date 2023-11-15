import Yorumlar from "../Yorumlar/Yorumlar"
import './Sekmeler.css'

function Sekmeler() {
  return (
    <div className="single-tabs">
      <ul className="tab-list">
        <li>
          <a href="#" className="tab-button active" data-id="desc">
            Açıklama
          </a>
        </li>
        <li>
          <a href="#" className="tab-button" data-id="info">
            Ek Bilgiler
          </a>
        </li>
        <li>
          <a href="#" className="tab-button" data-id="reviews">
            Yorumlar
          </a>
        </li>
      </ul>
      <div className="tab-panel">
        <div className="tab-panel-descriptions content active" id="desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores blanditiis ipsam voluptate 
            libero a reprehenderit velit facere voluptatibus id? Expedita saepe voluptatem facilis eaque 
            incidunt corrupti culpa ipsam, debitis alias itaque. Iusto consequatur placeat ipsum accusantium
             a suscipit rem ducimus exercitationem voluptates recusandae aperiam, omnis saepe animi quaerat 
             perferendis error?
          </p>
          <br />
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores blanditiis ipsam voluptate 
            libero a reprehenderit velit facere voluptatibus id? Expedita saepe voluptatem facilis eaque 
            incidunt corrupti culpa ipsam, debitis alias itaque. Iusto consequatur placeat ipsum accusantium
             a suscipit rem ducimus exercitationem voluptates recusandae aperiam, omnis saepe animi quaerat 
             perferendis error?
          </p>
        </div>
        <div className="tab-panel-information content" id="info">
          <h3>Ek Bilgiler</h3>
          <table>
            <tbody>
              <tr>
                <th>Renk</th>
                <td>
                  <p>
                    Apple Red, Bio Blue, Sweet Orange, Blue, Green, Pink, Black,
                    White
                  </p>
                </td>
              </tr>
              <tr>
                <th>Beden</th>
                <td>
                  <p>XXS, XS, S, M, L, XL, XXL</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Yorumlar />
      </div>
    </div>
  )
}

export default Sekmeler