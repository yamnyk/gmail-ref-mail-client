import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import DashBoard from "./components/DashBoard";
import './App.scss';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				<Switch>
					<Route path="/" component={SideMenu} />
					<Route path="/" component={DashBoard} />
				</Switch>
			</div>
		);
	}
}

export default App;
