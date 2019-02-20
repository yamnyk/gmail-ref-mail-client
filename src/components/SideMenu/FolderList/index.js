import React, {Component} from 'react';
import { connect } from "react-redux";
import FolderItem from "./FolderItem";
import "./FolderList.scss"
import { switchFolder } from "../../../actions/mails";

class FolderList extends Component {
	static collectPropNames(object) {
		const res = [];
		for(let prop in object) {
			res.push(prop);
		}
		return res;
	}
	
	render() {
		const folders = FolderList.collectPropNames(this.props.mailList).map((folder) => {
			return (
				<FolderItem key={Math.random()*(10**(Math.random()*100))} folderName={folder} switchFolder={this.props.switchFolder}/>
			)
		});
		
		return (
			<ul className="folder-list">
				{folders}
			</ul>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		mailList: {...state.mails.mailList},
		currentFolder: state.mails.currentFolder,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		switchFolder: (folder) => {
			dispatch(switchFolder(folder));
		}
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(FolderList);