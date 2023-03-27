import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cert1 from '../images/cert1.jpg';
import cert2 from '../images/cert2.jpg';
import cert3 from '../images/cert3.jpg';

const AchievementsCarousel = () => {
  return (
    <Carousel>
        <>
        <img src={cert1} alt='Code Institute' />
        <h3>Code Institute Diploma</h3>
        <p>test test test test test test test test test test test</p>
        </>
        <>
        <img src={cert2} alt='HTML' />
        <h3>Certificate for HTML assessment from LindedIn</h3>
        <p>test test test test test test test test test test test</p>
        </>
        <>
        <img src={cert3} alt='Hackathon' />
        <h3>Hackathon Participation Badge</h3>
        <p>test test test test test test test test test test test</p>
        </>
    </Carousel>
  )
}

export default AchievementsCarousel