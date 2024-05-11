import ContactUsInfo from "../../components/ContactUsInfo";
import SinglePageNav from "../../components/singlePageNav";

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <SinglePageNav title='Contact Us' />

      <main className='single-page-main'>
        <div className='container'>
          <div className='map'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15956.291905768014!2d36.633476528163484!3d-1.1075062414147419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHotels!5e0!3m2!1sen!2ske!4v1715380489691!5m2!1sen!2ske'
              width={`100%`}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>
        <>
          <ContactUsInfo />
        </>
      </main>
    </section>
  );
};

export default Contact;
