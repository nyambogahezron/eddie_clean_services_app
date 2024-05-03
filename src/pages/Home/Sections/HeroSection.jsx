import HeroImg from "../../../assets/images/bg3.jpg";
import SwipperCon from "./Swipper";
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
          <a href='#' className='join'>
            Join Now
          </a>
          <a href='#' className='learn'>
            Learn More
          </a>
        </div>
      </div>
      <div className='img'>
        <img src={HeroImg} alt='hero image' />
      </div>
    </section>
  );
};

export default HeroSection;
