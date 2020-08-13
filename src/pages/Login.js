import React from 'react'
import Header from '../components/header'
import { Component } from 'react'
import "../styles/login_style.css"
import logo_profile from "../profile.png"

class Login extends React.Component{
 render(){
     return(
     <div className="container">
        <h1>Willay</h1>
        <div className="login_box_primary">
            <div className="login_box_secundary">
                <img className="img_sigin" src={logo_profile} width="128" height="128"/>  
            
                <input placeholder="Correo Electronico"></input>
                <input placeholder="Contraseña"></input>
                <button className="button_sigin">Iniciar Sesión</button>
            </div>
            <div>
                <label>New to Willay?</label>
                <a className="button_register">Registrarse</a>
            </div>            
        </div>        
     </div>
     )
 }
}

export default Login;