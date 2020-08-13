import React from 'react'
import Block from '../components/block_register'
import { Component } from 'react'
import "../styles/login_style.css"


class Login extends React.Component{
 render(){
     return(
     <div className="container">
        <h1>Willay</h1>
        <Block />       
     </div>
     )
 }
}

export default Login;