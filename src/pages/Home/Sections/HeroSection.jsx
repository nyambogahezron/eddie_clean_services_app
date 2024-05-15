import { Link } from "react-router-dom";
import SwiperContainer from "./SwiperContainer ";
const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='hero'>
        <h2>
          <span>Eddie</span>
          <span>&nbsp; clean</span>
          <span>&nbsp; services</span>
        </h2>
        <p className="fade-up">
          Welcome to Eddie Clean Services, where we transform your space into a
          pristine sanctuary. Our professional team specializes in meticulous
          cleaning services tailored to your needs. With eco-friendly practices
          and unparalleled attention to detail, we promise a sparkling,
          refreshed environment every time.
        </p>
        <div className='buttons fade-up'>
          <Link to='#services' className=' btn btn-primary'>
            Our Services
          </Link>
          <Link to='#contactUs' className='btn btn-secondary'>
            Contact Us
          </Link>
        </div>
      </div>
      <div className='img'>
        <SwiperContainer />
      </div>
    </div>
  );
};

export default HeroSection;
