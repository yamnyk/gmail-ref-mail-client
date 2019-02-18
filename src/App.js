import React, { Component } from 'react';
import './App.scss';
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import DashBoard from "./components/DashBoard";

class App extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				<SideMenu />
				<DashBoard />
			</div>
		);
	}
}

export default App;
