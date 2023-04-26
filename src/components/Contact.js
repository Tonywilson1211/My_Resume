import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_iwu1l3b', 'template_ID', form.current, 'g4kONYDW-QLc-r7va')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        window.alert('Message sent!');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="contact">
      <div className='text-center'>
        <h1>Contact Me</h1>
        <p>Please fill out the form</p>
      </div>
      <div className='container'>
        <form ref={form} onSubmit={sendEmail}>
          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              <input id="name" type="text" className='form-control' placeholder='Name' name='name'></input>
              <input id="phone" type="text" className='form-control' placeholder='Phone Number' name='phone'></input>
              <input id="email" type="email" className='form-control' placeholder='Email' name='email'></input>
              <input id="subject" type="text" className='form-control' placeholder='Subject' name='subject'></input>
            </div>
            <div className='col-md-6 col-xs-12'>
              <textarea id="message" type="text" className='form-control' placeholder='Message' name='message'></textarea>
              <button className='btn-main-offer contact-btn' type='submit'>Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
