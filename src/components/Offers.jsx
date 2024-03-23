import React from 'react'
import "./styles/offers.css";

import CardCity from './CardCity'
import Arrows from './Arrows';

const Offers = () => {
  return (
    <div>
        <div className="home4 w-full flex justify-center items-center flex-col text-center py-10 px-2">
            <h2 className='text-6xl font-bold py-10'>Exclusive <span>deals & discounts</span></h2>
            <p className='text-xl'>Discover our fantastic early booking discounts & <br></br> start planning your journey.</p>
            <div>
                <div className="CardBody items-center w-full">
                    <CardCity />
                </div>

                <div className='Arrows-container'>
                    <Arrows />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers