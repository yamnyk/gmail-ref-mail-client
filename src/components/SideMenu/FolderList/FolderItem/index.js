import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import './FolderItem.scss'

class FolderItem extends Component {
	render() {
		const {switchFolder, folderName} = this.props;
		console.log(switchFolder);
		return (
			<>
				<li  onClick={()=>{switchFolder(folderName)}}>
					<NavLink to="/" className="folder-item">
						{this.props.folderName}
					</NavLink>
				</li>
			
			</>
		);
	}
}

export default FolderItem;