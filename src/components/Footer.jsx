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
      <button title="Go to top"
        className={`scrollToTop ${isVisible ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
