import React from "react";
import "./styles/suscribe.css";

import email from '../assets/images/suscribe/email.svg';
import ondas from '../assets/images/suscribe/ondas.png';
import palms from '../assets/images/suscribe/palmeras.png';


const Suscribe = () => {
  return (
    <div className="newsletter">
        <div className="palmeras">
            <img src={palms} alt="Imagen de palmeras" />
        </div>

        <div className="container-subscribe mt-3 flex">
            <h3 className="text-center">
            Subscribe and get exclusive deals & offers
            </h3>
            <div className="container">
                <div className="">
                    <form className="">
                        <div className="form-group">
                            <div className="from-text">
                                <img
                                    src={email}
                                    className=""
                                    alt="Logo de email"
                                />
                                <input
                                    type="email"
                                    id="inputEmail"
                                    className="form-control"
                                    placeholder="Enter your mail"
                                />
                            </div>
                            <button type="submit" className="btn-subscribe">
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <img src={ondas} alt="Ondas decorativas" className="olas"/>
    </div>
  );
};

export default Suscribe;
