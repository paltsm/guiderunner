import { Link } from 'react-router-dom';
import { Component } from "react";


export default class Header extends Component<{}>{
	render() {
		return (
			<header id='header'>
				<nav id='navbar'>
					<Link to="/">home</Link>
					<Link to="/games">games</Link>
					<Link to="/news">news</Link>
				</nav>
				<button id='nav-btn' type='button'>+</button>
			</header>
	  );
	}
	
}

