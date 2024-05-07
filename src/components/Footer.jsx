import { FaFacebookF, FaTwitter, FaLinkedin,  FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <section className='footer'>
      <div className='container'>
        <div className='footer-row'>
          <div className='footer-col'>
            <h4>Info</h4>
            <ul className='links'>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>Compressions</a>
              </li>
              <li>
                <a href='#'>Customers</a>
              </li>
              <li>
                <a href='#'>Service</a>
              </li>
              <li>
                <a href='#'>Collection</a>
              </li>
            </ul>
          </div>

          <div className='footer-col'>
            <h4>Explore</h4>
            <ul className='links'>
              <li>
                <a href='#'>Blogs</a>
              </li>
              <li>
                <a href='#'>Latest Activities</a>
              </li>
              <li>
                <a href='#'>Galley</a>
              </li>
              <li>
                <a href='#'>Our Team</a>
              </li>
              
              <li>
                <a href='#'>New And Events</a>
              </li>
            </ul>
          </div>

          <div className='footer-col'>
            <h4>Legal</h4>
            <ul className='links'>
              <li>
                <a href='#'>Customer Agreement</a>
              </li>
              <li>
                <a href='#'>Privacy Policy</a>
              </li>
              <li>
                <a href='#'>GDPR</a>
              </li>
              <li>
                <a href='#'>Security</a>
              </li>
              <li>
                <a href='#'>Testimonials</a>
              </li>
              
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
    </section>
  );
};

export default Footer;
