import React from 'react';
import charityhub from '../images/charityhub.jpg'
import dashboard from '../images/dashboard.jpg'
import sudoku from '../images/sudoku.jpg'
import photohouse from '../images/photohouse.jpg'
import quiz from '../images/quiz.jpg'
import "react-popupbox/dist/react-popupbox.css"
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";







const Portfolio = () => {
// PHOTOHOUSE
  const openPopupboxPhotohouse = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={photohouse} alt="Photohouse project"/>
        <p>test code test code test codetest codetest codetest codetest codetest codetest codetest code
        test codetest codetest codevtest codetest codetest code</p>
        <b>Live Site:</b> <a className='hyper-link'onClick={() => window.open('https://tonywilson1211.github.io/P1_Photohouse/')}>Link</a>
        <br />
        <b>GitHub:</b> <a className='hyper-link'onClick={() => window.open('https://github.com/Tonywilson1211/P1_Photohouse')}>Link</a> 
      </>
    )
    
    PopupboxManager.open({content});
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Photohouse Project",
        },
      },
    });
}

const popupboxConfigPhotohouse = {
  titleBar: {
    enable: true,
    },
  fadeIn: true,
  fadeInSpeed: 500
}

// SUDOKU
const openPopupboxSudoku = () => {
  const content = (
    <>
      <img className="portfolio-image-popupbox" src={sudoku} alt="Sudoku project"/>
      <p>test code test code test codetest codetest codetest codetest codetest codetest codetest code
      test codetest codetest codevtest codetest codetest code</p>
      <b>Live Site:</b> <a className='hyper-link'onClick={() => window.open('https://tonywilson1211.github.io/P2_Sudoku/', '_blank')}>Link</a>
      <br />
      <b>GitHub:</b> <a className='hyper-link'onClick={() => window.open('https://github.com/Tonywilson1211/P2_Sudoku')}>Link</a> 
    </>
  )
  
  PopupboxManager.open({content})
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        text: "Sudoku Project",
      },
    },
  });
}

const popupboxConfigSudoku = {
titleBar: {
  enable: true,
},
fadeIn: true,
fadeInSpeed: 500

}
// THE MOVIE QUIZ
const openPopupboxQuiz = () => {
  const content = (
    <>
      <img className="portfolio-image-popupbox" src={quiz} alt="The Movie Quiz project"/>
      <p>test code test code test codetest codetest codetest codetest codetest codetest codetest code
      test codetest codetest codevtest codetest codetest code</p>
      <b>Live Site:</b> <a className='hyper-link'onClick={() => window.open('https://the-movie-quiz.herokuapp.com/', '_blank')}>Link</a>
      <br />
      <b>GitHub:</b> <a className='hyper-link'onClick={() => window.open('https://github.com/Tonywilson1211/P3_The_Movie_Quiz')}>Link</a> 
    </>
  )
  
  PopupboxManager.open({content})
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        text: "The Movie Quiz Project",
      },
    },
  });
}

const popupboxConfigQuiz = {
titleBar: {
  enable: true,
},
fadeIn: true,
fadeInSpeed: 500

}
// DASHBOARD
const openPopupboxDashboard = () => {
  const content = (
    <>
      <img className="portfolio-image-popupbox" src={dashboard} alt="Dashboard project"/>
      <p>test code test code test codetest codetest codetest codetest codetest codetest codetest code
      test codetest codetest codevtest codetest codetest code</p>
      <b>Live Site:</b> <a className='hyper-link'onClick={() => window.open('https://tonywilson1211.github.io/Admin_Dashboard/', '_blank')}>Link</a>
      <br />
      <b>GitHub:</b> <a className='hyper-link'onClick={() => window.open('https://github.com/Tonywilson1211/Admin_Dashboard')}>Link</a> 
    </>
  )
  
  PopupboxManager.open({content})
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        text: "The Dashboard Project",
      },
    },
  });
}

const popupboxConfigDashboard = {
titleBar: {
  enable: true,
},
fadeIn: true,
fadeInSpeed: 500

}
// CHARITYHUB
const openPopupboxCharityhub = () => {
  const content = (
    <>
      <img className="portfolio-image-popupbox" src={charityhub} alt="CharityHub project"/>
      <p>test code test code test codetest codetest codetest codetest codetest codetest codetest code
      test codetest codetest codevtest codetest codetest code</p>
      <b>Live Site:</b> <a className='hyper-link'onClick={() => window.open('https://charityhub.herokuapp.com/', '_blank')}>Link</a>
      <br />
      <b>GitHub:</b> <a className='hyper-link'onClick={() => window.open('https://github.com/Tonywilson1211/Hackathon-Charity_Hub')}>Link</a> 
    </>
  )
  
  PopupboxManager.open({content})
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        text: "The CharityHub Project",
      },
    },
  });
}

const popupboxConfigCharityhub = {
titleBar: {
  enable: true,
},
fadeIn: true,
fadeInSpeed: 250
}

  return (
    <div className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
        <div className='image-box-wrapper'>
          <div className='portfolio-image-box' onClick={openPopupboxPhotohouse}>
            <div className='overlay'></div>
            <img className='portfolio-image' src={photohouse} alt='Project screenshot' />
            <FontAwesomeIcon className='portfolio-icon' icon={faSearch} />
          </div>
          <div className='portfolio-image-box' onClick={openPopupboxSudoku}>
            <div className='overlay'></div>
            <img className='portfolio-image' src={sudoku} alt="Sudoku HTML/CSS/JS project game page screenshot"></img>  
            <FontAwesomeIcon className="portfolio-icon" icon={faSearch} />
          </div>
          <div className='portfolio-image-box' onClick={openPopupboxQuiz}>
            <div className='overlay'></div>
            <img className='portfolio-image' src={quiz} alt="The Movie Quiz Python project landing page screenshot"></img> 
            <FontAwesomeIcon className="portfolio-icon" icon={faSearch} /> 
          </div>
          <div className='portfolio-image-box' onClick={openPopupboxDashboard}>
            <div className='overlay'></div>
            <img className='portfolio-image' src={dashboard} alt="Dashboard HTML/CSS project landing page screenshot"></img>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearch} />
          </div>
          <div className='portfolio-image-box' onClick={openPopupboxCharityhub}>
            <div className='overlay'></div>
            <img className='portfolio-image' src={charityhub} alt="CharityHub HTML/CSS/Python/Bootstrap project landing page screenshot"></img>  
            <FontAwesomeIcon className="portfolio-icon" icon={faSearch} />
          </div>
        </div>
        
        <PopupboxContainer {...popupboxConfigSudoku}/>
        <PopupboxContainer {...popupboxConfigQuiz}/>
        <PopupboxContainer {...popupboxConfigDashboard}/>
        <PopupboxContainer {...popupboxConfigCharityhub}/>
        <PopupboxContainer {...popupboxConfigPhotohouse}/>
      </div>
      
    </div>
  )}

export default Portfolio;