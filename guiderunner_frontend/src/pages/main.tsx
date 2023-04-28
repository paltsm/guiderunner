import { Component } from 'react';

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
	game:Game[],
	news:News[],
	records:Records[]
}
class Main extends Component<{},State>{
	constructor(props:{}){
		super(props);
		this.state={
			game:[],
			news:[],
			records:[]
		}
		this.games()
		this.news()
		this.records()
	}
	
	games = async() => {
		const response=await fetch(`http://localhost:3000/games`)
		let data=await response.json()
		this.setState({
			game:data.games
			
			
		})
	}
	news = async() => {
		const response=await fetch(`http://localhost:3000/news`)
		let data=await response.json()
		this.setState({
			news:data.news
			
		})
	}
	records = async() => {
		const response=await fetch(`http://localhost:3000/records`)
		let data=await response.json()
		this.setState({
			records:data.records
			
		})
	}

	
	render(){
		return <>
		<main className='main'>
		<div>
		</div>
		</main></>
	
	}

}

export default Main;