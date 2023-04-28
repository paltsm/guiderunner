import { Component } from 'react';
import Header from '../components/header';
import { Link } from 'react-router-dom';

interface Games{
	id:number;
	gamename:string;
	release:number;
	genre:string;
	platform:string;
	developer:string;
	description:string;
	image:string;

}

interface User{
	id:number;
	username:string;
	email:string;
	role:string;
	token:string;
	games:Games[]
}

interface State{
	id:number
	gamename:string;
	release:number;
	genre:string;
	platform:string;
	developer:string;
	description:string;
	image:string;
	following:boolean;
	user:User;
}
class Game extends Component<{},State>{
	constructor(props:{}){
		super(props);
		this.state={
			id:0,
			gamename:"",
			release:0,
			genre:"",
			platform:"",
			developer:"",
			description:"asd",
			image:"",
			following:false,
			user:{"id":0,"username":"","email":"","token":window.localStorage.getItem("token")||'',"role":"user","games":[]}
		}
		this.everything()
	}
	
	everything = async() => {
		let gameid = window.location.pathname
		const pageinfo=await fetch(`http://localhost:3000${gameid}`).then(response=>response.json())
		console.log(pageinfo)
		
		const fromheader=new Header({})
		const isuserlogin = await fromheader.getuser()
		console.log(isuserlogin)

		console.log(pageinfo[0])
		let usergame
		if(isuserlogin==null){
			console.log("not logged in")
		}
		else{
			usergame=await this.getgames(isuserlogin.id)
			console.log(usergame)
			this.setState({
				user: { "id": isuserlogin.id, "username": isuserlogin.username, "email": isuserlogin.email, "token": window.localStorage.getItem("token")||'', "role": isuserlogin.role, "games": usergame }
			})
		}
		this.setState({
			id:pageinfo[0].id,
			gamename:pageinfo[0].gamename,
			release:pageinfo[0].release,
			genre:pageinfo[0].genre,
			platform:pageinfo[0].platform,
			developer:pageinfo[0].developer,
			description:pageinfo[0].description,
			image:pageinfo[0].image,
		})
		const isfollowing=usergame.find((g: any)=>g.id==pageinfo[0].id)
		if(isfollowing==null){
			console.log("not following")
		}
		else{
			this.setState({
				following:true
			})
		}

		
		
	}
	getgames=async(userid:number)=>{
		
		const usergames= await fetch(`http://localhost:3000/following/${userid}/games`).then(respone=>respone.json())
		for(let item1 in usergames){
			for(let item2 in usergames[item1]){
				usergames.push(usergames[item1][item2])
			}	
		}
		const usergameslength=usergames.length
		for(let i=usergameslength;i>usergameslength/2;i--){
			usergames.shift()
		}
		return usergames
	}
	checkfollow=async()=>{
		// let followinggames={
		// 	user:this.state.user.id,
		// 	fgame:parseInt(window.location.pathname.split("/")[window.location.pathname.split("/").length-1])
		// }
		// console.log(this.state.user.games)
		// for(let game of this.state.user.games){
		// 	console.log(game)
		// 	if(game.id===followinggames.fgame){
		// 		document.getElementById("followbutton")!.innerText="following"
				
		// 		return true
		// 	}
		// 	else{
		// 		console.log("hulye")
		// 		continue
		// 	}
		// }
		// return false
		if(this.state.following==false && this.state.user.token!==''){
			console.log("follow")
			
			this.follow()
			document.getElementById("followbutton")!.addEventListener("click",this.unfollow)
		}else if(this.state.user.token!==''){
			console.log("unfollow")
			
			this.unfollow()
			document.getElementById("followbutton")!.addEventListener("click",this.follow)
		}
	}
	unfollow=async()=>{
		const data={
			"user":this.state.user.id,
			"fgame":this.state.id
		}
		let response= await fetch(`http://localhost:3000/following/games/delete`,{
			method: 'DELETE',
			headers:{
				"Content-Type": "application/json"
			},
		body: JSON.stringify(data)
		})
		console.log(response.status)
		if(response.status==200){
			document.getElementById("followbutton")!.innerText="follow"
		}
	}
	follow=async()=>{
		const data={
			"user":this.state.user.id,
			"fgame":this.state.id
		}
		let response= await fetch(`http://localhost:3000/following/games`,{
			method: 'POST',
			headers:{
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
		console.log(response.status)
		if(response.status==201){
			document.getElementById("followbutton")!.innerText="following"
		}
	}
	
	render(){
		document.title=this.state.gamename
		console.log(this.state.user.id)
		return(<>
		<main>
			<div id='game'>
				<div id='nameandbutton'>
					<h2 id='gamename'>{this.state.gamename}</h2>
					{this.state.user.id==0 ? (
						<Link id='followbutton' to="/login">follow</Link>
					) : (
						this.state.following?(
							<button id='followbutton' onClick={this.checkfollow}>following</button>
						):(
							<button id='followbutton' onClick={this.checkfollow}>follow</button>
						)
					)}
				</div>
				<div id="infowithimage">
					<img id='image' src={this.state.image} alt='game'/>
					<div id='info'>
						<div id='genre'><span>genre:</span>{this.state.genre}</div>
						<div id='platform'> <span>platform:</span>{this.state.platform}</div>
						<div id='developer'><span>developer:</span>{this.state.developer}</div>
						<div id='description'><span>description:</span>{this.state.description}</div>
					</div>

				</div>
			</div>
		</main>
		</>)
	}

}

export default Game;