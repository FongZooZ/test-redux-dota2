import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchHeroes, removeHeroes } from '../actions/heroes';
import HeroesTable from '../components/hero-table';

class Home extends Component {
	render() {
		let { heroes } = this.props;

		return (
			<div id="home">
				<div>Welcome to Dota 2 Statistics ✌(◕‿-)✌</div>
				<div>Select which data you want to show</div>
				<button className="btn btn-primary" onClick={() => this._getHeroes()}>Get heroes</button>
				<button className="btn btn-danger" onClick={() => this._removeHeroes()}>Remove heroes</button>
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