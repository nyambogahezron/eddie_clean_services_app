const HeroSection = () => {
  return (
    <section className='hero-section'>
      <div className='hero'>
        <h2>Mobile App Development</h2>
        <p>
          Join us in the exciting world of programming and turn your ideas into
          reality. Unlock the world of endless possibilities - learn to code and
          shape the digital future with us.
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
        <img src='hero-bg.png' alt='hero image' />
      </div>
    </section>
  );
};

export default HeroSection;
