import React from 'react'
import NavBar from '../components/NavBar'
import home_style from '../styles/home_style.css'
import { Link } from 'react-router-dom'

class Home extends React.Component{
 
 render(){
     return(<>
        <NavBar />
        <section id="form-container" role="banner">
            <div className="welcome_text">
                <h1>
                    Bienvenido a uno de los mejores gestores de correos electronicos
                </h1>
                <div>
                    <Link to="/login" className="center">
                        Iniciar Sesión
                    </Link>
                    <Link to="/signup" className="center">
                        Registrarse
                    </Link>
                </div>
            </div>
        </section>
        <section id="features">
        <div class="features-container">
            <svg class="svg-image" viewBox="0 0 24 24">
                <path fill="rgb(176,69,154, 0.75)" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
            </svg>
            <div class="features-text">
                <h3>Administra tus correos de forma sencilla.</h3>
                <p>
                    Con willay podrás administrar tus correos tan facil como respirar.
                </p>
            </div>
        </div>
        <div class="features-container">
            <svg class="svg-image" viewBox="0 0 24 24">
                <path fill="rgb(176,69,154, 0.75)" d="M20 19.88V22L18.2 20.83L13.41 11.83A4.94 4.94 0 0 0 15.19 10.83M15 7A3 3 0 0 1 12 10A3.27 3.27 0 0 1 11.56 10L5.8 20.83L4 22V19.88L9.79 9A3 3 0 0 1 12 4V2A1 1 0 0 1 13 3V4.18A3 3 0 0 1 15 7M13 7A1 1 0 1 0 12 8A1 1 0 0 0 13 7M4.22 10L6 11.8L4.56 14.56L2.1 12.1M12 17.76L10.5 16.25L9 19L12 22L15 19L13.53 16.23M19.78 10L18 11.8L19.5 14.56L21.9 12.1Z" />
            </svg>
            <div class="features-text">
                <h3>Planifica y Organizate con tus contactos</h3>
                <p>
                    Willay permite una mejor eficacia a la hora de planificar reuniones.
                </p>
            </div>
        </div>
        <div class="features-container">
            <svg class="svg-image" viewBox="0 0 24 24">
                <path fill="rgb(176,69,154, 0.75)" d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z" />
            </svg>
            <div class="features-text">
                <h3>Soporte Garantizado</h3>
                <p>
                    El equipo de Willay esta constantemente trabajando en la mejora de nuestros servicios, con el fin de darle la mejor experiencia a nuestros usuarios.
                </p>
            </div>
        </div>
        </section>
        <section ></section>
     </>)
 }
}

export default Home;