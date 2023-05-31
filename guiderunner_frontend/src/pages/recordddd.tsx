import {Component} from "react";
import {Link} from "react-router-dom";
import "./register.css"
import "./recordddd.css"
import Header from "../components/header";

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
interface State {
	username:string;
	gamename:string;
	time:string;
	platform:string;
	difficulty:string;
	youtubelink:string;
	message:string;
	games:Game[];
}

class Recorddd extends Component <{}, State> {
	constructor(props: {}){
		super(props);
		this.state = {
			username:"",
			gamename:"",
			time:"00:00:000",
			platform:"",
			difficulty:"",
			youtubelink:"",
			message:"",
			games:[]
		}
		this.games()
		this.checklogin()
	}
	checklogin=async()=>{
		const fromheader=new Header({})
		const data = await fromheader.getuser()
		this.setState({
			username:data.username
		})
	}
	games = async() => {
		const response=await fetch(`http://localhost:3000/games`)
		let data=await response.json()
		this.setState({
			games:data.games
			
		})
	}
	addrecord = async () => {
		console.log(this.state.gamename)
		if(this.state.username==""){
			window.location.replace("/login")
			return
		}
		else if(this.state.gamename==""){
			this.setState({message: 'choose a game' })
			return
		}
		else if(this.state.time=="00:00:000"){
			this.setState({message: 'time is empty' })
			return
		}
		else if(this.state.platform==""){
			this.setState({message: 'platform is empty' })
			return
		}
		else if(this.state.difficulty==""){
			this.setState({message: 'difficulty is empty' })
			return
		}
		else if(this.state.youtubelink==""){
			this.setState({message: 'youtube link is empty' })
			return
		}
		const data={
			username:this.state.username,
			gamename:this.state.gamename,
			time:this.state.time,
			platform:this.state.platform,
			difficulty:this.state.difficulty,
			youtubelink:this.state.youtubelink
		}
		console.log(data)

		let response = await fetch("http://localhost:3000/records",{
			method: "POST",
			headers:{
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data),
		});

		console.log(response.status)

		if(response.status === 201){
			this.setState({
				username:"",
				gamename:"",
				time:"00:00:000",
				platform:"",
				difficulty:"",
				youtubelink:"",
			})
			this.setState({message: 'Record sent!' })
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
					<form className="form">
						<section id="usernamesection">
							<label htmlFor="game">game:</label>
							<select name="game" id="selectgame" required onChange={e => this.setState({gamename: e.currentTarget.value})}>
								<option value=""></option>
								{this.state.games.map((game)=>{
									return <option value={game.gamename}>{game.gamename}</option>
								})}
							</select>
						</section>


						<section id="time">
							<label htmlFor="time">record time</label>
								<input type="text" id="timeinput" placeholder="time" value={this.state.time} required onChange={e => this.setState({time: e.currentTarget.value})}/>
						</section>

						<section id="platformsection">
							<label htmlFor="platform">platform:</label>
							<select name="platform" id="selectplatform" required onChange={e => this.setState({platform: e.currentTarget.value})}>
								<option value=""></option>
								<option value="pc">pc</option>
								<option value="playstation">playstation</option>
								<option value="xbox">xbox</option>
								<option value="phone">phone</option>
							</select>
						</section>

						<section id="difficultysection">
							<input type="text" id="difficulty" placeholder="difficulty" required onChange={e => this.setState({difficulty: e.currentTarget.value})}/>
						</section>

						<section id="youtubelinksection">
								<input type="url" name="youtubelink" id="youtubelink"  placeholder="youtube link" required onChange={e => this.setState({youtubelink: e.currentTarget.value})}/>
						</section>

						<section id="send">
								<button type="button" id="rbutton" onClick={this.addrecord}>Send</button>
						</section>
						<p id="message">{this.state.message}</p>
					</form>
			</main>

		</>)
	}
}

export default Recorddd;