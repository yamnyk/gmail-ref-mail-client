import React, {Component} from 'react';
import { connect } from 'react-redux';
import './ModalWithForm.scss'
import { toggleNewMail } from "../../actions/mails";

class ModalWithForm extends Component {
	render() {
		return (
			<div className="mail-modal-wrapper">
				<div className="mail-modal-head">
					<p className="mail-modal-head__title">new message</p>
					<div className="mail-modal-head__close-sign" onClick={this.props.toggleNewMail}> </div>
				</div>
				<form action="" className="mail-modal-form">
					<input type="text" className="mail-modal-form__field" placeholder="Subject"/>
					<input type="text" className="mail-modal-form__field" placeholder="Enter recipients email address"/>
					<textarea className="mail-modal-form__field modal-form-text" rows='10' placeholder="Type your message here"/>
					<input type="submit" className="mail-modal-form__btn"/>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		newMailFormToggle : state.newMailFormToggle,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleNewMail : () => {
			dispatch(toggleNewMail())
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWithForm);