import React, { Component } from 'react';
import { connect } from "react-redux";
import NewMailButton from "./NewMailButton";
import './SideMenu.scss'

class SideMenu extends Component {

	render() {
		return (
			<div className="side-menu">
				<NewMailButton />
				
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		newMailFormToggle : store.newMailFormToggle,
		isEmailListUpdatng : store.isEmailListUpdatng,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);