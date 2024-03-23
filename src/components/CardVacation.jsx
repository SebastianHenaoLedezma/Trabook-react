import React from 'react'
import "./styles/cardVacation.css";

import RomeVacation from '../assets/images/cards/card-vacation-1.png';
import LondonVacation from '../assets/images/cards/card-vacation-2.png';
import Rome2Vacation from '../assets/images/cards/card-vacation-3.png';
import RateIcon from '../assets/images/cards/star -cards.png';
import iconNavegation from '../assets/images/cards/Navigation-card.png'

const CardVacation = () => {
    const list = [
        {
          city: "Rome",
          country: "Italy",
          img: RomeVacation,
          price: "5,42",
          rate: "4.8",
          time: "10",
        },
        {
          city: "London",
          country: "UK",
          img: LondonVacation,
          price: "2,42",
          rate: "4.5",
          time: "10",
        },
        {
          city: "Rome",
          country: "Italy",
          img: Rome2Vacation,
          price: "5,42",
          rate: "4.4",
          time: "10",
        },
      ];
  

  return (
    <div>
        <div className="CardVaction">
            <div className="gap-2 grid grid-cols-2 py-1">
                {list.map((item, index) => (
                    <div className="Card mx-2" key={index}>
                        <div className="CardBody overflow-visible">
                            <img
                                className="w-full"
                                alt={item.city}
                                src={item.img}
                            />
                        </div>
                        <div className="CardFooter text-small justify-between pt-10 w-full flex-col">
                            <div className="flex w-full justify-between items-center">
                                <b className="text-2xl">{item.city}, {item.country}</b>
                                <div className="justify-end flex">
                                    <p className="price text-2xl ml-3 font-bold">${item.price} K</p>
                                </div>
                            </div>
                            <div className="flex flex-row w-full justify-between py-4 items-center">
                            <div className="flex flex-row items-center">
                                <img
                                src={iconNavegation}
                                alt="Icono de navegación"
                                />
                                <h2 className="text-lg ml-2">{item.time} Days Trip</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <img
                                src={RateIcon}
                                alt="Icono de rate"
                                />
                                <p className="rate text-xl ml-3">{item.rate}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CardVacation