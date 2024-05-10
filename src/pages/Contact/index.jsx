import PageTitle from "../../components/PageTitle";
import ContactUsInfo from "../../components/ContactUsInfo";

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div>
        <PageTitle text='Contact Us' />
        <ContactUsInfo />
      </div>
    </section>
  );
};

export default Contact;
