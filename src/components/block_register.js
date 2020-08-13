import React from 'react'
import logo_profile from "../profile.png"
import { Link } from 'react-router-dom';

const block_register = (props) =>{
    return(
        <div className="login_box_primary">
            <img className="img_sigin" src={logo_profile} width="128" height="128"/>  
            <div className="login_box login_box_secundary">
                {
                    props.login == 0 ?
                        <>
                            <input placeholder="Correo Electronico"></input>
                            <input placeholder="Contraseña" type="password"></input>
                            <button className="button_sigin">Iniciar Sesión</button>
                        </> 
                    :
                    <>
                        <input placeholder="Nombre"></input>
                        <input placeholder="Apellido"></input>
                        <input placeholder="Correo Electronico"></input>
                        <input placeholder="Contraseña" type="password"></input>
                        <input placeholder="Confirmar contraseña" type="password"></input>
                        <button className="button_sigin">Registrarse</button>
                    </>
                }
            </div>
            {
                props.login == 0?
                    <div className="login_box login_box_secundary2">
                        <label>New to Willay?</label>
                        <Link to='/signup' className="button_register"> Registrarse</Link> 
                    </div>
                : null 
            }
                       
        </div> 
    )
}

export default block_register