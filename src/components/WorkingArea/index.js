import React, {Component} from 'react';
import { connect } from 'react-redux';
import SideMenu from "../SideMenu";
import DashBoard from "../DashBoard";
import ModalWithForm from "../ModalWithForm";

import './WorkingArea.scss'

class WorkingArea extends Component {
	render() {
		return (
			<div className="working-area">
				<SideMenu />
				<DashBoard />
				{this.props.newMailFormToggle ? <ModalWithForm /> : null}
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		newMailFormToggle: store.mails.newMailFormToggle
	}
};

export default connect(mapStateToProps)(WorkingArea);