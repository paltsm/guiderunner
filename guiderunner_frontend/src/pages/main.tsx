import { Component } from 'react';

import Header from '../components/header';

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
		<Header/>
		<main className='main'>
		<div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo veniam quo velit perferendis deleniti sapiente alias, nesciunt aliquid cumque excepturi quisquam. Qui nihil mollitia reiciendis ea ad libero, quod doloremque voluptatum magni, quasi voluptates eum temporibus ab quo voluptas voluptatibus. Veritatis quae iste quaerat tempore corporis ad autem consequuntur enim porro, doloribus ipsa? Enim officia culpa incidunt fuga, maiores hic excepturi omnis in eligendi soluta, nam non. Totam quia, aliquid minima deserunt vero eum repellat. Saepe autem exercitationem neque aperiam molestias excepturi sequi itaque ducimus magnam sit? Deleniti consectetur, quam autem cupiditate atque recusandae quis quae sit sapiente numquam vitae dicta id ipsam quibusdam facere magni, fugiat voluptatibus accusamus illum aperiam nemo facilis officiis expedita illo. Mollitia, fuga repellat distinctio culpa libero optio quos nemo incidunt velit sint fugiat animi minima harum. Accusamus eaque sint dolores suscipit reprehenderit possimus ratione, debitis ea? Unde nesciunt labore, libero quidem voluptatum eaque, assumenda aliquid enim consequuntur nisi fuga atque error illum modi, omnis laborum dolorum hic harum architecto pariatur? Alias vel itaque quod ipsam, accusantium autem quasi officia, repellendus, voluptates adipisci earum natus ratione cum? Reprehenderit sint qui sed error neque? Nihil neque, tempore ipsum vel debitis necessitatibus iste ea atque nostrum quos repudiandae earum magnam aut. Minima distinctio id in illo ipsa exercitationem optio, laudantium vero. Mollitia harum excepturi, animi praesentium recusandae quidem repudiandae molestiae laboriosam reprehenderit facilis possimus in nemo quae velit tempore voluptates. Ab debitis, officia itaque tempora eaque, sequi ducimus ipsum quisquam similique quos quam esse dignissimos! Dignissimos fugit expedita voluptatum inventore nulla id tenetur repellendus, ut dicta doloremque. Architecto, sit magnam, asperiores illo modi eveniet itaque quam quo, reiciendis doloribus natus et cumque debitis iure ipsam. Tempore amet eveniet accusamus praesentium asperiores commodi voluptas repudiandae voluptatem earum. Dolor placeat quaerat quis repudiandae, ex a, officiis, itaque voluptate laudantium dicta unde. Eligendi distinctio aliquid architecto dolores quos tempora voluptates, vitae unde deleniti nostrum consequatur non deserunt aliquam neque animi amet itaque excepturi inventore qui nesciunt dignissimos voluptas in, nemo ex! Vitae voluptatibus deserunt provident suscipit, quisquam quasi ipsum et nemo quam sunt ipsa, ducimus maxime nesciunt modi inventore. Ex, totam eligendi optio magnam, est modi suscipit earum ad officiis quod dicta non velit! Corrupti quam ducimus amet unde pariatur. Tenetur pariatur, commodi quibusdam hic ut tempora vitae facere? Molestiae doloremque ex iure similique rem eos sequi id accusamus veritatis error vel dicta eaque voluptas quo itaque, nesciunt ea aperiam. Consequatur sapiente mollitia, facere necessitatibus nisi eos aspernatur eius quidem praesentium laboriosam? Maxime cum numquam molestiae deserunt accusantium tenetur quidem repudiandae natus velit impedit, assumenda fugiat ex a. Reiciendis sunt velit vitae possimus, exercitationem voluptates dolores iure temporibus earum minima officia accusantium impedit dolorum fuga, aliquid rerum tempore enim laboriosam, sit et fugiat. Incidunt, molestias! Minus nemo cum ea libero! Recusandae quis ipsa nemo veniam provident saepe voluptatem! Cupiditate voluptatem quod quidem aliquam, repellat velit odit et fuga ea eum quia perferendis ipsa suscipit expedita obcaecati esse cumque accusantium provident ut nemo. Dolores reprehenderit animi minus a expedita dolore assumenda dicta laborum vel at facere voluptates voluptatum corporis sapiente praesentium quibusdam dolorum, error placeat beatae cupiditate eius autem. Ex excepturi numquam dolorum asperiores assumenda consectetur autem mollitia consequatur, debitis omnis officia nulla! Veritatis, facere, soluta porro facilis illum aut nulla voluptatem voluptate accusamus iusto inventore fugit hic alias. Et veniam voluptatem at ea maiores aut praesentium officiis! Repellendus incidunt corrupti vel quos maxime facilis illum. Cumque explicabo laboriosam placeat reiciendis repellendus obcaecati odit nostrum earum qui incidunt temporibus maiores assumenda accusantium consequatur dolorum, deserunt nam illum enim sequi quibusdam exercitationem animi atque eaque modi. Vitae reprehenderit dolore officia quisquam, nisi nostrum sunt! Quaerat, quia dolor. Nobis, aperiam vel animi sunt illo, in ipsum voluptatibus natus odio maxime placeat nostrum et perferendis explicabo ratione. Ipsam, accusantium ullam incidunt ut ducimus repudiandae quaerat est earum quis reiciendis! Non illo magnam cum modi animi sint voluptates, praesentium dolorum facere pariatur mollitia distinctio blanditiis, tempora consequatur nihil nam rerum! Veritatis facere quod sed praesentium! Eaque itaque veritatis ipsum. Ratione nulla dolore fugiat eos, quod placeat recusandae nostrum? Dolorem sequi consequatur laudantium illo. Odit rerum est nam. Molestias repellat aliquid inventore dicta, sunt modi fugiat facere ex nulla quibusdam harum necessitatibus et blanditiis alias perferendis ullam expedita quaerat voluptas hic provident architecto dolore ab possimus. Neque quae, inventore ipsum magnam dolorum, laboriosam et ex veniam natus expedita sint quam quis numquam possimus blanditiis corrupti harum voluptates laborum ab molestiae magni dignissimos eos? Perspiciatis vitae veniam quod suscipit magni voluptatibus voluptas iure, dignissimos dicta eveniet eaque nam, quasi asperiores! Fugit velit repudiandae atque dolores tenetur, molestiae corrupti perferendis nostrum quidem ipsa suscipit eligendi quisquam ducimus deserunt sunt cumque dolorem. Hic vel reprehenderit perspiciatis architecto ab magnam laboriosam officia maxime, laudantium perferendis quas id quaerat nisi iure deleniti dolore ullam nesciunt sit tenetur dolores voluptas ad nihil. Voluptates praesentium architecto laudantium fugiat, ducimus quae magnam quos eum atque incidunt quia quod recusandae sint expedita omnis vitae commodi quo voluptatibus iure porro, nam assumenda adipisci, placeat deleniti? Magni odit eius odio doloremque facere explicabo sunt, nulla aperiam porro sed beatae dolorem quae corrupti itaque tempora dignissimos numquam mollitia excepturi a. Dignissimos sunt quaerat quis sequi nobis odio deleniti, a veniam fuga quidem enim fugiat. Laborum possimus reprehenderit incidunt alias aliquid, officia placeat autem quisquam porro perspiciatis? Illo assumenda tempora iusto laudantium! Mollitia ex ut vel iusto? Distinctio deserunt, maiores autem fugit quae consequuntur omnis totam ducimus veniam cumque blanditiis reprehenderit deleniti explicabo doloremque at id nesciunt? Esse molestias maxime libero similique soluta perferendis error, ut adipisci quo officiis, minima dolore dolores expedita iste commodi nesciunt assumenda eligendi amet voluptatibus? Nam non perferendis repudiandae debitis quisquam amet vero, est doloribus blanditiis quam a quibusdam reprehenderit repellat, expedita illum nulla minus, molestiae voluptatum mollitia? Explicabo assumenda sed eius quisquam, quos, doloremque officia asperiores fugit voluptate ipsa deleniti ipsam accusamus dolores commodi fuga? Suscipit modi ipsam vitae sit voluptatum reiciendis omnis! Delectus laborum amet molestias aliquid tenetur debitis dolore quisquam a. Consequatur quae dolorem officia distinctio, maxime dolor exercitationem necessitatibus vero!</div>
		</main></>
	
	}

}

export default Main;