import React from 'react';
import charityhub from '../images/charityhub.jpg'
import dashboard from '../images/dashboard.jpg'
import sudoku from '../images/sudoku.jpg'
import photohouse from '../images/photohouse.jpg'
import quiz from '../images/quiz.jpg'

const Portfolio = () => {
  return (
    <div className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
        <div className='image-box-wrapper row justify-content-center'>
          <div className='portfolio-image-box'>
            <img className='portfolio-image' src={photohouse} alt="Photohouse HTML/CSS project landing page screenshot"></img>  
            <img className='portfolio-image' src={sudoku} alt="Sudoku HTML/CSS/JS project game page screenshot"></img>
            <img className='portfolio-image' src={quiz} alt="The Movie Quiz Python project landing page screenshot"></img>
            <img className='portfolio-image' src={dashboard} alt="Dashboard HTML/CSS project landing page screenshot"></img>
            <img className='portfolio-image' src={charityhub} alt="CharityHub HTML/CSS/Python/Bootstrap project landing page screenshot"></img>       
          </div>

        </div>
      </div>
    </div>
  )
}

export default Portfolio