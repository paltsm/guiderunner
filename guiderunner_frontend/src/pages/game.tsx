import React, { Component } from 'react';
import '../game.css';

interface Game{
	gamename:string;
	release:number;
	genre:string;
	platform:string;
	developer:string;
	description:string;
	image:string;
}

interface State{
	gamename:string;
	release:number;
	genre:string;
	platform:string;
	developer:string;
	description:string;
	image:string;
	game:Game[]
}
class Game extends Component<{},State>{
	constructor(props:{}){
		super(props);
		this.state={
			gamename:"",
			release:0,
			genre:"",
			platform:"",
			developer:"",
			description:"asd",
			image:"",
			game:[]
		}
		this.data()
	}
	
	data = async() => {
		let id = window.location.pathname
		const response=await fetch(`http://localhost:3000${id}`)
		let data=await response.json()
		this.setState({
			game:data
			
		})
	}

	
	render(){
		return <div id='card'>
			{this.state.game.map((r)=><div className='gamenamerelease'><div id='gamename'>{r.gamename}</div><div id='release'>{r.release}</div></div>) }
			{this.state.game.map((r)=><img id='image' src={r.image} alt='game'/>) }
			{this.state.game.map((r)=><div id='genre'><span>genre:</span>{r.genre}</div>) }
			{this.state.game.map((r)=><div id='platform'> <span>platform:</span>{r.platform}</div>) }
			{this.state.game.map((r)=><div id='developer'><span>developer:</span>{r.developer}</div>) }
			{this.state.game.map((r)=><div id='description'><span>description:</span>{r.description}</div>) }
			
		</div>
	
	}

}

export default Game;