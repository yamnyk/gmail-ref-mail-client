import React, {Component} from 'react';
import { connect } from "react-redux";
import DashBoardItem from "./DashBoardItem";

import './DashBoard.scss'

class DashBoard extends Component {
	render() {
		let mails = this.props.mailList[this.props.currentFolder].map((mail) => {
			return <DashBoardItem key={Math.random()*(10**(Math.random()*100))} {...mail}/>
		});
		return (
			<ul className="dash-board-wrapper">
				{mails}
			</ul>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		mailList: store.mails.mailList,
		currentFolder: store.mails.currentFolder,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);