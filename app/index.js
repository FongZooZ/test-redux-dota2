'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import Home from './components/home';
import reducer from './reducers';

const middleware = [logger, thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

class App extends Component {
	constructor() {
		super();
	}

	render() {
		let { heroes } = this.props;
		return (
			<ConnectedHome heros={heroes} />
		);
	}
}

const mapStateToProps = (state) => {
	return {
		heroes: state.heroes
	};
};

const ConnectedHome = connect(mapStateToProps)(Home);

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));