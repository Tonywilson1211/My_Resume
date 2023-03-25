import React from 'react';
import charityhub from '../images/charityhub.jpg'
import dashboard from '../images/dashboard.jpg'
import sudoku from '../images/sudoku.jpg'
import photohouse from '../images/photohouse.jpg'
import quiz from '../images/quiz.jpg'
import { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";







const Portfolio = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>Portfolio</h1>

        <div className='image-box-wrapper'>
          <div className='portfolio-image-box'>
            <div className='overlay' onClick={() => setSelectedImg(photohouse)}></div>
            <img className='portfolio-image' src={photohouse} alt='Project screenshot' />
            <FontAwesomeIcon className='portfolio-icon' icon={faSearch} />
          </div>
          <div className='portfolio-image-box'>
            <div className='overlay' onClick={() => setSelectedImg(sudoku)}></div>
            <img className='portfolio-image' src={sudoku} alt="Sudoku HTML/CSS/JS project game page screenshot"></img>  
            <FontAwesomeIcon className="portfolio-icon" icon={faSearch} />
          </div>
          <div className='portfolio-image-box'>
            <div className='overlay' onClick={() => setSelectedImg(quiz)}></div>
            <img className='portfolio-image' src={quiz} alt="The Movie Quiz Python project landing page screenshot"></img> 
            <FontAwesomeIcon className="portfolio-icon" icon={faSearch} /> 
          </div>
          <div className='portfolio-image-box'>
            <div className='overlay' onClick={() => setSelectedImg(dashboard)}></div>
            <img className='portfolio-image' src={dashboard} alt="Dashboard HTML/CSS project landing page screenshot"></img>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearch} />
          </div>
          <div className='portfolio-image-box'>
            <div className='overlay' onClick={() => setSelectedImg(charityhub)}></div>
            <img className='portfolio-image' src={charityhub} alt="CharityHub HTML/CSS/Python/Bootstrap project landing page screenshot"></img>  
            <FontAwesomeIcon className="portfolio-icon" icon={faSearch} />
          </div>
        </div>
        <Modal
          isOpen={!!selectedImg}
          onRequestClose={() => setSelectedImg(null)}
          className='modal'
          overlayClassName='overlay'
        >
          {selectedImg && (
            <div className='modal-content'>
              <img
                src={selectedImg}
                alt='Selected project screenshot'
                className='modal-image'
              />
              <div className='modal-text'>
                <h1 className='modal-heading'>Project Name</h1>
                <p className='modal-description'>
                  A brief description of the project goes here.
                </p>
                <div className='modal-links'>
                  <a href='#'>Live Site</a>
                  <a href='#'>GitHub</a>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Portfolio;