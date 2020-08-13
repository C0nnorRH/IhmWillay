import React from 'react'
import Header from '../components/header'
import { Component } from 'react'
import "../styles/login_style.css"

class Login extends React.Component{
 render(){
     return(<>
        <Header/>
        <div className="login_box_primary">
            <div className="login_box_secundary">
                <input placeholder="Correo Electronico"></input>
                <input placeholder="Contraseña"></input>
                <button>Iniciar Sesión</button>
            </div>
            <button>Registrarse</button>
        </div>        
     </>)
 }
}

export default Login;