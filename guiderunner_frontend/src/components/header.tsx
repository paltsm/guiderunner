import { Link } from 'react-router-dom';
import { Component } from "react";



export default class Header extends Component<{}>{
	toggleheader(){
		const HEADER=document.getElementById('header')
		const NAVBAR=document.getElementById("navbar")
		if(HEADER?.classList.contains('open')){
			HEADER.classList.remove('open')
			NAVBAR?.classList.remove('open')
		}else{
			HEADER?.classList.add('open')
			NAVBAR?.classList.add('open')
		}
	}
	render() {
		return (<>
			<header id='header'>
				<nav id='navbar'>
					<Link to="/">home</Link>
					<Link to="/games">games</Link>
					<Link to="/news">news</Link>
				</nav>
				<div>
					<Link to="/login" id='loginbutton'>login</Link>
					<button id='nav-btn' type='button' onClick={this.toggleheader}><img src="/burger-bar.png" alt="menu icon" id='menu-icon' /></button>
				</div>
			</header>			
		</>);
	}
	
}