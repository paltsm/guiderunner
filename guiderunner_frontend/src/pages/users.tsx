import { Component } from 'react';
import Header from '../components/header';
import { Link } from 'react-router-dom';
interface Game{
	id:number;
	gamename:string;
	release:number;
	genre:string;
	platform:string;
	developer:string;
	description:string;
	image:string;
}
// interface News{
// 	gamename:string;
// 	title:string;
// 	content:string;
// 	source:string;
// 	date:string;
// }
// interface Records{
// 	username:string;
// 	gamename:string;
// 	time:string;
// 	platform:string;
// 	difficulty:string;
// 	youtubelink:string;
// }

interface User{
	id:number;
	username:string;
	email:string;
	role:string;
	token:string;
	games:Game[]
}
interface State{
	id:number;
	username:string;
	email:string;
	role:string;
	games: Game[];
	user:User
}
class Users extends Component<{},State>{
	constructor(props:{}){
		super(props);
		
		this.state={
			id:0,
			username:'',
			email:'',
			role:'user',
			games:[],
			user:{"id":0,"username":"","email":"","token":window.localStorage.getItem("token")||'',"role":"user","games":[]},
		}
		this.everything()
	}
	everything=async()=>{
		const fromheader=new Header({})
		const data = await fromheader.getuser()

		const pageinfo = await fetch(`http://localhost:3000/accounts/${window.location.pathname.split("/")[window.location.pathname.split("/").length-1]}`).then(response=>response.json())
		console.log(pageinfo)
		let games=await this.getgames(pageinfo[0].id)
		this.setState({
			id: pageinfo[0].id,
			username: pageinfo[0].username,
			email: pageinfo[0].email,
			games:games
		})

		if(data==null){
			console.log("not logged in")
		}
		else{
			this.setState({
				user: { "id": data.id, "username": data.username, "email": data.email, "token": window.localStorage.getItem("token")||'', "role": data.role, "games": data.games }
			})
		}
		return data
	}
	getgames=async(userid:number)=>{
		
		const response= await fetch(`http://localhost:3000/following/${userid}/games`).then(respone=>respone.json())
		for(let item1 in response){
			for(let item2 in response[item1]){
				response.push(response[item1][item2])
			}	
		}
		const responelength=response.length
		for(let i=responelength;i>responelength/2;i--){
			response.shift()
		}
		return response
	}
	checkfollow=async()=>{
		console.log("aoiwer")
		let data={
			user:this.state.user.id,
			fgame:parseInt(window.location.pathname.split("/")[window.location.pathname.split("/").length-1])
		}
		console.log(data)
		for(let game of this.state.games){
			if(game.id===data.fgame){
				console.log("okos")
				document.getElementById("followbutton")!.innerText="following"
				// fetch(`http://localhost:3000/following/games/delete`,{
				// 	method: 'DELETE',
				// 	headers:{
				// 		"Content-Type": "application/json"
				// 	},
				// body: JSON.stringify(data)
				// })
				break
			}
			else{
				console.log("hulye")
				continue
			}
		}

		
	}
	scrollingright(){
		let width=((document.getElementById("gamesslide")!.offsetWidth +16) * (0.3))
		document.getElementById("gamesslide")!.scrollLeft+=width
		// document.getElementById("gamesslide")!.style.color="#444"
		return undefined
	}
	scrollingleft(){
		let width=((window.screen.width+12) * (0.3))
		document.getElementById("gamesslide")!.scrollLeft-=width
		// document.getElementById("gamesslide")!.style.color="#444"
		return undefined
	}
	
	render(){
		document.title= `${this.state.username}`
		console.log("gooddd"+this.state.games.length)
		return (<>
			<main className='main'>
				<div className='username'>
					<h2>{this.state.username}</h2>
				</div>
				{this.state.games.length==0?(
					<></>
				):(
					this.state.games.length<4?(
						
						<div id='containgames'>
							<div id='gamesslide'>
								{this.state.games.map((game)=>{
									return <Link to={`/games/${game.id}`} className='game' style={{backgroundImage:`url(${game.image})`,backgroundSize:"cover"}}>
										<div>
											{game.gamename}
										</div>
										<div>
											{game.release}
										</div>
										</Link>
								})}
							</div>
						</div>
					):(
						<div id='containgames'>
						<button className="button prev" onClick={this.scrollingleft}>&lt;</button>
						<div id='gamesslide'>
							{this.state.games.map((game)=>{
								return <Link to={`/games/${game.id}`} className='game' style={{backgroundImage:`url(${game.image})`,backgroundSize:"cover"}}>
									<div>
										{game.gamename}
									</div>
									<div>
										{game.release}
									</div>
									</Link>
							})}
						</div>
						<button className="button next" onClick={this.scrollingright}>&gt;</button>
					</div>
					)
				)}
			</main>
		</>)
	
	}

}

export default Users;