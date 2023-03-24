import React from 'react';
import author from "../images/me.jpg"

const AboutMe = () => {
  return (
    <div className='about-me'>
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrap mb-5'>
                        <img className='profile-img' src={author} alt="picture of the author"/>
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className='about'>About Me</h1>
                    <p className='about-text'>
                    In my search for a new challenge where I can leverage my skills and experience in software development, 
                    I was pleased to find Apple’s opening for the UK Software Engineering Apprenticeship. 

                    I have nearly  two decades of professional experience behind me and have recently discovered my passion for software development. 
                    Becoming a software developer has become my goal and I am currently a full time student with Code Institute, an online remote learning 
                    bootcamp, specilising in full stack software development. I am on track to receive a university accredited diploma in coming months. 

                    In a short space of time I have developed projects utilising HTML, CSS, JavaScript and Python. 
                    I have also taken an active part in 2 Hackathons where I have been able to demonstrate my ability to work as part of a team,  
                    apply my knowledge and learn the importance of version control via Github. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe