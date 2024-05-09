import { FaFacebookF, FaTwitter, FaLinkedin, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

import { PrimaryLinks, exploreLinks, legalLinks } from "./data";

const Footer = () => {
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
    </footer>
  );
};

export default Footer;
