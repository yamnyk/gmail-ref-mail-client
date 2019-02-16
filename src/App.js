import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import DashBoard from "./components/DashBoard";

class App extends Component {
	newMailFormToggle = () => {
	
	};
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
