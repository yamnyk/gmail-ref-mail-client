import React, {Component} from 'react';
import './Header.scss'

class Header extends Component {
	render() {
		return (
			<header className="head-panel">
				<img src="https://via.placeholder.com/150?text=logo" alt="Logo NOT FOUND" className="circle-shape head-panel__img"/>
				<input type="text" className="head-panel__search-bar"/>
				<img src="https://via.placeholder.com/150?text=avatar" alt="Avatar NOT FOUND" className="circle-shape head-panel__img head-panel__avatar"/>
			</header>
		);
	}
}

export default Header;