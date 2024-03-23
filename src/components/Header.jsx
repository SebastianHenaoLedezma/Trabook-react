import React, { useState } from 'react'
import "./styles/header.css";
import logotipo from '../assets/images/logo.png'
import MobileMenu from '../assets/components/mobileMenu'

const Header = () => {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
      setClicked(!clicked)
  }


  return (
    <>
      <nav className='navbar'>
        <div className='container-fluid'>
          <a href='' alt="">
            <img src={logotipo} alt="Loto trabook" className='logo'/>
          </a>
          <div className='navbar-menu'>
            <ul className={`links ${clicked ? 'active' : ''}`}>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Destination</a></li>
              <li><a href="#">Tour</a></li>
              <li><a href="#">Blog</a></li>        
            </ul>
          </div>

          <div className='buttons'>
            <button className='button-login'>Login</button>
            <button className='button-singup'>Sing Up</button>
          </div>

          <div className="menuMobile">
            <MobileMenu clicked={clicked} handleClick={handleClick} />
          </div>

          {/* Es el menu hamburguesa  */}
          <div className={`initial ${clicked ? 'active' : ''}`}></div>
        </div>
      </nav>
    </>
  )
}

export default Header