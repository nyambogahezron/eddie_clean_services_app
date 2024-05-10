import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import ContactForm from "./contactForm";
import SocialMediaIcons from "./SocialMediaIcons";

const ContactUsInfo = () => {
  return (
    <div className='container'>
      <div className='content'>
        <div className='left-side'>
          <div className='details'>
            <div className='icon'>
              <FaLocationDot />
            </div>
            <div className='info'>
              <div className='topic'>Address</div>
              <div>Surkhet, NP12</div>
              <div>Birendranagar 06</div>
            </div>
          </div>
          <div className='details'>
            <div className='icon'>
              <FaPhone />
            </div>
            <div className='info'>
              <div className='topic'>Phone</div>
              <div className='text-one'>+0098 9893 5647</div>
              <div className='text-two'>+0096 3434 5678</div>
            </div>
          </div>
          <div className='details'>
            <div className='icon'>
              <FaEnvelope />
            </div>
            <div className='info'>
              <div className='topic'>Email</div>
              <div className='text-one'>codinglab@gmail.com</div>
              <div className='text-two'>info.codinglab@gmail.com</div>
            </div>
          </div>
        </div>
        <div className='right-side'>
          <ContactForm />
        </div>
      </div>
      {/* social media  */}
      <div>
        <SocialMediaIcons />
      </div>
    </div>
  );
};

export default ContactUsInfo;
