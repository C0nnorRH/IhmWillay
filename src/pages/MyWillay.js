import React from 'react';
import myw_style from '../styles/myw_style.css';
import LeftBar from '../components/leftbar'
import ExampleComponent from '../components/exampleComponent'
import { Link } from 'react-router-dom';
import usersMail from "../data/usersMail.json";

class MyWillay  extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			userdata: this.props.user,
			is_active: true,
			my_mails:[]
		}
	}

	renderCheck(is_active){
		return(
			<svg class="eup-img" viewBox="0 0 22 22">
				{
					!is_active?
					<path fill="black" d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,5V19H5V5H19M10,17L6,13L7.41,11.58L10,14.17L16.59,7.58L18,9" />
					:
					<path fill="black" d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" />
				}
			</svg>
		)
	}

	updateCheck(){
		if(this.state.is_active){
			this.setState({is_active: false})
		}
		else{
			this.setState({is_active: true})
		}
	}

	renderMails(){
		return usersMail.map((mail, i) => {
			if(mail.to_user == 1){
				console.log('test');
				return(
					<div class = "mail-detail-container">
						<button onClick={() =>{this.updateCheck()}} class="eup-container">
									{this.renderCheck(this.state.is_active)}
						</button>
						<text id="msubject">{mail.subject}</text>
						<text id="mfrom">{'De: '+ mail.from_user+'('+mail.email+')'}</text>
						<button id="mbut">Leer</button>
					</div>
				)
			}
		})
	}

	renderText(){
		return usersMail.map((mail, i) => {
			if(mail.to_user == 1){
				console.log('test');
				return(
					<div id="info-box">
						<text>{'De: '+ mail.from_user+'('+mail.email+')'}</text>
						<text>{'Asunto: '+ mail.subject}</text>
						<text>{'Para: '+ mail.to_user}</text>
						<br/>
						<p>{mail.message}</p>
					</div>
				)
			}
		})
	}
	

	render(){
		return(
			<div id="mw-container">
					<LeftBar/>
					<div id="mail-ui">
							<div id="mailp-header">
									<h2><text id="w-letter">W</text><text id="i-letter">i</text><text class="l-letter">l</text><text class="l-letter">l</text><text class="l-letter">a</text><text class="l-letter">y</text></h2>
							</div>
							<div id="email-container">
									<div id="container-up">
										<button onClick={() =>{this.updateCheck()}} class="eup-container">
													{this.renderCheck(this.state.is_active)}
										</button>
										<button class="eup-container">
													<svg class="eup-img" viewBox="0 0 22 22">
															<path fill="black" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
													</svg>
										</button>
										<button class="eup-container">
													<svg class="eup-img" viewBox="0 0 22 22">
															<path fill="black" d="M3 4C1.89 4 1 4.89 1 6V18C1 19.11 1.9 20 3 20H13.5A6.5 6.5 0 0 1 13 17.5A6.5 6.5 0 0 1 19.5 11A6.5 6.5 0 0 1 21 11.18V6C21 4.89 20.1 4 19 4H3M3 6L11 11L19 6V8L11 13L3 8V6M19 12L16.75 14.25L19 16.5V15C20.38 15 21.5 16.12 21.5 17.5C21.5 17.9 21.41 18.28 21.24 18.62L22.33 19.71C22.75 19.08 23 18.32 23 17.5C23 15.29 21.21 13.5 19 13.5V12M15.67 15.29C15.25 15.92 15 16.68 15 17.5C15 19.71 16.79 21.5 19 21.5V23L21.25 20.75L19 18.5V20C17.62 20 16.5 18.88 16.5 17.5C16.5 17.1 16.59 16.72 16.76 16.38L15.67 15.29Z" />
													</svg>
										</button>
										<div id="mail-serach-box">
										<input placeholder="Buscar..." type="text"></input>
										<button class="eup-container">
													<svg class="eup-img" viewBox="0 0 22 22">
															<path fill="black" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
													</svg>
										</button>
										<button class="eup-container" id="mail-search-options">
													<svg class="eup-img" viewBox="0 0 22 22">
															<path fill="black" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
													</svg>
										</button>
										</div>
									</div>
									<div id='email-lister'>
											{this.renderMails()}
									</div>
							</div>
							<div id="info-ui">
								<h3>Información del Correo</h3>
								<div id='email-info'>
										{this.renderText()}
								</div>
							</div>
					</div>
			</div>
		);
	}
}

export default MyWillay;