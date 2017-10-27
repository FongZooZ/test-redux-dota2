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

				<div className="alert alert-primary" role="alert">
				  This is a primary alert—check it out!
				</div>
				<div className="alert alert-secondary" role="alert">
				  This is a secondary alert—check it out!
				</div>
				<div className="alert alert-success" role="alert">
				  This is a success alert—check it out!
				</div>
				<div className="alert alert-danger" role="alert">
				  This is a danger alert—check it out!
				</div>
				<div className="alert alert-warning" role="alert">
				  This is a warning alert—check it out!
				</div>
				<div className="alert alert-info" role="alert">
				  This is a info alert—check it out!
				</div>
				<div className="alert alert-light" role="alert">
				  This is a light alert—check it out!
				</div>
				<div className="alert alert-dark" role="alert">
				  This is a dark alert—check it out!
				</div>
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