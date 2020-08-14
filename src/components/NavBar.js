import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';


class NavBar  extends React.Component{
   render(){
       return(
        <div id="header">
        <div id="header-img-container">
            <svg class="header-img" viewBox="0 0 24 24">
                <path fill="black" d="M2 6V20H20V22H2C.895 22 0 21.11 0 20V6H2M24 4C24 2.9 23.1 2 22 2H6C4.9 2 4 2.9 4 4V16C4 17.1 4.9 18 6 18H22C23.1 18 24 17.1 24 16V4M22 4L14 9L6 4H22M22 16H6V6L14 11L22 6V16Z" />
            </svg>
        </div>
        
        <div id="header-title" className="headerpro">
            <h2><text id="w-letter">W</text><text id="i-letter">i</text><text class="l-letter">l</text><text class="l-letter">l</text><text class="l-letter">a</text><text class="l-letter">y</text></h2>
        </div>
        <nav id="nav-bar" >
            <Link to='/login' class="nav-link opcs"> Iniciar Sesión</Link> 
            <Link to='/signup' class="nav-link opcs"> Registrarse</Link>         
        </nav>
        </div>
       );
   }
}

export default NavBar;