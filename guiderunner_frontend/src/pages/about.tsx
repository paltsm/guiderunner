import { Component } from "react";
import "./about.css"

class About extends Component<{}>{
	render(){
		return <><main>
				<h2>this site was made by:</h2>
			<div className="aboutcontain">
				<div className="devcard">
					<div>Deli Gábor</div>
					<img src="https://avatars.githubusercontent.com/u/96292781?v=4" alt="gábor kép" />
					<a href="https://github.com/G4B3E">github</a>
				</div>
				<div className="devcard">
					<div>Palotás Mihály</div>
					<img src="https://avatars.githubusercontent.com/u/90560970?v=4" alt="misi kép" />
					<a href="https://github.com/paltsm">github</a>
				</div>
				
			</div>
			<div className="projectcard devcard">
				<div>project code</div>
				<a href="https://github.com/paltsm">github</a>
			</div>
			<footer className="devcard">
				<p>This website aims to help you find other people do speedruns, or submit ones yourself. If you want to become an admin, you must send an email to <a id="email" href="mailto:guiderunner@gmail.com">guiderunner@gmail.com</a>, if we find the application good, you will be promoted to admin position.</p>
			</footer>
		</main>
		</>
	}
}

export default About;