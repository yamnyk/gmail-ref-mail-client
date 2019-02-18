import React, {Component} from 'react';
import './DashBoardItem.scss'

class DashBoardItem extends Component {
	render() {
		return (
			<>
				<li className="dash-board__item">{this.props.folderName}</li>
			</>
		);
	}
}

export default DashBoardItem;