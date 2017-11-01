import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchPlayer} from '../actions/player';

class Search extends Component {
	render() {
		return (
			<div className="search">
				<section className="row search-section">
					<div className="col-md-4"></div>
					<div className="col-md-4 search-box">
						<div className="input-group search-input">
							<input type="text" className="form-control" id="search-query" placeholder="Search players" aria-label="Search players" onKeyPress={() => this._handleKeyPress} />
							<span className="input-group-btn">
								<button className="btn btn-primary" type="button" onClick={() => this._handleSearch()}>Go!</button>
							</span>
						</div>
					</div>
					<div className="col-md-4"></div>
				</section>
			</div>
		);
	}

	_handleKeyPress(e) {
		if (e.key == 'Enter') this._handleSearch();
	}

	_handleSearch() {
		const { dispatch } = this.props;

		let query = $('#search-query').val();
		dispatch(searchPlayer(query));
	}
}

const mapStateToProps = (state) => {
	return {
		players: state.players
	};
};

const ConnectedSearch = connect(mapStateToProps)(Search);

export default Search;