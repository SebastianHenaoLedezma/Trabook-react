import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles/header.css";
import logotipo from '../assets/images/logo.png'
import Login from './Login';

const Header = () => {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
      setClicked(!clicked)
  }


  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
      <nav className='navbar'>
        <div className='container-fluid'>
          <a href='' alt="">
            <img src={logotipo} alt="Loto trabook" className='logo'/>
          </a>
          <div className='menuMobile' onClick={handleClick}>
            <div className={`burger ${clicked ? 'open' : ''}`}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>

          <div className={`navbar-container ${clicked ? 'active' : ''}`}>
            <div className='navbar-menu'>
              <ul className='links'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Destination</a></li>
                <li><a href="#">Tour</a></li>
                <li><a href="#">Blog</a></li>        
              </ul>
            </div>
            <div className='buttons'>
              <button className='button-login'>Login</button>
              <button className='button-singup' onClick={handleLoginClick}>Sing Up</button>
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Header