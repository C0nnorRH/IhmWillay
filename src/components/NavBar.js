import React from 'react';
import '../styles/header_style.css';
import { Link } from 'react-router-dom';

class NavBar  extends React.Component{
   render(){
       return(
           <nav id='headerContainer'>
               <div id="headerLogo">

               </div>
               <div id="headerTitle">
                   <h1>Willay</h1>
               </div>
               <div id="headerOptions">
                <Link
                    to='/login'
                >
                    Login
                </Link>
               </div>
           </nav>
       )
   }
}

export default NavBar;