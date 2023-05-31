import { Component } from 'react';
import { Link } from 'react-router-dom';
import "./main.css"

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
	id:number
	gamename:string;
	title:string;
	content:string;
	source:string;
	date:string;
}
interface Records{
	id:number
	username:string;
	gamename:string;
	time:string;
	platform:string;
	youtubelink:string;
	verif:boolean;
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
		let ad= data.news.slice(-3)
		this.setState({
			news:ad
			
		})
	}
	records = async() => {
		const response=await fetch(`http://localhost:3000/records`)
		let data=await response.json()
		let ad= data.records.slice(1)
		this.setState({
			records:ad
			
		})
	}
	scrollingright(){
		let width=((document.getElementById("gamesslide")!.offsetWidth +16) * (0.5))
		document.getElementById("gamesslide")!.scrollLeft+=width
		// document.getElementById("gamesslide")!.style.color="#444"
		return undefined
	}
	scrollingleft(){
		let width=((document.getElementById("gamesslide")!.offsetWidth +16) * (0.5))
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
			<div id='containgames'>
				<button className="button prev" onClick={this.scrollingleft}>&lt;</button>
				<div id='gamesslide'>
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
				</div>
				<button className="button next" onClick={this.scrollingright}>&gt;</button>
			</div>
			<h2 style={{margin:" 0 0 1rem"}}>some news</h2>
			<div id='containnews'>
				{this.state.news.map((news)=>{
					return<>
						<div className='newscard'>
							<div className='titleandshare'>
								<Link to={`/news/${news.id}`} className='cardtitle'>{news.title}</Link>
							</div>
							<div className='gamenameanddate'>
								<div>{news.gamename}</div>
								<div className='newsdate'>{news.date}</div>
							</div>
							<div className='newscontent'>{news.content}</div>
							<a href={news.source} target='_blank' className='newssource'>{news.source}</a>
						</div>
					</>
				})}
			</div>
			<h2 style={{margin:" 0 0 1rem"}}>some records</h2>
			<div className="records">
				<>
				{this.state.records.map((r)=>
					<details className={`recordcard ${r.verif==true?(
						"veriftrue"
						):(
						"veriffalsemain"
						)}`}>

						<summary>
							<div>{r.username+` (${r.gamename})`}</div>
							<div>{r.time+` (${r.platform})`}</div>
						</summary>
						{r.youtubelink.includes("=")?(
							<iframe className='youtubeembed' src={"https://www.youtube.com/embed/"+r.youtubelink.split("=")[1]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
						):(
							<iframe className='youtubeembed' src={"https://www.youtube.com/embed/"+r.youtubelink.split("/")[3]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
						)}
					</details>
				)}</>
			</div>
		</main></>
	
	}

}

export default Main;