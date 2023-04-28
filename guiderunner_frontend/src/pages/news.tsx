import { Component, useState } from 'react';
import { Link } from 'react-router-dom';

interface News{
	id:number
	gamename:string;
	title:string;
	content:string;
	source:string;
	date:string;
}

interface State{
	id:number
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
			id:0,
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
		if(id!=='/news'){
			const news=await fetch(`http://localhost:3000${id}`).then(response=>response.json())
			console.log(news)
			this.setState({
				id:news.id,
				gamename: news.gamename,
				title:news.title,
				content:news.content,
				source:news.source,
				date:news.date
			})
		}else{
			const response=await fetch(`http://localhost:3000/news`)
			let data=await response.json()
			console.log(data.news)
			this.setState({
				news: data.news
			})
		}
	}
	share(){
		// const [copied, setCopied] = useState(false);

		// const asd = () => {
		//   navigator.clipboard.writeText(window.location.href);
		//   setCopied(true);
		// };
		navigator.clipboard.writeText(window.location.href);
		document.getElementById("sharebutton")!.innerText="copied"
	}

	
	render(){
		document.title="guiderunner news"
		console.log(window.location.pathname)
		if(window.location.pathname=='/news'){
			return(<>
			<main>
				<>
				{this.state.news.map((r)=>
					<div className='newscard'>
						<Link to={`/news/${r.id}`} className='cardtitle' >{r.title} </Link>
						
						<div className='gamenameanddate'>
							<div>{r.gamename}</div>
						<div className='newsdate'>{r.date}</div>
						</div>
						<div className='newscontent'>{r.content}</div>
						<a href={r.source} target='_blank' className='newssource'>{r.source}</a>
					</div>
				)}</>
			</main>
			</>)
		}
		else{
			document.title=this.state.gamename+": "+this.state.title
			return(<>
			<main>
					<div className='newscard'>
						<div className='titleandshare'>
							<Link to={`/news/${this.state.id}`} className='cardtitle'>{this.state.title}</Link>
							<button type='button' onClick={this.share} id='sharebutton'>share</button>
						</div>
						<div className='gamenameanddate'>
							<div>{this.state.gamename}</div>
						<div className='newsdate'>{this.state.date}</div>
						</div>
						<div className='newscontent'>{this.state.content}</div>
						<a href={this.state.source} target='_blank' className='newssource'>{this.state.source}</a>
					</div>
			</main>
			</>)
		}
	}

}

export default News;