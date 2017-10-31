import React, { Component } from 'react';

class CountryRank extends Component {
	render() {
		let mmrTable = null;

		let { countriesRank } = this.props;

		if (countriesRank && countriesRank.length > 0) {
			let countryRows = [];
			countriesRank.forEach((row, index) => {
				countryRows.push(
					<tr key={`country_mmr_for_${row.loccountrycode}`}>
						<td>{index + 1}</td>
						<td>{row.common}</td>
						<td>{row.count}</td>
						<td>{row.avg}</td>
					</tr>
				);
			});

			mmrTable =
				<table className="table table-dark">
					<thead>
						<tr>
							<th scope="col">Rank</th>
							<th scope="col">Name</th>
							<th scope="col">Total</th>
							<th scope="col">Avg MMR</th>
						</tr>
					</thead>
					<tbody>
						{countryRows}
					</tbody>
				</table>
		}

		return mmrTable;
	}
}

export default CountryRank