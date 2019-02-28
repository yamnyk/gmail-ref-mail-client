import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import './DashBoardItem.scss'

class DashBoardItem extends Component {
	render() {
		return (
			<div className="dash-board-item" onClick={() => {this.props.openEmailText(this.props.id)}}>
				<p className="dash-board-item__subject">{this.props.subject}</p>
				<p className="dash-board-item__from">{this.props.from}</p>
				
				{ Number(this.props.currentActiveMail) === Number(this.props.id)
					? <NavLink to={`/mail/${this.props.id}`} className="dash-board-item__msg-text">{this.props.msgText}</NavLink>
					: null
				}
			</div>
		);
	}
}

export default DashBoardItem;