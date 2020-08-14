import React from 'react';
import '../styles/myw_style.css';
import LeftBar from '../components/leftbar'
import { Link } from 'react-router-dom';
import users from "../data/users.json";

class MyWillay  extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			userdata: this.props.user
		}
	}
	

	render(){
		const userInfo = this.state.userdata;
		console.log("HOOOOOLA:",userInfo)
		return(
			<div id="mw-container">
					<LeftBar/>
					<div id="mail-ui">
							<div id="mailp-header">
									<h2><text id="w-letter">W</text><text id="i-letter">i</text><text class="l-letter">l</text><text class="l-letter">l</text><text class="l-letter">a</text><text class="l-letter">y</text></h2>
							</div>
							<div id="email-container">
									<div>
											<text>lalalala</text>
									</div>
									<div id='email-lister'>
											<text>lalala</text>
									</div>
							</div>
							<div>
							</div>
					</div>
			</div>
		);
	}
}

export default MyWillay;