import {
	SEND_EMAIL,
	DEL_EMAIL,
	TOGGLE_NEW_MAIL_FORM,
	TOGGLE_UPDATE_EMAIL_LIST,
	SUCCESS_UPDATE_EMAIL_LIST
} from '../../actions/mails'
import mailList from "../../dummy-data/dummy";

const initialState = {
	mailList: {...mailList},
	newMailFormToggle: false,
	isEmailListUpdatng: false,
};


function mails(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_NEW_MAIL_FORM:
			return {...state, newMailFormToggle: !state.newMailFormToggle};
		case SEND_EMAIL:
		case DEL_EMAIL:
		case TOGGLE_UPDATE_EMAIL_LIST:
			return {...state, isEmailListUpdating: true};
		case SUCCESS_UPDATE_EMAIL_LIST:
			return {...state, ...action.payload, isEmailListUpdating: false};
		default:
			return {...state};
	}
}

export default mails;