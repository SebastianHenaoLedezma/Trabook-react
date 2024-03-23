import React from 'react'
import "./styles/arrows.css";

import iconArrowLeft from '../assets/images/cards/arrow-left.png'
import iconArrowRight from '../assets/images/cards/arrow-right.png'

const Arrows = () => {
  return (
    <>
        <div className='arrows flex justify-center items-center'>
            <button className="arrow arrow-left">
                <img 
                    src={iconArrowLeft} 
                    alt="" 
                />
            </button>

            <button className="arrow-right arrow ">
                <img 
                    src={iconArrowRight} 
                    alt="" 
                />
            </button>
        </div>
    </>
  )
}

export default Arrows