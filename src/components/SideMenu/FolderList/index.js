import React, {Component} from 'react';
import { connect } from "react-redux";
import DashBoardItem from "../../DashBoard/DashBoardItem";


class FolderList extends Component {
	collectPropNames(object) {
		const res = [];
		for(let prop in object) {
			res.push(prop);
		}
		return res;
	}
	
	render() {
		const folders = this.collectPropNames(this.props.mailList).map((folder,index) => {
			return <DashBoardItem key={index<<folder.length} folderName={folder}/>
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