import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import PageTitle from "../../components/PageTitle";
import ContactForm from "./contactForm";
const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div>
        <PageTitle text='Contact Us' />

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
        </div>
      </div>
    </section>
  );
};

export default Contact;
