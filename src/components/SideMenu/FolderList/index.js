import React, {Component} from 'react';
import { connect } from "react-redux";
import FolderItem from "./FolderItem";
import "./FolderList.scss"

class FolderList extends Component {
	static collectPropNames(object) {
		const res = [];
		for(let prop in object) {
			res.push(prop);
		}
		return res;
	}
	
	render() {
		const folders = FolderList.collectPropNames(this.props.mailList).map((folder, index) => {
			return (
				<FolderItem key={index<<folder.length} folderName={folder}/>
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
	
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(FolderList);