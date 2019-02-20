import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";
import Header from "./components/Header";

import './App.scss';
import WorkingArea from "./components/WorkingArea";

class App extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				<Switch>
					<Route path="/" component={WorkingArea}/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		newMailFormToggle: store.mails.newMailFormToggle,
	}
};
const mapDispatchToProps = (dispatch) => {
	return {}
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
