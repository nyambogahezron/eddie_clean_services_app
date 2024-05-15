import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaTiktok,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { PrimaryLinks, exploreLinks, legalLinks } from "./data";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 1200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer>
      <div className='custom-shape-divider-bottom-1715724372'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='shape-fill'
          ></path>
        </svg>
      </div>
      <div className='wrapper'>
        <div className='footer-row'>
          <div className='footer-col'>
            <h4>Info</h4>
            <ul className='links'>
              {PrimaryLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='footer-col'>
            <h4>Explore</h4>
            <ul className='links'>
              {exploreLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='footer-col'>
            <h4>Legal</h4>
            <ul className='links'>
              {legalLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='footer-col'>
            <h4>Newsletter</h4>
            <p>
              Subscribe to our newsletter for a weekly dose of news, updates,
              helpful tips, and exclusive offers.
            </p>
            <form action='#'>
              <input type='text' placeholder='Your email' required />
              <button type='submit'>SUBSCRIBE</button>
            </form>
            <div className='icons'>
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedin />
              <FaTiktok />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='powered-by'>
        <span>@copy-right 2024</span>
        <span>
          {" "}
          <Link to='#'>view developer </Link>
        </span>
      </div>
      <button
        title='Go to top'
        className={`scrollToTop ${isVisible ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
