import React, {Component} from 'react';
import { connect } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import DashBoardItem from "./DashBoardItem";

import './DashBoard.scss'
import MailPage from "./MailPage";
import ToolBar from "./ToolBar";

class DashBoard extends Component {
	state = {
		activeMail: ''
	};
	
	openEmailText = (id) => {
		if(Number(this.state.activeMail) !== Number(id)) {
			this.setState({
				activeMail : Number(id),
			})
		} else {
			this.setState({
				activeMail : '',
			})
		}
	};
	
	render() {
		let mails = this.props.mailList[this.props.currentFolder].map((mail, index) => {
			return <DashBoardItem currentActiveMail={this.state.activeMail} openEmailText={this.openEmailText} key={Math.random()*(10**(Math.random()*100))} {...mail}/>
		});
		
		return (
			<Switch>
				<Route path="/mail/:id" component={MailPage}/>
				<Route path="/" component={() => (
					<ul className="dash-board-wrapper">
						<ToolBar/>
						{mails}
					</ul>
				)}/>
			</Switch>
			
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