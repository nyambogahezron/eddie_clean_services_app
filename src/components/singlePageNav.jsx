import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SinglePageNav = ({ title }) => {
  const navRef = useRef();
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const handleOnScroll = () => {
      const navTop = navRef.current.getBoundingClientRect().top;
      setNavHeight(navTop);
    };

    window.addEventListener("scroll", handleOnScroll);

    return () => window.removeEventListener("scroll", handleOnScroll);
  }, []);

  return (
    <>
      <header className='single-page-header' ref={navRef}>
        <div className='wrapper'>
          <div className='title'>
            <h1>{title}</h1>
          </div>
        </div>
      </header>
      <nav className={`single-page-nav ${navHeight <= -200 ? "fixed" : ""}`}>
        <span className='home-link'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='rgba(43,47,145,1)'
            >
              <path d='M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z'></path>
            </svg>
            <Link to='/'>Home</Link>
          </div>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z'></path>
            </svg>
          </div>
        </span>
        <div className='current-page'>{title}</div>
      </nav>
    </>
  );
};

SinglePageNav.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SinglePageNav;
