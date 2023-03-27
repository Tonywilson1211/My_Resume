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
        <img clasName="portfolio-image-popupbox" src={photohouse} alt="Photohouse project"/>
        <p>test code test code test codetest codetest codetest codetest codetest codetest codetest code
        test codetest codetest codevtest codetest codetest code</p>
        <b>Live Site:</b> <a className='hyper-link'onClick={() => window.open('https://github.com/Tonywilson1211/P1_Photohouse')}>https://github.com/Tonywilson1211/P1_Photohouse</a>
        <b>GitHub:</b> <a className='hyper-link'onClick={() => window.open('https://github.com/Tonywilson1211/P1_Photohouse')}>https://github.com/Tonywilson1211/P1_Photohouse</a> 
      </>
    )
    
    PopupboxManager.open({content})
}

const popupboxConfigPhotohouse = {
  titleBar: {
    enable: true,
    text: "Photohouse Project"
  },
  fadeIn: true,
  fadeInSpeed: 500

}
// SUDOKU
const openPopupboxSudoku = () => {
  const content = (
    <>
      <img clasName="portfolio-image-popupbox" src={sudoku} alt="Phothouse project"/>
      <p>test code test code test codetest codetest codetest codetest codetest codetest codetest code
      test codetest codetest codevtest codetest codetest code</p>
      <b>Live Site:</b> <a className='hyper-link'onClick={() => window.open('https://tonywilson1211.github.io/P2_Sudoku/', '_blank')}>https://tonywilson1211.github.io/P2_Sudoku/</a>
      <br></br>
      <b>GitHub:</b> <a className='hyper-link'onClick={() => window.open('https://github.com/Tonywilson1211/P2_Sudoku')}>https://github.com/Tonywilson1211/P2_Sudoku</a> 
    </>
  )
  
  PopupboxManager.open({content})
}

const popupboxConfigSudoku = {
titleBar: {
  enable: true,
  text: "Sudoku Project"
},
fadeIn: true,
fadeInSpeed: 500

}
// THE MOVIE QUIZ
const openPopupboxQuiz = () => {
  const content = (
    <>
      <img clasName="portfolio-image-popupbox" src={quiz} alt="The Movie Quiz project"/>
      <p>test code test code test codetest codetest codetest codetest codetest codetest codetest code
      test codetest codetest codevtest codetest codetest code</p>
      <b>Live Site:</b> <a className='hyper-link'onClick={() => window.open('https://the-movie-quiz.herokuapp.com/', '_blank')}>https://the-movie-quiz.herokuapp.com/</a>
      <br></br>
      <b>GitHub:</b> <a className='hyper-link'onClick={() => window.open('https://github.com/Tonywilson1211/P3_The_Movie_Quiz')}>https://github.com/Tonywilson1211/P3_The_Movie_Quiz</a> 
    </>
  )
  
  PopupboxManager.open({content})
}

const popupboxConfigQuiz = {
titleBar: {
  enable: true,
  text: "The Movie Quiz Project"
},
fadeIn: true,
fadeInSpeed: 500

}
// DASHBOARD
const openPopupboxDashboard = () => {
  const content = (
    <>
      <img clasName="portfolio-image-popupbox" src={dashboard} alt="Dashboard project"/>
      <p>test code test code test codetest codetest codetest codetest codetest codetest codetest code
      test codetest codetest codevtest codetest codetest code</p>
      <b>Live Site:</b> <a className='hyper-link'onClick={() => window.open('https://tonywilson1211.github.io/Admin_Dashboard/', '_blank')}>https://tonywilson1211.github.io/Admin_Dashboard/</a>
      <br></br>
      <b>GitHub:</b> <a className='hyper-link'onClick={() => window.open('https://github.com/Tonywilson1211/Admin_Dashboard')}>https://github.com/Tonywilson1211/Admin_Dashboard</a> 
    </>
  )
  
  PopupboxManager.open({content})
}

const popupboxConfigDashboard = {
titleBar: {
  enable: true,
  text: "The Dashboard Project"
},
fadeIn: true,
fadeInSpeed: 500

}
// CHARITYHUB
const openPopupboxCharityhub = () => {
  const content = (
    <>
      <img clasName="portfolio-image-popupbox" src={dashboard} alt="CharityHub project"/>
      <p>test code test code test codetest codetest codetest codetest codetest codetest codetest code
      test codetest codetest codevtest codetest codetest code</p>
      <b>Live Site:</b> <a className='hyper-link'onClick={() => window.open('https://charityhub.herokuapp.com/', '_blank')}>https://charityhub.herokuapp.com/</a>
      <br></br>
      <b>GitHub:</b> <a className='hyper-link'onClick={() => window.open('https://github.com/Tonywilson1211/Hackathon-Charity_Hub')}>https://github.com/Tonywilson1211/Hackathon-Charity_Hub</a> 
    </>
  )
  
  PopupboxManager.open({content})
}

const popupboxConfigCharityhub = {
titleBar: {
  enable: true,
  text: "The CharityHub Project"
},
fadeIn: true,
fadeInSpeed: 500

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
      </div>
      <PopupboxContainer {...popupboxConfigPhotohouse}/>
      <PopupboxContainer {...popupboxConfigSudoku}/>
      <PopupboxContainer {...popupboxConfigQuiz}/>
      <PopupboxContainer {...popupboxConfigDashboard}/>
      <PopupboxContainer {...popupboxConfigCharityhub}/>
    </div>
  )}

export default Portfolio;