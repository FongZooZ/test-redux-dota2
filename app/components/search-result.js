import React, { Component } from 'react';
import moment from 'moment';

class SearchResult extends Component {
	render() {
		let { players } = this.props;
		let searchResult = null;
		if (players.length > -1) {
			let playerRows = [];

			players.forEach(player => {
				let lastPlayed = player.last_match_time ? moment(player.last_match_time).fromNow() : null;
				playerRows.push(
					<li>
						<a href={`/players/${player.account_id}`}>{player.personaname}</a> <span className="last-played">{lastPlayed}</span>
					</li>
				);
			});

			searchResult = (
				<section className="row search-results">
					<div className="col-md-2"></div>
					<div className="col-md-8">
						<div className="title">
							Public Players <span className="subtitle">{players.length} result(s)</span>
						</div>
						<ol className="results">
							{playerRows}
						</ol>
					</div>
					<div className="col-md-2"></div>
				</section>
			);
		}

		return searchResult;
	}
}

export default SearchResult;