import CompanyValues from "../../components/AboutUsValues";
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
                    {`
                    Eddie Clean Services is a premier cleaning services
                    provider, distinguished by our founder Eddie's unwavering
                    commitment to excellence. With a dedicated team and years of
                    industry experience, we specialize in delivering top-notch
                    cleaning solutions tailored to meet our clients' diverse
                    needs. From residential to commercial spaces, Eddie Clean
                    Services ensures every environment shines with unparalleled
                    cleanliness, making us the trusted choice for transformable
                    cleaning experiences.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about-info'>
        <div className='wrapper'>
          <div className='item'>
            <h2>Motto</h2>
            <p>Where Cleanliness Becomes a Lifestyle.</p>
          </div>
          <div className='item'>
            <h2>Mission </h2>
            <p>
              Our goal is to be the most trusted, commercial cleaning company in
              the great East Africa. Our principles reflect this.
            </p>
          </div>
          <div className='item'>
            <h2>Vision</h2>
            <p>
              To become the most trusted, respected, and reliable commercial
              cleaning company in E.A
            </p>
          </div>
        </div>
      </div>
      <div className='about-values'>
        <CompanyValues />
      </div>
    </section>
  );
};

export default AboutUs;
