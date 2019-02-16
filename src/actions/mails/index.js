export const SEND_EMAIL = 'SEND_EMAIL';
export const DEL_EMAIL = 'DEL_EMAIL';
export const SHOW_NEW_MAIL_FORM = 'SHOW_NEW_MAIL_FORM';
export const START_UPDATE_EMAIL_LIST = 'START_UPDATE_EMAIL_LIST';
export const SUCCESS_UPDATE_EMAIL_LIST = 'SUCCESS_UPDATE_EMAIL_LIST';

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