import React, { useEffect, useState } from 'react'
import "./styles/blog.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


import CardBlog from './CardBlog';
import Tour1 from '../assets/images/Blog/card_update_1.png';
import Tour2 from '../assets/images/Blog/card_update_2.png';
import Tour3 from '../assets/images/Blog/card_update_3.png';
import Tour4 from '../assets/images/Blog/card_update_4.png';

const Blog = () => {
    
    const [windowsSize, setWindowsSize] = useState(window.innerWidth)
    
    useEffect(() => {
        const handleResize = () => {
            setWindowsSize(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Limpia el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []) // Este efecto solo se ejecuta una vez al montar el componente
    
    // controlamos el numero para la cantidad de cars que se van a mostrar
    let number = 4;

    if (windowsSize <= 1275 & windowsSize>890) {
        number = 3
    }else if (windowsSize <= 890 & windowsSize > 600){
        number = 2
    }else if (windowsSize <= 600){
        number = 1
    }


    const blogContent = [
        {
          img: Tour1,
          text: "The Amazing Difference a Year of Travelling .",
          date: "July 27, 2021",
        },
        {
            img: Tour2,
            text: "Travel far enough, you meet yourself.",
            date: "July 27, 2021",
        },
        {
            img: Tour3,
            text: "How to Save Money While Visiting Africa .",
            date: "July 27, 2021",
        },
        {
            img: Tour4,
            text: "Reflections on 5 Months of Travel: Time to Hang",
            date: "July 27, 2021",
        },
        {
            img: Tour2,
            text: "Travel far enough, you meet yourself.",
            date: "July 27, 2021",
        },
        {
            img: Tour3,
            text: "How to Save Money While Visiting Africa .",
            date: "July 27, 2021",
        },
        {
            img: Tour4,
            text: "Reflections on 5 Months of Travel: Time to Hang",
            date: "July 27, 2021",
        },
        {
            img: Tour1,
            text: "The Amazing Difference a Year of Travelling .",
            date: "July 27, 2021",
          },
      ];
  return (
    <section className='blog'>
        <div className='blog-text'>
            <h3>Get update with <span>latest blog</span></h3>  
        </div>
        <div className='blog-content'>
                <Swiper
                    slidesPerView={number}
                    spaceBetween={30}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                > 
                {blogContent.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CardBlog item={item}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>

  )
}

export default Blog