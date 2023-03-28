import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
        <div className='text-center'>
            <h1>Contact Me</h1>
            <p>Please fill out the form</p>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-xs-12'>
                    <input id="name" type="text" className='form-control' placeholder='Name' name='name'></input>
                    <input id="phone" type="text" className='form-control' placeholder='Phone Number' name='phone'></input>
                    <input id="email" type="email" className='form-control' placeholder='Email' name='email'></input>
                    <input id="subject" type="text" className='form-control' placeholder='Subject' name='subject'></input>
                </div>
                <div className='col-md-6 col-xs-12'>
                    <textarea id="description" type="text" className='form-control' placeholder='Subject' name='subject'></textarea>
                    <button className='btn-main-offer contact-btn' type='submit'>Contact Me</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact