import React, {Component} from 'react';
import { connect } from "react-redux";


class FolderList extends Component {
	collectFolders() {
		// this.props
	}
	
	render() {
		
		return (
			<ul className="folder-list">
			
			</ul>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	
	};
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps,mapDispatchToProps)(FolderList);