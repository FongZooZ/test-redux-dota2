'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import Home from './containers/home';
import reducer from './reducers';

// Additional imports for webpack
import 'jquery';
import 'bootstrap';
import './styles/_index.scss';

const middleware = [logger, thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

class App extends Component {
	render() {
		return (
			<ConnectedHome />
		);
	}
}

const mapStateToProps = (state) => {
	return {
		heroes: state.heroes,
		countriesRank: state.countriesRank,
		common: state.common
	};
};

const ConnectedHome = connect(mapStateToProps)(Home);

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));