import React from 'react'
import "./styles/peopleAboutUs.css";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';


import Arrows from './Arrows';
import planeImg from '../assets/images/aboutUs/planes.svg';
import user from '../assets/images/aboutUs/user.png';
import CardComments from './CardComments';

const PeopleAboutUs = () => {

    const comments = [
        {
            photo: user,
            name: "Mike Taylor",
            job: "Lahore, Pakistan",
            text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
        },
        {
            photo: user,
            name: "Chris Thomas",
            job: "CEO or Red Button",
            text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
        },
        {
            photo: user,
            name: "Chris Thomas",
            job: "CEO or Red Button",
            text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
        },
        {
            photo: user,
            name: "Chris Thomas",
            job: "CEO or Red Button",
            text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
        },
      ];


  return (
    <>
        <div className="people_about_us">
            <div className="text">
                <h3>What people say <br /><span>about us.</span></h3>
                <p>Our Clients send us bunch of smilies with our services and we love them.</p>

                <div className="Arrows">
                    <Arrows />
                </div>
            </div>
                <img className='backgroundImg' src={planeImg} alt="Background planes"/>

            <div className='about-us-container-cardComments'>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    
                    {comments.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CardComments item={item}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
                        
        </div>
    </>
  )
}

export default PeopleAboutUs