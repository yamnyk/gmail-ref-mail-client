import React, {Component} from 'react';
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

export default WorkingArea;