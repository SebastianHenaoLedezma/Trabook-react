import React from 'react'
import "./styles/vacation.css";

import Arrows from './Arrows';
import CardVacation from './CardVacation';
import palmsImg from '../assets/images/Vacation/palms.svg';

const Vacation = () => {
  return (
    <div className="home5 flex  flex-col justify-center py-10">
        <div className='flex justify-center items-center'>
            <div className='info-vacation'>
                <div>
                    <h2 className='text-6xl font-bold pb-10'>Best <span>vacation plan</span></h2>
                    <p className='text-xl text-center'>Plan your perfect vacation with our travel agency. <br></br> Choose among hundreds of all-inclusive offers!</p>
                </div>
                <img className='img-palms' src={palmsImg} alt="" />   
            </div>
        </div>
        
        <div className='arrows2 flex justify-end'>
            <Arrows />
        </div>
        <CardVacation />
    </div>
  )
}

export default Vacation