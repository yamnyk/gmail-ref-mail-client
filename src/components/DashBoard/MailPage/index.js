import React, {Component} from 'react';
import { connect } from 'react-redux';

import "./MailPage.scss"

class MailPage extends Component {
	render() {
		return (
			<div className="mail-page">
				<h1 className="mail-page__subject">
					{this.props.mail.subject}
				</h1>
				<h4 className="mail-page__from">
					{this.props.mail.from}
				</h4>
				<p className="mail-page__text">
					{this.props.mail.msgText}
				</p>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	const mails = {...state.mails.mailList};
	let resMail = '';
	
	for(let folder in mails) {
		resMail = mails[folder].find((mail) => {
			return mail.id == props.match.params.id
		});
		if(resMail !== undefined) {
			break;
		}
	}
	
	
	return {
		mail: resMail ? resMail : null,
	};
};

export default connect(mapStateToProps)(MailPage);