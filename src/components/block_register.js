import React from 'react'
import logo_profile from "../profile.png"
const block_register = () =>{
    return(
        <div className="login_box_primary">
            <img className="img_sigin" src={logo_profile} width="128" height="128"/>  
            <div className="login_box login_box_secundary">
                <input placeholder="Correo Electronico"></input>
                <input placeholder="Contraseña"></input>
                <button className="button_sigin">Iniciar Sesión</button>
            </div>
            <div className="login_box login_box_secundary2">
                <label>New to Willay?</label>
                <a className="button_register">Registrarse</a>
            </div>            
        </div> 
    )
}

export default block_register