import { Link } from 'react-router-dom';
import { Component } from "react";


export default class Header extends Component<{}>{
	// const hamburger=require("guiderunner_frontend\public\burger-bar.png")
	render() {
		return (
			<header id='header'>
				<nav id='navbar'>
					<Link to="/">home</Link>
					<Link to="/games">games</Link>
					<Link to="/news">news</Link>
					<Link to="/login">login</Link>
				</nav>
				<button id='nav-btn' type='button'><img src="/burger-bar.png" alt="menu icon" id='menu-icon' /></button>
			</header>
	  );
	}
	
}

