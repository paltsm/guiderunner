import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Game from "./pages/game";
import Register from "./pages/register";
import './app.css';
import './header.css';
import Login from "./pages/login";

class App extends Component<{}>{
	render(){
		return(
			<Routes>
				<Route path="/" element={<Main></Main>}/>
				<Route path="/games/:id" element={<Game></Game>}/>
				<Route path="/users/:id" element={<Game></Game>}/>
				<Route path="/news" element={<Game></Game>}/>
				<Route path="/register" element={<Register></Register>}/>
				<Route path="/login" element={<Login></Login>}/>
			</Routes>
		)
	}
}
export default App