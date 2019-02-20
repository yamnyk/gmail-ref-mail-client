import React, {Component} from 'react';
import './FolderItem.scss'

class FolderItem extends Component {
	render() {
		const {switchFolder, folderName} = this.props;
		console.log(switchFolder);
		return (
			<>
				<li className="folder-item" onClick={()=>{switchFolder(folderName)}}>{this.props.folderName}</li>
			</>
		);
	}
}

export default FolderItem;