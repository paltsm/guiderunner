import {Component} from "react";
import {Link} from "react-router-dom";

interface State {
	email: string;
	username: string;
	password: string;
	message: string;
}

class Register extends Component <{}, State> {
	constructor(props: {}){
		super(props);
		this.state = {
			email: '',
			username: '',
			password: '',
			message: ''
		}
	}
	register = async () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (this.state.username === ''){
			this.setState({message: 'username is empty' })
			return
		}
		else if (this.state.username.length < 3){
			this.setState({message: 'username min length is 3' })
			return
		}
		else if (this.state.username.length > 20){
			this.setState({message: 'username max length is 20' })
			return
		}
		else if(this.state.email === ''){
			this.setState({message: 'email is empty' })
			return
		}
		else if(emailRegex.test(this.state.email) === false){
			this.setState({message: 'email is wrong' })
			return
		}

		else if(this.state.password === ''){
			this.setState({message: 'password is empty' })
			return
		}
		else if(this.state.password.length < 8){
			this.setState({message: 'password min length is 8' })
			return
		}
		else if(this.state.password.length > 64){
			this.setState({message: 'password max length is 64' })
			return
		}
		const data ={
			"username": this.state.username,
			"email": this.state.email,
			"password": this.state.password
		};
		let response = await fetch("http://localhost:3000/accounts",{
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data),
		});

		console.log(response.status)
	
		if(response.status === 201){
			this.setState({
				username: '',
				email: '',
				password: '',
			})
			this.setState({message: 'register succes!! you can now login' })
		}
			else{
				const sing = await response.json() 
				this.setState({message: sing.message})
			}	
	}
  
	render() {
		return(<>
			<main>
				<h2>registration</h2>
				{localStorage.getItem('token')===''||localStorage.getItem('token')===null ? (
					<form className="form">
						<section id="usernamesection">
							<input type="text" placeholder="username (3-20)" className="input" id="usernameinput" value={this.state.username} required onChange={e => this.setState({username: e.currentTarget.value})}/>
						</section>

						<section id="emailsection">
							<input type="text" placeholder="email" className="input" id="emailinput" value={this.state.email} required onChange={e => this.setState({email: e.currentTarget.value})}/>
						</section>

						<section id="passwordsection">
							<input type="password" placeholder="password (8-64)" className="input" id="upasswordeinput" value={this.state.password} required onChange={e => this.setState({password: e.currentTarget.value})}/>
						</section>

						<section id="buttonsection">
							<button type="button" id="button" onClick={this.register}>register</button>
						</section>

						<p id="message">{this.state.message}</p>
						<Link className='gologin' to='/login'>login</Link>
					</form>
					) : (
					<p>You are alredy logged in</p>
				)}
			</main>
		</>)
	}
}

export default Register;