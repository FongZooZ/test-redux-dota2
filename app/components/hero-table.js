import React, { Component } from 'react';

class HeroesTable extends Component {
	render() {
		let table;
		let { heroes } = this.props;

		if (heroes && heroes.length) {
			let heroRows = [];
			heroes.forEach((hero) => {
				heroRows.push(
					<tr key={`heroRow_${hero.id}`}>
						<td>{hero.id}</td>
						<td>{hero.name}</td>
						<td>{hero.localized_name}</td>
						<td>{hero.primary_attr}</td>
						<td>{hero.attack_type}</td>
						<td>{hero.roles.toString()}</td>
						<td>{hero.legs}</td>
					</tr>
				);
			});

			table =
				<table>
					<thead>
						<tr>
							<td>ID</td>
							<td>Name</td>
							<td>Localized Name</td>
							<td>Primary Attribute</td>
							<td>Attack Type</td>
							<td>Roles</td>
							<td>Legs</td>
						</tr>
					</thead>
					<tbody>
						{heroRows}
					</tbody>
				</table>;
		}

		return (
			<div>{table}</div>
		);
	}
}

export default HeroesTable