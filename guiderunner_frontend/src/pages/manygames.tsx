import { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import "./gamespage.css"
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

interface State{
	games:Games[]
}
class ManyGames extends Component<{},State>{
	constructor(props:{}){
		super(props);
		this.state={
			games:[]
		}
		this.games()
	}
	
	games = async() => {
		const response=await fetch(`http://localhost:3000/games`)
		let data=await response.json()
		this.setState({
			games:data.games
			
		})
	}
	
	render(){
		document.title="guiderunner games"
		return <main>
			<div className="gamespage">
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
		</main>
	}

}

export default ManyGames;