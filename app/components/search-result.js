import React, { Component } from 'react';

class SearchResult extends Component {
	render() {
		let { players } = this.props;
		let searchResult = null;
		if (players.length > -1) {
			let playerRows = [];

			players.forEach(player => {
				playerRows.push(
					<tr key={`player_row_${player.account_id}`}>
						<td className="player">
							<img className="player-avatar" src={player.avatarfull} alt={player.personaname} />
							<a className="player-name" href={`/player/${player.account_id}`}>{player.personaname} ></a>
							<div className="player-last-match">{player.last_match_time}</div>
						</td>
					</tr>
				);
			});

			searchResult = (
				<section className="row search-results">
					<div className="col-md-1"></div>
					<div className="col-md-10">
						<div className="title">
							Public Players <span className="subtitle">{players.length} result(s)</span>
						</div>
						<table className="table-dark">
							<thead>
								<tr>
									<th>NAME</th>
								</tr>
							</thead>
							<tbody>
								{playerRows}
							</tbody>
						</table>
					</div>
					<div className="col-md-1"></div>
				</section>
			);
		}

		return searchResult;
	}
}

export default SearchResult;