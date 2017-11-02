import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchPlayer} from '../actions/player';
import SearchResult from './search-result';

class Search extends Component {
	render() {
		let { players } = this.props;

		return (
			<div className="search">
				<section className="row search-section">
					<div className="col-md-4"></div>
					<div className="col-md-4 search-box">
						<form onSubmit={(e) => this._handleSearchSubmit(e)}>
							<div className="input-group search-input">
								<input type="text" className="form-control" id="search-query" placeholder="Search players" aria-label="Search players" />
								<span className="input-group-btn">
									<button className="btn btn-primary" type="submit">Go!</button>
								</span>
							</div>
						</form>
					</div>
					<div className="col-md-4"></div>
				</section>
				<SearchResult players={players} />
			</div>
		);
	}

	_handleSearchSubmit(e) {
		e.preventDefault();

		const { dispatch } = this.props;

		let query = $('#search-query').val();
		dispatch(searchPlayer(query));
	}
}

Search.propTypes = {
	players: PropTypes.array
};

const mapStateToProps = (state) => {
	return {
		players: state.players
	};
};

const ConnectedSearch = connect(mapStateToProps)(Search);

export default ConnectedSearch;