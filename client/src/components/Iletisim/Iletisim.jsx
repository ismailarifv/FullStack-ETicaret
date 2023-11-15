import './Iletisim.css'

function Iletisim() {
  return (
    <section className="contact">
      <div className="contact-top">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9633698339308!2d28.929441087738052!3d41.04793012296828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1d021adf417%3A0xba3a3fdfdbb5f5d!2sEy%C3%BCp%20Sultan%20Camii!5e0!3m2!1str!2str!4v1665091191675!5m2!1str!2str"
            width="100%"
            height="500"
            style={{
              border: "0",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="container">
          <div className="contact-titles">
       
            <h2>Bize Katılın</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam tenetur distinctio labore, 
              suscipit at unde quisquam accusamus omnis,   
              quaerat recusandae quidem voluptates ex dolorem possimus. Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Vero ratione, dolor atque est consectetur magnam deserunt beatae pariatur non numquam,
               odio voluptatibus tempora recusandae suscipit?
            </p>
          </div>
          <div className="contact-elements">
            <form className="contact-form">
              <div className="">
                <label>
                  Adınız
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Mail Adresiniz
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Konu
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Mesajınız
                  <span>*</span>
                </label>
                <textarea
                  id="author"
                  name="author"
                  type="text"
                  defaultValue=""
                  size="30"
                  required=""
                ></textarea>
              </div>
              <button className="btn btn-sm form-button">Gönder</button>
            </form>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Lorem, ipsum.</strong>
                  <p className="contact-street">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, reprehenderit.
                  </p>
                  <a href="tel:Telefon: +90 0123456789">Telefon: +90 0123456789</a>
                  <a href="mailto:Email: contact@example.com">
                    Email: iletisim@example.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Açık Olduğu Saatler</strong>
                  <p className="contact-date">Pazartesi - Cuma : 09.00 - 22.00</p>
                  <p> Haftasonu Kapalı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Iletisim