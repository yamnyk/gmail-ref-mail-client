import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import DashBoard from "./components/DashBoard";
import './App.scss';
import ModalWithForm from "./components/ModalWithForm";

class App extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				<Switch>
					<Route path="/" component={SideMenu} />
					<Route path="/" component={DashBoard} />
				</Switch>
				{this.props.newMailFormToggle ? <ModalWithForm /> : null}
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
