import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchHeroes, removeHeroes } from '../actions/heroes';
import { fetchCountriesRank } from '../actions/mmr';
import HeroesTable from '../components/hero-table';
import CountryRank from '../components/country-rank';

class Home extends Component {
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
				<a href="/test">Go to search page</a>
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

const mapStateToProps = (state) => {
	return {
		heroes: state.heroes,
		countriesRank: state.countriesRank
	};
};

const ConnectedHome = connect(mapStateToProps)(Home);

export default ConnectedHome;