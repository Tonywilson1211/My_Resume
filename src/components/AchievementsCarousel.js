import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cert1 from '../images/cert1.jpg';
import cert2 from '../images/cert2.jpg';
import cert3 from '../images/cert3.jpg';
import cert4 from '../images/cert4.jpg';

const AchievementsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}

      >
        <>
        <img src={cert1} alt='Code Institute' />
        <div className='myCarousel'>
          <h3>Code Institute Diploma</h3>
          <p>test test test test test test test test test test test</p>
        </div>
        
        </>
        <>
        <img src={cert2} alt='HTML' />
        <div className='myCarousel'>
          <h3>Certificate for HTML assessment from LindedIn</h3>
          <p>test test test test test test test test test test test</p>
        </div>
        
        </>
        <>
        <img src={cert3} alt='Hackathon' />
        <div className='myCarousel'>
          <h3>Hackathon Participation Badge</h3>
          <p>test test test test test test test test test test test</p>
        </div>
        
        </>
        <>
        <img src={cert4} alt='Leetcode' />
        <div className='myCarousel'>
          <h3>Hackathon Participation Badge</h3>
          <p>test test test test test test test test test test test</p>
        </div>
        
        </>
    </Carousel>
  )
}

export default AchievementsCarousel