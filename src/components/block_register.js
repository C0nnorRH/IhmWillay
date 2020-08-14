import React from 'react'
import logo_profile from "../profile.png"
import { Link } from 'react-router-dom';
import users from "../data/users.json"

const block_register = (props) =>{

    return(
        <div className="login_box_primary">
            <img className="img_sigin" src={logo_profile} alt="Imagen del Perfil" width="128" height="128"/>  
            <div className="login_box login_box_secundary">
                {
                    props.login == 0 ?
                        <>  
                            <label className="formlabel" for="email" >Correo Electronico</label>
                            <input id="email" placeholder="Correo Electronico"></input>
                            <label className="formlabel" for="pwd" >Contraseña</label>
                            <input id="pwd" placeholder="Contraseña" type="password"></input>
                            <Link to= "/MyWillay"className="button_sigin">Iniciar Sesión</Link>
                        </> 
                    :
                    <>
                        <label className="formlabel" for="Nombre" >Nombre</label>
                        <input id="Nombre" placeholder="Nombre"></input>
                        <label className="formlabel" for="apellido" >Apellido</label>
                        <input id="apellido" placeholder="Apellido"></input>
                        <label className="formlabel" for="email" >Correo Electronico</label>
                        <input id="email" placeholder="Correo Electronico"></input>
                        <label className="formlabel" for="pwd" >Contraseña</label>
                        <input id="pwd" placeholder="Contraseña" type="password"></input>
                        <label className="formlabel" for="repwd" >Confirmar contraseña</label>
                        <input id="repwd" placeholder="Confirmar contraseña" type="password"></input>
                        <button className="button_sigin">Registrarse</button>
                    </>
                }
            </div>
            {
                props.login == 0?
                    <div className="login_box login_box_secundary2" role="navigation">
                        <text>New to Willay?</text>
                        <Link to='/signup' className="button_register"> Registrarse</Link> 
                    </div>
                : null 
            }
                       
        </div> 
    )
}

export default block_register