import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from "@fortawesome/free-solid-svg-icons";


const Education = () => {
  return (
    <div id='education'>
        <h1>Technical Experience</h1>
        <div className='py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-sm-6'>
                        <div className='box'>
                            <div className='circle'><FontAwesomeIcon icon={faAward} size="2x" /></div>
                            <h3>Code Institute</h3>
                            <p>Diploma in Full Stack Software Development</p>
                            <p>HTML | CSS | JavaScript | Python | Bootstrap | Git | Heroku</p>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <div className='box'>
                            <div className='circle'><FontAwesomeIcon icon={faAward} size="2x" /></div>
                            <h3>Code Institute</h3>
                            <p>Diploma in Full Stack Software Development</p>
                            <p>HTML | CSS | JavaScript | Python | Bootstrap | Git | Heroku</p>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <div className='box'>
                            <div className='circle'><FontAwesomeIcon icon={faAward} size="2x" /></div>
                            <h3>Code Institute</h3>
                            <p>Diploma in Full Stack Software Development</p>
                            <p>HTML | CSS | JavaScript | Python | Bootstrap | Git | Heroku</p>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <div className='box'>
                            <div className='circle'><FontAwesomeIcon icon={faAward} size="2x" /></div>
                            <h3>Code Institute</h3>
                            <p>Diploma in Full Stack Software Development</p>
                            <p>HTML | CSS | JavaScript | Python | Bootstrap | Git | Heroku</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Education