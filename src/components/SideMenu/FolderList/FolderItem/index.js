import React, {Component} from 'react';
import './FolderItem.scss'

class FolderItem extends Component {
	render() {
		return (
			<>
				<li className="dash-board-item">{this.props.folderName}</li>
			</>
		);
	}
}

export default FolderItem;