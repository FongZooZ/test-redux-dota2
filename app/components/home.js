import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchHeroes, removeHeroes } from '../actions/heroes';
import HeroesTable from './hero-table';

class Home extends Component {
	render() {
		let { heroes } = this.props;

		return (
			<div id="home">
				<div>Welcome to Dota 2 Statistics ✌(◕‿-)✌</div>
				<div>Select which data you want to show</div>
				<button onClick={() => this._getHeroes()}>Get heroes</button>
				<button onClick={() => this._removeHeroes()}>Remove heroes</button>
				<HeroesTable heroes={heroes} />
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