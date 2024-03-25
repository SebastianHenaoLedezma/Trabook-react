import React, { useState } from 'react'

import "./styles/login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    //   const email = "henao7730@gmail.com";
    //   const password = "123456789";
    
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Correo electrónico:", email);
            console.log("Contraseña:", password);
        };

        const navigate = useNavigate();

        const handleCloseClick = () => {
          navigate('/');
        };
    
        return (
            <>
            <div className='login'>
                <div className="container">
                    <span className='x' onClick={handleCloseClick}>X</span>
                    <div className="info">
                        <h2>Trabook</h2>
                        <p>
                            ¡Bienvenido! Por favor, inicia sesión para que comience su emocionante viaje con nosotros.
                        </p>
                    </div>
                    <div className="form">
                        <h2>Iniciar <span>Sesión</span></h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Correo Electrónico:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn">
                            Iniciar Sesión
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            </>
        );
    }

export default Login