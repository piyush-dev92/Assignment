import React from 'react';
import {  BrowserRouter as Router,  Link } from "react-router-dom";
import './Header.css';

const Header = ()=>{
	return (
		<Router>
			<div className="header">
				<div className="container-section">
					<div className="header-right">
						<Link to="">
						<span>Upcoming</span><br/>
						Live Consultation</Link>
						<Link to="">Buy Plans</Link>
						<Link to="">View Plans</Link>
						<Link to="">Login</Link>
					</div>
				</div>
			</div>
		</Router>
		)
}
export default Header;
