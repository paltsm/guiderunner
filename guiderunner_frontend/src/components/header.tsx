import { Link } from 'react-router-dom';
import { Component } from "react";


interface State{
	id:number;
	username:string;
	email:string;
	token: string;
}

export default class Header extends Component<{},State>{
	constructor(props:{}){
		super(props);
		this.state={
			id:0,
			username:'',
			email:'',
			token: window.localStorage.getItem("token")||''
		}
		this.changestate()

	}

	getuser = async()=>{
		console.log(localStorage.getItem('token'))
		if(localStorage.getItem('token')!==null){
			let response=await fetch("http://localhost:3000/auth/finduser",{
				method:'POST',
				headers:{
					"Content-Type": "application/json",
					'Authorization': "Bearer " + this.state.token,
				},
			})

			console.log(response.status)

			const data=await response.json()
			return data
		}
		else{
			return null
		}
	}
	changestate=async()=>{
		let data=await this.getuser()
		if(data==null){
			return
		}
		this.setState({
			id: data.id,
			username: data.username,
			email: data.email
		})

	}

	logout=async()=>{
		let response=await fetch("http://localhost:3000/auth/logout",{
			method:'DELETE',
			headers:{
				"Content-Type": "application/json",
				'Authorization': "Bearer " + localStorage.getItem('token'),
			}
		})
		if(response.status===200){
			localStorage.removeItem('token')
			window.location.reload()
		}
	}

	toggleheader(){
		const HEADER=document.getElementById('header')
		const NAVBAR=document.getElementById("navbar")
		HEADER?.classList.toggle("open")
		NAVBAR?.classList.toggle("open")
	}

	render() {
		return (<>
			<header id='header'>
				<nav id='navbar'>
					<Link to="/">home</Link>
					<Link to="/games">games</Link>
					<Link to="/news">news</Link>
				</nav>
				<div id='inorout'>
				{localStorage.getItem('token')===''||localStorage.getItem('token')===null ? (
					<Link to="/login" id='loginbutton'>login</Link>
				) : (
					<details id='userdetails'>
						<summary id='usersummary'>{this.state.username}</summary>
						<div id='popup'>
							<Link to={'/users/'+this.state.id}>profile</Link>
							<button id='logoutbutton' onClick={this.logout}>logout</button>
						</div>
					</details>
				)}
					<button id='nav-btn' type='button' onClick={this.toggleheader}><img src="/burger-bar.png" alt="menu icon" id='menu-icon' /></button>
				</div>
			</header>			
		</>);
	}
}