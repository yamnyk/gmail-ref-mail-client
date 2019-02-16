import {
	SEND_EMAIL,
	DEL_EMAIL,
	SHOW_NEW_MAIL_FORM,
	START_UPDATE_EMAIL_LIST, SUCCESS_UPDATE_EMAIL_LIST
} from '../../actions/mails'
import mailList from "../../dummy-data/dummy";

const initialState = {
	mailList: {...mailList},
	showNewMailForm: false,
	isEmailListUpdatng: false,
};

function mails(state = initialState, action) {
	switch (action.type) {
		case SHOW_NEW_MAIL_FORM:
			return {...state, showNewMailForm: true};
		case SEND_EMAIL:
		case DEL_EMAIL:
		case START_UPDATE_EMAIL_LIST:
			return {...state, isEmailListUpdation: true};
		case SUCCESS_UPDATE_EMAIL_LIST:
			return {...state, ...action.payload, isEmailListUpdating: false};
		default:
			return {...state};
	}
}