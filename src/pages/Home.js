import React from 'react'
import NavBar from '../components/NavBar'
import home_style from '../styles/home_style.css'
import { Link } from 'react-router-dom'

class Home extends React.Component{
 
 render(){
     return(<>
        <NavBar />
        <section id="form-container" role="banner">
            <h1 className="welcome_text">
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
        </section>
        <section id="features">
        <div class="features-container">
            <svg class="svg-image" viewBox="0 0 24 24">
                <path fill="rgb(176,69,154, 0.75)" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
            </svg>
            <div class="features-text">
                <h4>Administra tus correos de forma sencilla.</h4>
                <p>
                    Con willay podrás administrar tus correos tan facil como respirar.
                </p>
            </div>
        </div>
        <div class="features-container">
            <svg class="svg-image" viewBox="0 0 24 24">
                <path fill="rgb(176,69,154, 0.75)" d="M18.5 18.5C19.04 18.5 19.5 18.96 19.5 19.5S19.04 20.5 18.5 20.5H6.5C5.96 20.5 5.5 20.04 5.5 19.5S5.96 18.5 6.5 18.5H18.5M18.5 17H6.5C5.13 17 4 18.13 4 19.5S5.13 22 6.5 22H18.5C19.88 22 21 20.88 21 19.5S19.88 17 18.5 17M21 11H18V7H13L10 11V16H22L21 11M11.54 11L13.5 8.5H16V11H11.54M9.76 3.41L4.76 2L2 11.83C1.66 13.11 2.41 14.44 3.7 14.8L4.86 15.12L8.15 12.29L4.27 11.21L6.15 4.46L8.94 5.24C9.5 5.53 10.71 6.34 11.47 7.37L12.5 6H12.94C11.68 4.41 9.85 3.46 9.76 3.41Z" />
            </svg>
            <div class="features-text">
                <h4>Second Feature</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt
                    ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
        <div class="features-container">
            <svg class="svg-image" viewBox="0 0 24 24">
                <path fill="rgb(176,69,154, 0.75)" d="M20 19.88V22L18.2 20.83L13.41 11.83A4.94 4.94 0 0 0 15.19 10.83M15 7A3 3 0 0 1 12 10A3.27 3.27 0 0 1 11.56 10L5.8 20.83L4 22V19.88L9.79 9A3 3 0 0 1 12 4V2A1 1 0 0 1 13 3V4.18A3 3 0 0 1 15 7M13 7A1 1 0 1 0 12 8A1 1 0 0 0 13 7M4.22 10L6 11.8L4.56 14.56L2.1 12.1M12 17.76L10.5 16.25L9 19L12 22L15 19L13.53 16.23M19.78 10L18 11.8L19.5 14.56L21.9 12.1Z" />
            </svg>
            <div class="features-text">
                <h4>Third Feature</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt
                    ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
        <div class="features-container">
            <svg class="svg-image" viewBox="0 0 24 24">
                <path fill="rgb(176,69,154, 0.75)" d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z" />
            </svg>
            <div class="features-text">
                <h4>Fourth Feature</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt
                    ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
        </section>
        <section ></section>
     </>)
 }
}

export default Home;