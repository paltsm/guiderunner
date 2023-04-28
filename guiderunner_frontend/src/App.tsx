import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Register from "./pages/register";
import './app.css';
import './header.css';
import './users.css';
import './game.css'
import './news.css'
import './records.css'
import Login from "./pages/login";
import Header from "./components/header";
import Users from "./pages/users";
import News from "./pages/news";
import Game from "./pages/games";
import Record from "./pages/records";

class App extends Component<{}>{
	render(){
		return(<>
			<Header/>
			<Routes>
				<Route path="/" element={<Main></Main>}/>
				<Route path="/games/:id" element={<Game></Game>}/>
				<Route path="/users/:id" element={<Users></Users>}/>
				<Route path="/news" element={<News></News>}/>
				<Route path="/news/:id" element={<News></News>}/>
				<Route path="/register" element={<Register></Register>}/>
				<Route path="/login" element={<Login></Login>}/>
				<Route path="/validate" element={<Record></Record>}/>
			</Routes>
			</>)
	}
}
export default App