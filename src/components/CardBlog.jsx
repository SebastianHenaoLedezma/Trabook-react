import React from 'react'
import "./styles/cardBlog.css";


const CardBlog = ({ item }) => {
  return (
    <div className='card-blog-container'>
        <div className="blog_card">
            <div className='blog-card-img'>
                <img src={item.img} alt="Foto del lugar"/>
            </div>
            <div className="indications">
                <div className="blog_text">
                    <h4>{item.text}</h4>
                </div>
                <div className="blog_top">
                    <h6>{item.date}</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardBlog