import { Component } from 'react';

interface State{
	gamename:string;
	release:number;
	genre:string;
	platform:string;
	developer:string;
	description:string;
	image:string;
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
			image:""
		}
		this.data()
	}
	
	data = async() => {
		let id = window.location.pathname
		const response=await fetch(`http://localhost:3000${id}`)
		let data=await response.json()
		console.log(data)
		this.setState({
			gamename:data[0].gamename,
			release:data[0].release,
			genre:data[0].genre,
			platform:data[0].platform,
			developer:data[0].developer,
			description:data[0].description,
			image:data[0].image
		})
	}

	
	render(){
		return <div id='card'>
			<div className='gamenamerelease'><div id='gamename'>{this.state.gamename}</div><div id='release'>{this.state.release}</div></div>
			<img id='image' src={this.state.image} alt='game'/>
			<div id='genre'><span>genre:</span>{this.state.genre}</div>
			<div id='platform'> <span>platform:</span>{this.state.platform}</div>
			<div id='developer'><span>developer:</span>{this.state.developer}</div>
			<div id='description'><span>description:</span>{this.state.description}</div>

			
		</div>
	
	}

}

export default Game;