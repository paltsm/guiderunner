import { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';

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
	id:number
	username:string;
	gamename:string;
	time:string;
	platform:string;
	youtubelink:string;
	verif:boolean;
	records:Records[]
	role:string
}
class Record extends Component<{},State>{
	constructor(props:{}){
		super(props);
		this.state={
			id:0,
			username:'',
			gamename:'',
			time:'',
			platform:'',
			youtubelink:'',
			verif:false,
			records:[],
			role:'user'
		}
		this.data()
	}
	
	data = async() => {
		const fromheader=new Header({})
		const isuserlogin = await fromheader.getuser()
		console.log(isuserlogin)

		if(isuserlogin==null){
			console.log("not logged in")
		}else{
			this.setState({
				role:isuserlogin.role
			})
		}
		const response=await fetch(`http://localhost:3000/records`)
		let data=await response.json()
		console.log(data.records)
		this.setState({
			records: data.records
		})
	}
	reject=async(id:number)=>{
		const data={
			"verif":true
		}
		const response =await fetch(`http://localhost:3000/records/${id}`,{
			method:"DELETE",
			headers:{
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
		console.log(response.status)
		window.location.reload()
	}
	accept=async(id:number)=>{
		const data={
			"verif":true
		}
		const response =await fetch(`http://localhost:3000/records/${id}`,{
			method:"PATCH",
			headers:{
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
		console.log(response.status)
		window.location.reload()
	}
	
	render(){
		document.title="guiderunner records"
		console.log(this.state.records)
		if(this.state.role=="admin"){
			return(<>
			<main>
				<h2>records</h2>
				<>
				{this.state.records.map((r)=>
					<details className={`recordcard ${r.verif==true?(
						"veriftrue"
						):(
						"veriffalse"
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
						<div className="buttons">
							<button className='acceptbutton rbutton' onClick={()=>this.accept(r.id)}>✔</button>
							<button className='rejectbutton rbutton' onClick={()=>this.reject(r.id)}>❌</button>
						</div>
					</details>
				)}</>
			</main>
			</>)
		}
		else{
			return(<>
				<main>
					<div>you are not authorized</div>
				</main>
			</>)
		}
	}

}

export default Record;