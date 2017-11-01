'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import Home from './containers/home';
import reducers from './reducers';

// Additional imports for webpack
import 'jquery';
import 'bootstrap';
import './styles/_index.scss';

const history = createHistory();
const middleware = [logger, thunk, routerMiddleware(history)];

const store = createStore(reducers, applyMiddleware(...middleware));

const ConnectedHome = connect(mapStateToProps)(Home);

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
		countriesRank: state.countriesRank
	};
};

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<Route exact path="/" component={App} />
				<Route path="/test" component={App} />
			</div>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
