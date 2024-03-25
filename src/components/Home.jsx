import React from 'react'
import "./styles/home.css";
import Header from './Header'
// Importacion de imagenes
import imagenFinal from '../assets/images/Portada-final.webp';
import flecha from '../assets/images/Flecha.svg';
import ThingsToDo from './ThingsToDo';
import Offers from './Offers';
import Vacation from './Vacation';
import PeopleAboutUs from './PeopleAboutUs';
import Blog from './Blog';
import Suscribe from './Suscribe';
import Foooter from './Foooter';

const Home = () => {
  return (
    <>
        <Header />
        <section className='home-container'>
            <div className="home w-full ">
                <div className='home1 w-full flex justify-center items-center'>
                    <div className='home1-container'>
                        <div className='home1-left'>
                            <h1 className='text-6xl'>Get started your <br></br> exciting<br></br> <span className=''>journey</span> with us.</h1>
                            <p className='text-2xl my-10'>A Team of experienced tourism professionals <br></br> will provide you with the best advice and tips for <br></br> your desire place.</p>
                            <button>Discover Now</button>
                        </div>
                        <div className='home1-right'>
                            <div>
                            <img src={imagenFinal} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="home2 grid justify-center items-center w-full">
                        <div className='container-home2 grid grid-cols-4 justify-between p-10'>
                            <div className='item'>
                                <h3 className='font-medium'>Location <img src={flecha} alt="" /></h3>
                                <p className='font-regular'>Where are you going</p>
                            </div>
                            <div className='item'>
                                <h3 className='font-medium'>Date <img src={flecha} alt="" /></h3>
                                <p className='font-regular'>When you will go</p>
                            </div>
                            <div className='item'>
                                <h3 className='font-medium'>Guest <img src={flecha} alt="" /></h3>
                                <p className='font-regular'>Number of guests</p>
                            </div>
                            <div className='item'>
                                <button className='w-full px-1'>Explore Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <ThingsToDo />
                <Offers />
                <Vacation />
                <PeopleAboutUs />
                <Blog/>
                <Suscribe />
                <Foooter />
            </div>
        </section>
    </>
  )
}

export default Home