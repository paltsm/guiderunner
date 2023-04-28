import { Component } from 'react';
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
		console.log(this.state.game)
		console.log(this.state.news)
		console.log(this.state.records)
		return <>
		<main className='main'>
			<h2 style={{margin:" 0 0 1rem"}}>some games that we have </h2>
		<div id='gamesslide'>
				<button className="button prev" onClick={this.scrollingleft}>&lt;</button>
					{this.state.game.map((game)=>{
					return <Link to={`/games/${game.id}`} className='game' style={{backgroundImage:`url(${game.image})`,backgroundSize:"cover"}}>
						<div>
							{game.gamename}
						</div>
						<div>
							{game.release}
						</div>
						</Link>
				})}
					<button className="button next" onClick={this.scrollingright}>&gt;</button>
				</div>
			<h2 style={{margin:" 0 0 1rem"}}>some news</h2>
		</main></>
	
	}

}

export default Main;