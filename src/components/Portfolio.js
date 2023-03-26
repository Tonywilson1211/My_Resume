import React from 'react';
import charityhub from '../images/charityhub.jpg'
import dashboard from '../images/dashboard.jpg'
import sudoku from '../images/sudoku.jpg'
import photohouse from '../images/photohouse.jpg'
import quiz from '../images/quiz.jpg'
import { useState } from 'react';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";







const Portfolio = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>Portfolio</h1>

        <div className='image-box-wrapper'>
          <div className='portfolio-image-box'>
            <div className='overlay' onClick={() => setOpenModal(true)}>
              <Modal open={openModal} />
            </div>
            <img className='portfolio-image' src={photohouse} alt='Project screenshot' />
            <FontAwesomeIcon className='portfolio-icon' icon={faSearch} />
          </div>
          <div className='portfolio-image-box'>
          <div className='overlay' onClick={() => setOpenModal(true)}>
              <Modal open={openModal} />
            </div>
            <img className='portfolio-image' src={sudoku} alt="Sudoku HTML/CSS/JS project game page screenshot"></img>  
            <FontAwesomeIcon className="portfolio-icon" icon={faSearch} />
          </div>
          <div className='portfolio-image-box'>
          <div className='overlay' onClick={() => setOpenModal(true)}>
              <Modal open={openModal} />
            </div>
            <img className='portfolio-image' src={quiz} alt="The Movie Quiz Python project landing page screenshot"></img> 
            <FontAwesomeIcon className="portfolio-icon" icon={faSearch} /> 
          </div>
          <div className='portfolio-image-box'>
          <div className='overlay' onClick={() => setOpenModal(true)}>
              <Modal open={openModal} />
            </div>
            <img className='portfolio-image' src={dashboard} alt="Dashboard HTML/CSS project landing page screenshot"></img>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearch} />
          </div>
          <div className='portfolio-image-box'>
          <div className='overlay' onClick={() => setOpenModal(true)}>
              <Modal open={openModal} />
            </div>
            <img className='portfolio-image' src={charityhub} alt="CharityHub HTML/CSS/Python/Bootstrap project landing page screenshot"></img>  
            <FontAwesomeIcon className="portfolio-icon" icon={faSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;