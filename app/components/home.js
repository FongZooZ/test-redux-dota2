import React, { Component } from 'react';
import { fetchHeroes, removeHeroes } from '../actions/heroes';
import PropTypes from 'prop-types';

class Home extends Component {
	render() {
		let data = this.props.heroes;
		return (
			<div id="home">
				<div>Welcome to Dota 2 Statistics ✌(◕‿-)✌</div>
				<div>Select which data you want to show</div>
				<button onClick={() => this._getHeroes()}>Get heroes</button>
				<button onClick={() => this._removeHeroes()}>Remove heroes</button>
				<p>{data && data.length ? JSON.stringify(data) : '┐( ˘_˘)┌'}</p>
			</div>
		);
	}

	_getHeroes() {
		const { dispatch } = this.props;
		dispatch(fetchHeroes());
	}

	_removeHeroes() {
		const { dispatch } = this.props;
		dispatch(removeHeroes());
	}
}

Home.propTypes = {
	heroes: PropTypes.array
};

export default Home;