import PageTitle from "../../components/PageTitle";
// import AboutUsImg from "../../assets/images/bg1.jpg";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
const AboutUs = () => {
  return (
    <section id='aboutUs'>
      <PageTitle text='About Us' />
      <div className='container'>
        <div className='about-wrapper'>
          {/* left  */}
          <div className='about-left'>
            <div className='about-left-content'>
              <div></div>
              <ul className='icons'>
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaLinkedin />
                </li>
                <li>
                  <FaInstagram />
                </li>
              </ul>
            </div>
          </div>
          {/* right */}
          <div className='about-right'>
            <div className='text-container'>
              <div className='wrapper'>
                <div className='about-text'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam, perferendis corporis! Sit, iusto. Soluta ducimus
                    eaque natus dolorum quia qui, facere debitis odit accusamus
                    dicta officia quis atque rerum. Voluptatem aspernatur in
                    illum ea quaerat vel voluptas assumenda consequuntur quidem!
                    Pariatur cum autem voluptas velit perferendis asperiores
                    quibusdam ipsa tempore voluptatibus sint. Aliquam odio magni
                    dolor numquam eligendi vitae voluptates nesciunt id atque et
                    tempora, aut labore molestias vel expedita placeat
                    consectetur cum sequi. Sapiente reprehenderit labore,
                    doloremque debitis, officiis totam quos aut cumque odio
                    quaerat, est maxime architecto vero. Pariatur, hic? Soluta
                    fugiat modi odio quas deleniti. Repellat, exercitationem.
                  </p>
                </div>
                <div className='about-info'>
                  <div className='wrapper'>
                    <div className='item'>
                      <h2>Motto</h2>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className='item'>
                      <h2>Version</h2>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className='item'>
                      <h2>Mission</h2>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
