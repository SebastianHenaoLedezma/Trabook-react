  /* eslint-disable no-unused-vars */
  import React from "react";
  import "./styles/cardCity.css";
  import Madrid from '../assets/images/cards/card-exclusive-1.png';
  import Firenze from '../assets/images/cards/card-exclusive-2.png';
  import Paris from '../assets/images/cards/card-exclusive-3.png';
  import London from '../assets/images/cards/card-exclusive-4.png';
  import RateIcon from '../assets/images/cards/star -cards.png';
  import LocateIcon from '../assets/images/cards/ubication-cards.png'


  export default function CardCity() {
    const list = [
      {
        title: "Madrid",
        country: "Spain",
        img: Madrid,
        price: "950",
        sale: "850",
        rate: "4.8",
      },
      {
        title: "Firenze",
        country: "Italy",
        img: Firenze,
        price: "950",
        sale: "750",
        rate: "4.5",
      },
      {
        title: "Paris",
        country: "France",
        img: Paris,
        price: "699",
        sale: "599",
        rate: "4.4",
      },
      {
        title: "London",
        country: "UK",
        img: London,
        price: "950",
        sale: "850",
        rate: "4.8",
      },
    ];

    return (
      <div className="card-container">
        <div className="gap-2 grid grid-cols-2 py-20">
          {list.map((item, index) => (
            <div className="Card mx-2" key={index}>
              <div className="figure overflow-visible p-0">
                <img
                  className="w-full"
                  src={item.img}
                  alt={item.title}
                />
                <div className="container-btn">
                  <button className="btn-booking" onClick={() => console.log("item pressed")}>Book now</button>
                </div>
              </div>
              <div className="CardFooter text-small justify-between pt-10 w-full flex-col">
                <div className="card-title flex w-full justify-between items-center">
                  <b className="text-2xl">{item.title}</b>
                  <div className="justify-end w-full flex">
                    <img
                      src={RateIcon}
                      alt=""
                    />
                    <p className="rate text-xl ml-3">{item.rate}</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between w-full py-4 items-center">
                  <div className="flex flex-row items-center">
                    <img src={LocateIcon} alt="" />
                    <h2 className="text-lg ml-2">{item.country}</h2>
                  </div>
                  <div className="flex flex-row items-center">
                    <p className="price text-xl ml-3">$ {item.price}</p>
                    <p className="sale text-2xl ml-3 font-bold">$ {item.sale}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }