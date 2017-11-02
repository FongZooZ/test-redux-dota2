import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPlayerDetail } from '../actions/player';

class Player extends Component {
	componentDidMount() {
		let { dispatch } = this.props;
		let { params } = this.props.match;

		if (params.accountId) {
			dispatch(getPlayerDetail(params.accountId));
		}
	}

	render() {
		let { params } = this.props.match;
		if (!params.accountId) return (<div>Sorry, but the player was not found</div>);

		return (
			<div>sdsd</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		player: state.player
	};
};

const ConnectedPlayer = connect(mapStateToProps)(Player);

export default ConnectedPlayer;