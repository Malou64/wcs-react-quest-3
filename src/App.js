import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./Quotes";
import Lamp from "./Lamp.js";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			working: true,
			rotateSpeed: "App-logo",
		};
	}
	workingClick() {
		this.setState({ working: !this.state.working });
		this.state.working ? this.setState({ rotateSpeed: "App-logo-speed" }) : this.setState({ rotateSpeed: "App-logo" });
	}

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className={this.state.rotateSpeed} alt='logo' />
					<h1 className='App-title'>Simpsons Quotes</h1>
				</header>
				<p>DOES HOMER WORK NOW ?</p>
				<button
					onClick={() => {
						this.workingClick();
					}}
				>
					{" "}
					YES{" "}
				</button>
				<button
					onClick={() => {
						this.workingClick();
					}}
				>
					{" "}
					NO{" "}
				</button>
				<Quote
					quote='I believe the children are the future... Unless we stop them now!'
					character='Homer Simpson'
					image='https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939'
				/>
				<Quote
					quote="Me fail English? That's unpossible"
					character='Ralph Wiggum'
					image='https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523'
				/>
				<Lamp on />
				<Lamp />
			</div>
		);
	}
}

export default App;
