import React, {Component} from 'react';
import './NewMailButton.scss';
import { connect } from "react-redux";
import { TOGGLE_NEW_MAIL_FORM } from "../../../actions/mails";

class NewMailButton extends Component {
	render() {
		return (
			<>
				<button className="new-mail-btn" onClick={this.props.toggleNewMail}>New Mail</button>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		newMailFormToggle: state.newMailFormToggle,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleNewMail : () => {
			dispatch({type: TOGGLE_NEW_MAIL_FORM})
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMailButton);