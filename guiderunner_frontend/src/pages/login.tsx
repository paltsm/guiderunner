import { Component } from "react";
import { useNavigate} from 'react-router-dom';
import Header from "../components/header";


interface State {
	email: string;
	password: string;
	token: string;
	message: string[];
}

interface Token {
	token:string
}

class Login extends Component <{}, State> {
	constructor(props: {}){
		super(props);
		this.state = {
			email: '',
			password: '',
			token: window.localStorage.getItem("token")||'',
			message: []
		}
	}

	handleLogin = async () => {
		if (this.state.email === ''){
			this.setState({message: ["email is empty"] })
			return;
		}
		const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		console.log(emailRegex.test(this.state.email))
		if(emailRegex.test(this.state.email)===false){
			this.setState({message: ['email is wrong']})
			return
		}
		else if (this.state.password === ''){
			this.setState({message: ["password is empty"] })
			return;
		}
		else if(this.state.password.length < 8){
			this.setState({message: ['password min length is 8']})
			return
		}
		else if(this.state.password.length > 64){
			this.setState({message: ['password max length is 64']})
			return
		}
		else{
			const data ={
				email: this.state.email,
				password: this.state.password,
			};

			let response = await fetch("http://localhost:3000/auth/login",{
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data),
			});

			console.log(response.status)

			if(response.status === 201){
				const res = await response.json() as Token
				this.setState({
					token: res.token,
					message:['login success']
				})
				localStorage.setItem('token', res.token)
				window.location.replace('/')
			}
			else{
				const sing=await response.json()
				this.setState({message:sing.message})
			}

		}

	}
	redirect = async () => {
		const navigate = useNavigate();
		navigate('/Menu', {replace: true});
	}
	

	render() {
		console.log(this.state.token)
		return(<>
			<Header />
			<main>
				<h3>login</h3>
				{this.state.token.length>0 ? (
				
					<p>You are alredy logged in</p>

					) : (
						
					<form className="rgblog">
						<section id="emailsection">
							<input type="text" placeholder="email" id="emailinput" value={this.state.email} required onChange={e => this.setState({email: e.currentTarget.value})}/>
						</section>

						<section id="passwordsection">
							<input type="password" placeholder="password (8-64)" id="upasswordeinput" value={this.state.password} required onChange={e => this.setState({password: e.currentTarget.value})}/>
						</section>

						<section id="buttonsection">
							<button type="button" onClick={this.handleLogin}>login</button>
						</section>

						<p>{this.state.message}</p>

						{/* <section id="forgotbuttonsection">
							<button onClick={this.forgotpasswordemail}>forgot password?</button>
						</section> */}
					</form>
				)}
				
			</main>
		</>
		)
	}
}

export default Login;