import React from 'react'
import AchievementsCarousel from './AchievementsCarousel'

const Achievements = () => {
  return (
    <div id='achievements'>
        <h1 className='text-uppercase text-center py-5'>Achievements</h1>
        <div className='container'>
            <div className='achievements-content'>
                <AchievementsCarousel />
            </div>
        </div>
    </div>
  )
}

export default Achievements