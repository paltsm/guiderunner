import { Component } from 'react';

interface News{
	gamename:string;
	title:string;
	content:string;
	source:string;
	date:string;
}

interface State{
	gamename:string;
	title:string;
	content:string;
	source:string;
	date:string;
	news:News[]
}
class News extends Component<{},State>{
	constructor(props:{}){
		super(props);
		this.state={
			gamename:'',
			title:'',
			content:'',
			source:'',
			date:'',
			news:[]
		}
		this.data()
	}
	
	data = async() => {
		let id = window.location.pathname
		const response=await fetch(`http://localhost:3000/news`)
		let data=await response.json()
		console.log(data.news)
		this.setState({
			// gamename:data.news.gamename,
			// title:data.news.title,
			// content:data.news.content,
			// source:data.news.source,
			// date:data.news.date
			news: data.news
		})
	}

	
	render(){
		console.log(this.state.news)
		return(<>
		<main>
			<>{window.location.pathname=='/news'||'/news/' ? (
				console.log("nahhh")
				):(
					console.log(window.location.pathname)
			)}
			{this.state.news.map((r)=>
				<div style={{background:'#aaaaaa20',margin:'0 0 0.5rem',padding:'0.5rem'}}>
					<div style={{fontSize:'1.5rem',textDecoration:'dotted 1px black'}}>{r.title}</div>
					<div>{r.gamename}</div>
					<div>{r.content}</div>
					<div>{r.source}</div>
					<div>{r.date}</div>
				</div>
			)}</>
		</main>
		</>)
	}

}

export default News;