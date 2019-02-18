export const SEND_EMAIL = 'SEND_EMAIL';
export const DEL_EMAIL = 'DEL_EMAIL';
export const TOGGLE_NEW_MAIL_FORM = 'TOGGLE_NEW_MAIL_FORM';
export const TOGGLE_UPDATE_EMAIL_LIST = 'TOGGLE_UPDATE_EMAIL_LIST';
export const SUCCESS_UPDATE_EMAIL_LIST = 'SUCCESS_UPDATE_EMAIL_LIST';


export function toggleNewMail() {
	return (dispatch) => {
		dispatch({
			type: TOGGLE_NEW_MAIL_FORM,
		});
	};
}

export function delEmail(delID, mailList) {
	let newMailList = {...mailList};
	
	for (let folder in newMailList) {
		newMailList[folder].map((leter) => {
			if(leter.id !== delID) {
				return leter;
			}
		});
	}
	return (dispatch) => (
		{
			payload: {
				mailList: newMailList
			}
		}
	);
}

export function updateEmailList() {
	return (dispatch) => {
		dispatch({
			type: TOGGLE_UPDATE_EMAIL_LIST,
		});
		setTimeout(() => {
			dispatch({type:SUCCESS_UPDATE_EMAIL_LIST});
		}, 5000)
	}
}