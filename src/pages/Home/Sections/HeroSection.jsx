import { Link } from "react-router-dom";
import SwiperContainer from "./SwiperContainer ";
const HeroSection = () => {
  return (
    <section className='hero-section'>
      <div className='hero'>
        <h2>Eddie Clean Services</h2>
        <p>
          Welcome to Eddie Cleaners, where we transform your space into a
          pristine sanctuary. Our professional team specializes in meticulous
          cleaning services tailored to your needs. With eco-friendly practices
          and unparalleled attention to detail, we promise a sparkling,
          refreshed environment every time.
        </p>
        <div className='buttons'>
          <Link to='#services' className='join'>
            Services
          </Link>
          <Link to='#contactUs' className='learn'>
            Contact Us
          </Link>
        </div>
      </div>
      <div className='img'>
        <SwiperContainer />
      </div>
    </section>
  );
};

export default HeroSection;
