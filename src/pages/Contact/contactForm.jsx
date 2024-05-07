const ContactForm = () => {
  return (
    <div className='contact-form'>
      <div className='topic-text'>Send us a message</div>

      <form action='#'>
        <div className='input-box'>
          <input type='text' placeholder='Enter your name' />
        </div>
        <div className='input-box'>
          <input type='text' placeholder='Enter your email' />
        </div>
        <div className='input-box message-box'>
          <textarea placeholder='Enter your message'></textarea>
        </div>
        <div className='button'>
          <input type='button' value='Send Now' />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
