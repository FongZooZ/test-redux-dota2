import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchHeroes, removeHeroes } from '../actions/heroes';
import { fetchCountriesRank } from '../actions/mmr'
import HeroesTable from '../components/hero-table';
import CountryRank from '../components/country-rank';

class Home extends Component {
	componentWillReceiveProps(nextProps) {
		if (nextProps.common.stack) console.log(nextProps.common.stack);
	}

	render() {
		let { heroes, countriesRank } = this.props;

		return (
			<div id="home">
				<div>Welcome to Dota 2 Statistics ✌(◕‿-)✌</div>
				<div>Select which data you want to show</div>
				<button className="btn btn-sm btn-primary" onClick={() => this._getHeroes()}>Get heroes</button>
				<button className="btn btn-sm btn-danger" onClick={() => this._removeHeroes()}>Remove heroes</button>
				<button className="btn btn-sm btn-primary" onClick={() => this._getCountriesRank()}>Countries MMR</button>
				<HeroesTable heroes={heroes} />
				<CountryRank countriesRank={countriesRank} />
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

	_getCountriesRank() {
		const { dispatch } = this.props;
		dispatch(fetchCountriesRank());
	}
}

Home.propTypes = {
	heroes: PropTypes.array
};

export default Home;