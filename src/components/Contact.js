import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm} from "react-hook-form"

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();

    const form = useRef();
    const serviceID = "service_iwu1l3b";
    const templateID ="template_ID";
    const publicKey = "g4kONYDW-QLc-r7va";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            }
        )
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
          .then((result) => {
              console.log(result.text);
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
  )
}

export default Contact