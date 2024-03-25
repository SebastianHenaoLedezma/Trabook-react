import React, { useState } from 'react'
import "./styles/cardComments.css";
const CardComments = ({ item }) => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

  return (
    <>
        <div className='card-comments-container'>
            <div className={`card-comments ${clicked ? 'active' : ''}`} onClick={handleClick}>
                <div className="Client">
                    <div className="client_img">
                        <img src={item.photo} alt="User photo" className="img-top-left"/>
                    </div>
                    <div className="client_text">
                        <p>“{item.text}”</p>
                        <div className="client_name">
                            <h5>{item.name}</h5>
                            <p>{item.job}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardComments