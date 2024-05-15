import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import CompanyValues from "./AboutUsValues";
import AboutImg from "../assets/images/img-1.jpg";
const AboutUsInfo = () => {
  return (
    <div className='container'>
      <div className='about-wrapper'>
        {/* left  */}
        <div className='about-left'>
          <div className='about-left-content'>
            <div className='img'>
              <img src={AboutImg} alt='about image' />
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
        </div>
        {/* right */}
        <div className='about-right'>
          <div className='text-container'>
            <div className='wrapper'>
              <div className='title'>
                <h1> about us</h1>
              </div>
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
      {/* about Us column 2 content  */}

      <div className='about-col-2'>
        <div className='about-left'>
          <div className='text-container'>
            <div className='wrapper'>
              <div className='title'>
                <h1> Our approach</h1>
              </div>
              <div className='about-text'>
                <p>
                  {`
                  At Eddie Clean Services, our approach integrates humility,
                  growth, and responsibility into every service we provide. We
                  excel at efficiently tackling cleaning challenges, ensuring
                  maximum value and trust for our clients. Our team's well-being
                  drives stability and development, guaranteeing top-notch
                  results. We prioritize integrity in all our actions and
                  embrace innovation to stay ahead. Community engagement
                  enhances our local impact, while safety and security remain
                  paramount for peace of mind in every clean.
                `}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='about-right'>
          <div className='about-left-content'>
            <div className='img'>
              <img src='/img-4.jpg' alt='about image' />
            </div>
          </div>
        </div>
      </div>

      {/* company motto, mission, and vision container */}
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

      {/* company values container */}

      <div className='about-values'>
        <CompanyValues />
      </div>
    </div>
  );
};

export default AboutUsInfo;
