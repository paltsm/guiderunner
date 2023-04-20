import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Game from "./pages/game";
import Register from "./pages/register";

class App extends Component<{}>{
	render(){
		return(
			<Routes>
				<Route path="/" element={<Main></Main>}/>
				<Route path="/games/:id" element={<Game></Game>}/>
				<Route path="/users/:id" element={<Game></Game>}/>
				<Route path="/news" element={<Game></Game>}/>
				<Route path="/accounts" element={<Register></Register>}/>
			</Routes>
		)
	}
}
export default App