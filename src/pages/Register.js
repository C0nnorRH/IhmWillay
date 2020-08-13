import React from 'react'
import Block from '../components/block_register'
import { Component } from 'react'
import "../styles/login_style.css"
import { Link } from 'react-router-dom';


class Register extends React.Component{
 render(){
     return(
     <div className="container">
        <div id="header-title">
            <Link to='/home' class="nav-link"> 
                <h2><text id="w-letter">W</text><text id="i-letter">i</text><text class="l-letter">l</text><text class="l-letter">l</text><text class="l-letter">a</text><text class="l-letter">y</text></h2>
            </Link>
        </div>
        <Block login={1}/>       
     </div>
     )
 }
}

export default Register;