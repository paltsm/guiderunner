import { Component } from 'react';
import Header from '../components/header';
interface Game{
	gamename:string;
	release:number;
	genre:string;
	platform:string;
	developer:string;
	description:string;
	image:string;
}
interface News{
	gamename:string;
	title:string;
	content:string;
	source:string;
	date:string;
}
interface Records{
	username:string;
	gamename:string;
	time:string;
	platform:string;
	difficulty:string;
	youtubelink:string;
}

interface State{
	id:number;
	username:string;
	email:string;
	tokenid:number;
	token: string;
}
class Users extends Component<{},State>{
	constructor(props:{}){
		super(props);
		this.state={
			id:0,
			username:'',
			email:'',
			tokenid:0,
			token: window.localStorage.getItem("token")||''
		}
		this.userpage()
		this.userinfo()
	}
	userinfo=async()=>{
		const fromheader=new Header({})
		const data = await fromheader.getuser()
		this.setState({
			tokenid: data.id
		})
	}
	userpage=async()=>{
		let userid=parseInt(window.location.pathname.split("/")[window.location.pathname.split("/").length-1])
		const response = await fetch(`http://localhost:3000/accounts/${userid}`).then(response=>response.json())
		this.setState({
			id: userid,
			username: response[0].username,
			email: response[0].email
		})
	}
	
	render(){
		return (<>
			<main className='main'>
				<div className='username'>
					<h2>{this.state.username}</h2>

					{this.state.id==this.state.tokenid ? (
						<div id='settingsbutton'>settings</div>
					) : (
						<button id='followbutton'>follow</button>
					)}

				</div>
			</main>
		</>)
	
	}

}

export default Users;