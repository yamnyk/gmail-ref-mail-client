import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import './DashBoardItem.scss'

class DashBoardItem extends Component {
	render() {
		return (
			<div className="dash-board-item">
				<p className="dash-board-item__subject">{this.props.subject}</p>
				<p className="dash-board-item__from">{this.props.from}</p>
				<NavLink to={`/mail/${this.props.id}`} className="dash-board-item__msg-text">
					{this.props.msgText}
				</NavLink>
			</div>
		);
	}
}

export default DashBoardItem;