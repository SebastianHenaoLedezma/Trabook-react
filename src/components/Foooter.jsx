import React from 'react'
import "./styles/footer.css";

import logo from '../assets/images/logo.png'
import logoFB from '../assets/images/footer/icon-FB.svg'
import logoIG from '../assets/images/footer/icon-IG.svg'
import logoX from '../assets/images/footer/icon-X.svg'


const Foooter = () => {
  return (
    <footer className="footer">
        <div className="footer-container text-start ">
            <div className="footer-text">
                <div className="social">
                    <a href="" className="logoFooter"><img src={logo} alt="Logo de Trabook"/></a>
                    <p>
                        Book your trip in minute, get full
                        Control for much longer.
                    </p>
                    <div className='footer-links'>
                        <a href=""><img src={logoFB} alt="img-icno-faceboock"/></a>
                        <a href=""><img src={logoIG} alt="img-icno-instagram"/></a>
                        <a href=""><img src={logoX} alt="img-icno-x"/></a>
                    </div>
                </div>
            </div>

            <div className='footer-info'>
                <div className="footer-content">
                    <h3>Company</h3>
                    <ol>
                        <li><a href="#about" className="text-decoration-none">About</a></li>
                        <li><a href="#careers" className="text-decoration-none">Careers</a></li>
                        <li><a href="#logistic" className="text-decoration-none">Logistic</a></li>
                        <li><a href="#privacy-policy" className="text-decoration-none">Privacy & Policy</a></li>
                    </ol>
                </div>
            
                <div className="footer-content">
                    <h3>Contact</h3>
                    <ol>
                        <li><a href="#help-faq" className="text-decoration-none">Help/FAQ</a></li>
                        <li><a href="#press" className="text-decoration-none">Press</a></li>
                        <li><a href="#affiliates" className="text-decoration-none">Affiliates</a></li>
                    </ol>
                </div>
            
                <div className="footer-content">
                    <h3>More</h3>
                    <ol>
                        <li><a href="#press-center" className="text-decoration-none">Press Centre</a></li>
                        <li><a href="#our-blog" className="text-decoration-none">Our Blog</a></li>
                        <li><a href="#low-fare-trip" className="text-decoration-none">Low Fare Trip</a></li>
                    </ol>
                </div>
            </div>
        </div>
        <hr />
        <div className="copy row" >
            <p>Copyright, Trabook 2022. All rights reserved.</p>
            <a href="" className="col text-end">Terms & Conditions</a>
        </div>
    </footer>
  )
}

export default Foooter