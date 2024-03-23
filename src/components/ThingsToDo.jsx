import React from 'react'
import "./styles/thingsToDo.css";
import iconcard1 from '../assets/images/ToDo/card-indi.png';
import iconcard2 from '../assets/images/ToDo/card-indi-2.png';
import iconcard3 from '../assets/images/ToDo/card-indi-3.png';
import planeImg from '../assets/images/ToDo/aviones.webp';

const ThingsToDo = () => {
    return (
        <section className='todo-container'>
            <div className="todo1 flex justify-center items-center py-10">
                <div className='info'>
                    <div className='container-plane'>
                        <div>
                            <h2 className='text-6xl font-bold py-10 tittle'>Things you need <span>to do</span></h2>
                        </div>
                        <div>
                            <p className='text-center pb-20 text-xl'>We ensure that you’ll embark on a perfectly planned, <br></br> safe vacation at a price you can afford.</p>
                        </div>
                    </div>
                    <img src={planeImg} alt="Imagen de aviones para el fondo" />
                </div>
                <div className='grid grid-cols-3 cards-container'>
                    <div className='cards1 grid m-3 p-4'>
                        <img src={iconcard1} alt="" className='py-3'/>
                        <h2 className='text-2xl font-bold py-4'>Sign Up</h2>
                        <p className='text-base w-auto'>Completes all the work associated with planning and processing</p>
                    </div>
                    <div className='cards1 grid m-3 p-4'>
                        <img src={iconcard2} alt="" className='py-3'/>
                        <h2 className='text-2xl  font-bold py-4'>Worth of Money</h2>
                        <p className='text-base w-auto'>After successful access then book from exclusive deals & pricing</p>
                    </div>
                    <div className='cards1 grid m-3 p-4'>
                        <img src={iconcard3} alt="" className='py-3'/>
                        <h2 className='text-2xl  font-bold py-4'>Exciting Travel</h2>
                        <p className='text-base w-auto'>Start and explore a wide range of exciting travel experience.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThingsToDo