import AddressContainer from "./AddressContainer";
import ContactForm from "./contactForm";
import SocialMediaIcons from "./SocialMediaIcons";

const ContactUsInfo = () => {
  return (
    <div className='container'>
      <div className='content'>
        <AddressContainer />
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
