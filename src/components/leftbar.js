import React from 'react';
import '../styles/leftbar_style.css';

class LeftBar extends React.Component{
   render(){
       return(
           <div id='w-container'>
               <div id="profile-img-container">
                    <img id="profile-img" src="https://cdn.pixabay.com/photo/2018/01/03/21/31/portrait-3059314_960_720.jpg" alt="FotoPerfil"/>
               </div>
               <div id="barText">
                    <h4>Juan Brito</h4>
                    <text>j.brito@willay.com</text>
               </div>
               <div id="b-container">
                    <button class="b-bar">
                        <text>Recibido</text>
                        <svg class="header-img" viewBox="0 0 24 24">
                            <path fill="white" d="M2 6V20H20V22H2C.895 22 0 21.11 0 20V6H2M24 4C24 2.9 23.1 2 22 2H6C4.9 2 4 2.9 4 4V16C4 17.1 4.9 18 6 18H22C23.1 18 24 17.1 24 16V4M22 4L14 9L6 4H22M22 16H6V6L14 11L22 6V16Z" />
                        </svg>
                    </button>

                    <button class="b-bar">
                        <text>Enviados</text>
                        <svg class="header-img" viewBox="0 0 24 24">
                            <path fill="white" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                        </svg>
                    </button>

                    <button class="b-bar">
                        <text>Borradores</text>
                        <svg class="header-img" viewBox="0 0 24 24">
                            <path fill="white" d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" />
                        </svg>
                    </button>

                    <button class="b-bar">
                        <text>SPAM</text>
                        <svg class="header-img" viewBox="0 0 24 24">
                            <path fill="white" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
                        </svg>
                    </button>

                    <button class="b-bar">
                        <text>Configuraciones</text>
                        <svg class="header-img" viewBox="0 0 24 24">
                            <path fill="white" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                        </svg>
                    </button>
                    
               </div>
           </div>
       )
   }
}

export default LeftBar;